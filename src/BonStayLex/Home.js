import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='home'>
                <p>
                    Bonstay always provides you an amazing and pleasant stay<br/>
                    with your friends and family at reasonable prices.<br/>
                    We provide well-designed space with modern amenties.<br/>
                    you can reserve a room faster with our efficient Bonstay app
                </p>
                <Link to="/login" className="login-paragraph"> Click here to login</Link>
                {/* <li> <Link to="/getallusers" className="login-paragraph"> Click here to users</Link></li> */}
                {/* <button onClick={() => { navigate("/register") }}>Sign Up</button> */}
            </div>
        </>
    )
}

export default Home
