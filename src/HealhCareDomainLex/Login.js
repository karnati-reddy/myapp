import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState("")
    const [error, setErrors] = useState("")
    const navigate = useNavigate("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.get("http://localhost:4000/users/" + id)
            .then((response) => {
                let udata = response.data;
                if (udata.password === password) {
                    // navigate("/")
                    setSuccess("Login successfully :" + id)
                }
                else {
                    setErrors("Invalid Username/Password or SignUP and try to login")
                }
            })
            .catch((error) => {
                console.log(error)
                setErrors("Error while login user");
            })
    }
    return (
        <div>
            <h2>Login as a Coach</h2>
            <form onSubmit={handleSubmit} className='text-center'>
                <div>
                    <label>Id: </label>
                    <input type='text' value={id} onChange={(e) => setId(e.target.value)} placeholder='Enter Id' />
                </div> <br />
                <div>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                </div><br />
                <input type='submit' value="Login" className='btn btn-primary' />
                <div>
                    {success && <h3 style={{ color: 'green' }}>{success}</h3>}
                    {error && <h3 style={{ color: 'red' }}>{error}</h3>}
                </div>
            </form>
        </div>
    )
}

export default Login
