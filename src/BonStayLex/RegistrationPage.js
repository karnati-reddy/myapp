import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const RegistrationPage = () => {
    const [state, setState] = useState({ Name: "", Address: "", PhoneNo: "", email: "", password: "" })
    const [formErrors, setFormErrors] = useState({ Name: "", Address: "", PhoneNo: "", email: "", password: "" })
    const [mandatory, setMandatory] = useState(false)
    const [valid, setValid] = useState(false)
    const [success, setSuccess] = useState("")
    const [error, setErrors] = useState("")
    const [existingUser, setExistingUser] = useState(false)

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
        if (event.target.name === "Name") {
            let value = event.target.value;
            if (value.length < 4) {
                setFormErrors({ ...formErrors, Name: "Min 3 Characters" })
            }
            else {
                setFormErrors({ ...formErrors, Name: "" })
            }
        }
        if (event.target.name === "PhoneNo") {
            let value = event.target.value;
            if (value.length < 10 || value.length > 10) {
                setFormErrors({ ...formErrors, PhoneNo: "Not less than 10 digits or more than 10 digits" })
            }
            else {
                setFormErrors({ ...formErrors, PhoneNo: "" })
            }
        }
        if (event.target.name === "password") {
            let value = event.target.value
            if (value.length < 9 || value.length > 13) {
                setFormErrors({ ...formErrors, password: "Length between 8 and 12 characters" })
                setValid(true)
            }
            else {
                setFormErrors({ ...formErrors, password: "" })
                setValid(true)
            }
        }
    }

    useEffect(() => {
        const checkexistingUser = async () => {
            try {
                const response = await axios.get("http://localhost:4000/users?email=" + state.email)
                if (response.data.length > 0) {
                    setExistingUser(true)
                } else {
                    setExistingUser(false)
                }
            } catch (error) {
                console.log(error)
                setErrors("Error while checking existing user")
            }
        }
        if (state.email) {
            checkexistingUser()
        }
        else {
            setExistingUser(false)
        }
    }, [state.email])

    // Handle the Submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.Name === "" || state.Address === "" || state.PhoneNo === "" || state.email === "" || state.password === "") {
            setMandatory(true)
        }
        else {
            setMandatory(false)

            axios.post("http://localhost:4000/users", state)
                .then((response) => {
                    setSuccess("Registered Successfully with user id: " + response.data.id);
                })
                .catch(() => {
                    setErrors("Error while Registering")
                })
        }
    }

    return (
        <>
            <div id='form' className='img'>
                <form onSubmit={handleSubmit}>

                    <h5>BONSTAY</h5>
                    <label>Name:</label><br />
                    <input type='text' name='Name' value={state.Name} placeholder="enter name" onChange={handleChange} /><br />
                    {formErrors.Name !== "" ? <p className='text-danger'>{formErrors.Name}</p> : null}

                    <label>Address:</label><br />
                    <input type='text' name='Address' value={state.Address} placeholder='enter address' onChange={handleChange} /><br />
                    {formErrors.Address !== "" ? <p className='text-danger'>{formErrors.Address}</p> : null}
                    <label>Phone No</label><br />
                    <input type='text' name='PhoneNo' value={state.PhoneNo} placeholder='enter mobile number' onChange={handleChange} /><br />
                    {formErrors.PhoneNo !== "" ? <p className='text-danger'>{formErrors.PhoneNo}</p> : null}

                    <label>Email ID</label><br />
                    <input type='email' name='email' value={state.email} placeholder='enter mail id' onChange={handleChange} /><br />
                    {formErrors.email !== "" ? <p className='text-danger'>{formErrors.email}</p> : null}
                    {existingUser ? <div className="text-danger">This email is already registered. Please try with another email!</div> : null}

                    <label>password</label><br />
                    <input type='password' name='password' value={state.password} placeholder='enter password' onChange={handleChange} /><br />
                    {formErrors.password !== "" ? <p className='text-danger'>{formErrors.password}</p> : null}<br />

                    <input type='submit' value="Register" disabled={!valid} /> <br/>
                    {mandatory ? <p>Please enter all the fields</p> : null}
                    {success ? <p className='text-success'>{success}</p> : null}
                    {error ? <p className='text-success'>{error}</p> : null}

                    <Link to = "/login">Login</Link> with your existing account

                </form>
            </div>


        </>
    )
}

export default RegistrationPage
