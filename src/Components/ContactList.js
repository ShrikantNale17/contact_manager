import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

function ContactList(props) {

    const { contactList, removeContactHandler } = props

    const handleContact = (id) => {
        removeContactHandler(id)
    }

    function searchContact(e) {
        props.searchHandler(e.target.value)
    }

    const listElements = contactList.map(contact => <ContactCard contact={contact} key={contact.id} handleContact={handleContact} />)

    return (
        <div className='contacts' style={{ margin: "60px 20px" }}>
            <h3>All Contacts:-
                {/* <Link to="/add">
                    <button className="ui button green" style={{ float: "right" }}>Create new contact</button>
                </Link> */}
            </h3>

            <div className='ui search'>
                <div className='ui icon input' style={{width: "50%"}}>
                    <input type='text' placeholder='Search Contacts' className='prompt' onChange={searchContact}/>
                    <i className='search icon'></i>
                </div>
                <Link to="/add">
                    <button className="ui button green" style={{ float: "right" }}>Create new contact</button>
                </Link>
            </div>

            <div className="ui relaxed divided list" id="list-items" style={{ marginTop: "30px" }}>
                {listElements.length > 0 ? listElements : <p style={{fontSize: "1.5em"}}>No Contacts</p>}
            </div>
        </div>
    )
}

export default ContactList
