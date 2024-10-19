import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hotels from "./Hotels";

const Login = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoginEnabled, setIsLoginEnabled] = useState(false); // State to control login button
    const [success, setSuccess] = useState("")
    const [error, setErrors] = useState("")
    const navigate = useNavigate("")
    // const params = useNavigate()
    // let {ids}=params;
    const [hotels, setHotels] = useState([]);

    // const checkUserExistence = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:4000/users?email=${email}&&password=${password}`);
    //         console.log(response.data);
    //         if (response.data) {
    //             setIsLoginEnabled(true); // Enable login button if user exists
    //             return true
    //         } else {
    //             setIsLoginEnabled(false); // Disable login button if user doesn't exist
    //             // Optionally display an error message or redirect to registration
    //             return false
    //         }
    //     } catch (error) {
    //         console.error(error); // Handle API errors appropriately
    //         setIsLoginEnabled(false); // Disable login button in case of issues
    //     }
    // };

    useEffect(() => {
        axios.get('http://localhost:4000/hotels' +id)
            .then((result) => {
                console.log(result);
                setHotels(result.data);
            })
            .catch(() => {
                // Handle errors appropriately (e.g., display an error message)
            });
    }, [hotels]); // Empty dependency array to fetch hotels only once

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log("jkhdsjka");

        // const tt=`http://localhost:4000/users?email=${email} & password=${password}`
        // console.log(tt);
        // const response = await axios.get(`http://localhost:4000/users?email=${email} & password=${password}`)
        // if (response.data.length > 0) {
        //     console.log(response)
        //     // navigate("/bookroom")
        //     setSuccess(response.data)
        // }
        // else {
        //     setErrors("Invalid email or password")
        // }
        
        axios.get("http://localhost:4000/users/" + id)
            .then((response) => {
                let udata = response.data;
                if (udata.password === password) {
                    // navigate(`/bookroom/` + id )
                    // navigate(`/hotels/:id/bookroom/:id` + id)
                    sessionStorage.setItem('id', id);
                    setIsLoggedIn(true);
                    navigate(`/dashboard`)
                    console.log("login success :" + id);
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
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <h4 className="login">Login Form</h4>
            <label>UserID:</label><br />
            <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} required /><br />
            <label>Password:</label><br />
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
            <button type="submit" style={{color:"Highlight"}}>Login</button> <br/> <br/>
            {success ? <div>{success}</div> : null}
            {error ? <div>{error}</div> : null}
            {/* <button onClick={() => navigate("/register")}>Sign Up</button> */}
            <Link to="/register">Sign Up</Link> to create a new account.
        </form>
    );
}
export default Login