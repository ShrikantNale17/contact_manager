import React from 'react'
import { useNavigate } from 'react-router-dom'
import user from '../Images/user.png'

function ContactCard(props) {

    const { id, name, email } = props.contact
    const navigate = useNavigate()

    /*  const style =  {
         boxShadow: "2px 2px 5px black"
     } */

    function handleCard() {
        navigate(`/view/${id}`, { state: props.contact })
    }

    function addShadowEffect() {
        document.getElementById(id).style.boxShadow = "2px 2px 5px 2px grey"
    }

    function removeShadowEffect() {
        document.getElementById(id).style.boxShadow = ""
    }

    function confirmAction(id) {

        const action = window.confirm("Do you want to delete contact?")

        if (action) {
            props.handleContact(id)
        }
    }

    // function updateContact(id) {
    //     navigate(`/edit/${id}`,{state: props.contact})
    // }

    return (
        <div className="item" id={id} style={{ background: "#e5e5e5", marginBottom: "5px", padding: "10px" }} onMouseOver={addShadowEffect} onMouseOut={removeShadowEffect}>
            <div className="right floated content">
                <i className="edit alternate outline icon" style={{ color: "blue", marginTop: "7px", marginRight: "10px", cursor: "pointer" }} onClick={() => navigate(`/edit/${id}`, { state: props.contact })}></i>
                <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px", cursor: "pointer" }} onClick={() => confirmAction(id)}></i>
            </div>
            <img className='ui avatar image' src={user} alt='user' />
            <div className="content" onClick={handleCard} style={{ cursor: "pointer" }}>
                {/* <Link to={{pathname:`/view/${id}`,state:{contact: props.contact}}}> */}
                <div className="header">{name}</div>
                <div className="description">{email}</div>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default ContactCard
