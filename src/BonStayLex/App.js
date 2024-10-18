import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import BookARoom from './BookARoom'
import Bookings from './Bookings'
import GetHotel from './GetHotel'
import Home from './Home'
import Hotels from './Hotels'
import Login from './Login'
import PageNotFound from './PageNotFound'
import ReSchedule from './ReSchedule'
import RegistrationPage from './RegistrationPage'
import Review from './Review'
import View from './View'
import ViewCustomer from './ViewCustomer'
import GetAllUsers from './GetAllUsers'

const App = () => {
    return (
        <div>
            <div className='App'></div>
            {/* <RegistrationPage /> */}
            <ul className='menu'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/hotels">Hotels</NavLink></li>
                <li><NavLink to="/bookings">Bookings</NavLink></li>
                <li><NavLink to="/view">View</NavLink></li>
                <li><NavLink to="/Logout">Logout</NavLink></li>
            </ul>

            <Routes>
                <Route index path ='/' element={<Home/>} />
                <Route path='/register' element={<RegistrationPage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/bookroom' element={<BookARoom/>}/>
                <Route path='/bookroom/:id' element={<BookARoom/>}/>
                <Route path='/hotels/:id/bookroom/:id' element={<BookARoom/>}/>
                <Route path="/details/:id" element={<ViewCustomer/>} />
                {/* <Route path="hotels={hotelId}/bookroom/" element={<BookARoom/>}/> */}
                <Route path='/hotels' element={<Hotels/>}/>
                <Route path='/hotels/:id' element={<Hotels/>}/>
                <Route path='/review' element={<Review/>}/>
                <Route path='/hotelDet' element={<GetHotel/>}></Route>
                <Route path='/view' element={<View/>}></Route>
                <Route path='/reschedule/:id' element={<ReSchedule/>}></Route>
                {/* <Route payh='/logout' element={<Logout/>}></Route> */}
                <Route path='/bookings' element={<Bookings/>}></Route>
                <Route path='/getallusers' element={<GetAllUsers/>}></Route>
                <Route path='*' element={<PageNotFound/>}></Route>
            </Routes>

        </div>
    )
}

export default App
