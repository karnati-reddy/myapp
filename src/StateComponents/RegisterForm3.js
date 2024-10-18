import React, { useState } from 'react'

const RegisterForm3 = () => {
    const [state, setState] = useState({ username: "", password: "", email: "" })
    const [formErrors, setFormErrors] = useState({ username: "", password: "", email: "" })
    const [mandatory, setMandatory] = useState(false)
    const [valid, setValid] = useState(false)
    // Single handler function for all control
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
        if (event.target.name == "username") {
            let value = event.target.value;
            if (value.length < 7) {
                setFormErrors({ ...formErrors, username: "Username must be at least 6 characters" })
            }
            else {
                setFormErrors({ ...formErrors, username: "" })
                setValid(true)
            }
        }
        if (event.target.name == "password") {
            let value = event.target.value;
            if (value.length < 9) {
                setFormErrors({ ...formErrors, password: "password must be at least 8 characters" })
            }
            else {
                setFormErrors({ ...formErrors, password: "" })
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.username === "" || state.password === "" || state.email === "") {
            setMandatory(true)
        }
        else {
            setMandatory(false)
            console.log("form  submitted");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Register Form</h3>
                <label>Username</label><br />
                <input type='text' name='username' value={state.username} onChange={handleChange} /><br/>
                {formErrors.username!=""?<p className='text-danger'>{formErrors.username}</p>:null}
                <label>Password</label><br/>
                <input type='password' name='password' value={state.password} onChange={handleChange}/><br/>
                {formErrors.password!=""?<p className='text-danger'>{formErrors.password}</p>:null}
                <label>EmailID</label><br/>
                <input type='email' name='email' value={state.email} onChange={handleChange}/><br/>
                <input type='submit' value="Register" disabled={!valid}/>
                {mandatory?<p>Please enter all the fields</p>:null}

            </form>
        </>
    )
}

export default RegisterForm3
