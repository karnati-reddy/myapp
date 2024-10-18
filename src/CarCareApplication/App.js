import React from 'react'
import CreateBooking from './CreateBooking'
import { NavLink, Route, Routes } from 'react-router-dom'
import ViewBookings from './ViewBookings'
import Home from './Home'

const App = () => {
    return (
        <div>
            
            <ul className='menu'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/register">CreateBooking</NavLink></li>
                <li><NavLink to="/view">View</NavLink></li>
            </ul>

            <Routes>
                <Route index path ='/' element={<Home/>} />
                <Route path='/register' element={<CreateBooking/>}/>
                <Route path='/view' element={<ViewBookings/>}/>
            </Routes>
        </div>
    )
}

export default App
