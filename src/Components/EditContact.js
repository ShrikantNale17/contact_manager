import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function EditContact(props) {

    const navigate = useNavigate()
    const location = useLocation()

    const { id, name, email } = location.state

    const [state, setState] = useState({
        id,
        name,
        email
    })

    /* const setValues = (e) => {
        const [name, value] = e.target

        setState(prevState => )
    } */
    // console.log(state)

    const submitForm = (e) => {
        e.preventDefault()
        if (state.name === "" || state.email === "") {
            alert("All fields are mandatory!!!")
            return
        }
        // console.log(state)
        props.updateContactHandler(state)
        setState({ name: "", email: "" })
        navigate("/")
        /* console.log(window.history)
        window.history.pushState({}, undefined, "/")
        console.log(window.history) */
    }

    return (
        <div className='contact-form'>
            <fieldset>
                <legend><h4>Edit Contact</h4></legend>
                <form className="ui form" onSubmit={submitForm} autoComplete='off'>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </fieldset>
            {/* <Link to="/">
                <button className='ui button blue right floated' style={{marginTop: "10px"}}>Contact List</button>
            </Link> */}

        </div>
    )
}

export default EditContact
