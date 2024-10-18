import React, { useState } from 'react'

/*

const RegisterForm1 = () => {

    const[state, setState] = useState({username:"", password:"", email:""})

    // SingleHandler Function for all controls
    const handleChange=(event)=>{
        console.log(state);
        console.log(event.target.name,event.target.value);
        setState({...state,[event.target.name]:event.target.value})
       // console.log(state);
    }

    return (
        <>
        <form>
            <label>Username</label><br/>
            <input type='text' name='username' value={state.username} onChange={handleChange}></input><br/>
            <label>Password</label><br/>
            <input type='password' name='password' value={state.password} onChange={handleChange}/><br/>
            <label>Email</label><br/>
            <input type='email' name='email' value={state.email} onChange={handleChange}/><br/>
            <input type='submit' value="Register"/>
        </form>

        </>
    )
}

export default RegisterForm1

*/


const RegisterForm1 = () => {
    const [state, setState] = useState({ username: "", password: "", email: "" })
    const [mandatory, setMadatory] = useState(false)
    //single handler function for all controls
    const handleChange = (event) => {
        // console.log(state)
        // console.log(event.target.name, event.target.value)
        setState({ ...state, [event.target.name]: event.target.value })
        //  console.log(state)
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label><br />
                <input type='text' name='username' value={state.username} onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type='password' name='password' value={state.password} onChange={handleChange} /><br />
                <label>Email</label><br />
                <input type='email' name='email' value={state.email} onChange={handleChange} /><br />
                <input type='submit' value='Register' /><br />
                {mandatory ? <p>Please enter all fields</p> : null}
            </form>
        </div>
    )
}

export default RegisterForm1

