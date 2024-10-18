import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
    const [state, setState] = useState({ username: "", password: "", email: "" })
    const [formErrors, setFormErrors] = useState({ username: "", password: "", email: "" })
    const [mandatory, setMandatory] = useState(false)
    const [valid, setValid] = useState(false)
    const [success, setSuccess] = useState("")
    const [error, setErrors] = useState("")

    // Single function for all controls
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
        if (event.target.name === "username") {
            let value = event.target.value;
            if (value.length < 7) {
                setFormErrors({ ...formErrors, username: "username must be at least 6 characters" })
            }
            else {
                setFormErrors({ ...formErrors, username: "" })
            }
        }
        if (event.target.name === "password") {
            let value = event.target.value;
            if (value.length < 9) {
                setFormErrors({ ...formErrors, password: "password must be at least 8 characters" })
                setValid(true)
            }
            else {
                setFormErrors({ ...formErrors, password: "" })
                setValid(true)
            }
        }
    }
    // Handle the Submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.username === "" || state.password === "" || state.email === "") {
            setMandatory(true)
        }
        else {
            setMandatory(false)
          //  console.log("form submitted");

        axios.post("http://localhost:4000/users", state)
            .then(() => {
                setSuccess("Registered Successfully")
            })
            .catch(() => {
                setErrors("Error while registering")
            })
    }
}
return (
    <>
    <div id='form'>
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <label>Username</label><br />
            <input type='text' name='username' value={state.username} onChange={handleChange} /><br />
            {formErrors.username !== "" ? <p className='text-danger'>{formErrors.username}</p> : null}

            <label>Password</label><br />
            <input type='password' name='password' value={state.password} onChange={handleChange} /><br />
            {formErrors.password !== "" ? <p className='text-danger'>{formErrors.password}</p> : null}

            <label>EmailId</label><br />
            <input type='email' name='email' value={state.email} onChange={handleChange} /><br />
            {formErrors.email !==""?<p className='text-danger'>{formErrors.email}</p>:null}
            
            <input type='submit' value="Register" disabled={!valid} />
            {mandatory ? <p>Please enter all the fields</p> : null}
            {success ? <p className='text-success'>{success}</p> : null}
            {error ? <p className='text-success'>{error}</p> : null}
        </form>
        </div>
    </>
)
}

export default Register