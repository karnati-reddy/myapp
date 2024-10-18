import React from 'react'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='decoration'><h2 className='display-4'>404</h2>
            <h1>PageNotFound</h1>
            <button onClick={() => { navigate("/") }}>Home</button>
        </div>

    )
}

export default PageNotFound