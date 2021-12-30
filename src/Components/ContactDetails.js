import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import user from '../Images/user.png'

function ContactDetails(props) {
    const location = useLocation()
    console.log(location.state)
    const { name, email } = location.state
    return (
        <div>
            <div className="ui centered card">
                <div className="image">
                    <img src={user} alt='user'/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
                <Link to="/" className='ui button blue'>Back to Contact List</Link>
            </div>
            
        </div>
    )
}

export default ContactDetails
