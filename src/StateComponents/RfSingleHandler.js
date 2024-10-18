import React, { useState } from 'react'

const RfSingleHandler = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const SubmitData = (event) => {
        event.preventDefault();//prevent page default page refresh
        console.log("form is submitted", username, password)
    }
    //single handler function for all controls
    const handleChange = (event) => {
        if (event.target.name === "username") {
            setUserName(event.target.value)
        }
        else if (event.target.name === "password") {
            setPassword(event.target.value)
        }
    }
    return (
        <div>
            <form onSubmit={SubmitData}>
                <h3>Register Form</h3>
                <label>Username</label><br />
                <input type='text' name="username" value={username} onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type='password' name="password" value={password} onChange={handleChange} /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default RfSingleHandler
