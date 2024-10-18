import { Button } from 'bootstrap'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    // const [success, setSuccess] = useState("")
    // const [error, setErrors] = useState("")
    const navigate=useNavigate()

    return (
        <>
            <footer className='footer' id='foot'> <h4>WeCare</h4>
                {/* <div className='phone'>Call US: 080 2233447</div> */}
            </footer>
            <h2>We are at the heart of appropriate care</h2>


            <div className='container'>
                <div className='left'>
            
                    <input type='submit' value="Login As Coach" onClick={()=>{navigate("/JoinAsCoach")}} className='btn btn-primary'/><br /><br />

                    <input type='submit' value="Join As Coach" onClick={()=>{navigate("/loginCoach")}} className='btn btn-primary'/><br /><br />
                </div>
                <div className='right'>
                    <input type='submit' value="Login As User" className='btn btn-primary'/><br /><br />
                    <input type='submit' value="Join As User" className='btn btn-primary'/><br /><br />
                </div>
            </div>
            <footer className='footer' id='foot'> <h5>Copyright © 2024, WeCare All rights reserved</h5>
                <div className='phone'>Call US: 080 2233447</div>
            </footer>

        </>
    )
}

export default Home
