import React from 'react'
import { useNavigate } from 'react-router-dom'

const BootstrapDemo = () => {
    const navigate=useNavigate()
    return (
        <>
        <div className='home'>
            <h3>This is your Home page</h3>
            <p>
                If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community.

                You can use React without a framework, however we’ve found that most apps and sites eventually build solutions to common problems such as code-splitting, routing, data fetching, and generating HTML. These problems are common to all UI libraries, not just React.

                By starting with a framework, you can get started with React quickly, and avoid essentially building your own framework later.
            </p>
            <button onClick={() => { navigate("/register") }}>Sign Up</button>
            </div>
        </>
    )
}

export default BootstrapDemo
