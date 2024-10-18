import React, { useState } from 'react'

const RegisterForm2 = () => {
    const [state, setState] = useState({ username: "", password: "", email: "" })
    const [formErrors, setFormErrors] = useState({ username: "", password: "", email: "" })
    const [mandatory, setMadatory] = useState(false)
    //single handler function for all controls
    const handleChange = (event) => {
        //console.log(state)
        // console.log(event.target.name,event.target.value)
        setState({ ...state, [event.target.name]: event.target.value })
        //console.log(state)
        if (event.target.name === "username") {
            let value = event.target.value;
            if (value.length < 4) {
                setFormErrors({ ...formErrors, username: "Username must be at least 3 characters" })
            }
            else {
                setFormErrors({ ...formErrors, username: "" })
            }
        }
        if (event.target.name === "password") {
            let value = event.target.value;
            if (value.length < 9) {
                setFormErrors({ ...formErrors, password: "Password must be at least 8 characters" })
            }
            else {
                setFormErrors({ ...formErrors, password: "" })
            }
        }
    }
            const handleSubmit = (event) => {
                event.preventDefault();
                if (state.username === "" || state.password === "" || state.email === "") {
                    setMadatory(true)
                }
                else {
                    setMadatory(false)
                    console.log("form submitted")
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Register Form</h3>
                <label>Username</label><br />
                <input type='text' name="username" value={state.username} onChange={handleChange} /><br />
                {formErrors.username !== "" ? <p className='text-danger'>{formErrors.username}</p> : null}
                <label>Password</label><br />
                <input type='password' name="password" value={state.password} onChange={handleChange} /><br />
                {formErrors.password !== "" ? <p className='text-danger'>{formErrors.password}</p> : null}
                <label>Email</label><br />
                <input type='text' name="email" value={state.email} onChange={handleChange} /><br />
                <input type="submit" value="Register" />
                {mandatory ? <p>Please enter all fields</p> : null}
            </form>
        </>
    )
}

export default RegisterForm2
