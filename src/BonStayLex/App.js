import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import BookARoom from './BookARoom';
import Bookings from './Bookings';
import GetHotel from './GetHotel';
import Home from './Home';
import Hotels from './Hotels';
import Login from './Login';
import PageNotFound from './PageNotFound';
import ReSchedule from './ReSchedule';
import RegistrationPage from './RegistrationPage';
import Review from './Review';
import View from './View';
import ViewCustomer from './ViewCustomer';
import GetAllUsers from './GetAllUsers';
import HomeP from './HomeP';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    // const { id } = useParams();

    useEffect(() => {
        // Check if the user is logged in on initial render
        const token = sessionStorage.getItem('id');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('id');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (

        <div className='App'>
            <div className='menu'>
                {isLoggedIn ? (
                    <ul>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/hotels">Hotels</NavLink></li>
                        <li><NavLink to="/bookings">Bookings</NavLink></li>
                        <li><NavLink to="/view">View</NavLink></li>
                        <li><NavLink to="/" onClick={handleLogout}>Logout</NavLink></li>
                    </ul>
                ) : (
                    <ul>

                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>

                    </ul>
                )}
            </div>

            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} navigate={navigate} />} />
                {isLoggedIn && (
                    <>
                        <Route path="/bookroom" element={<BookARoom />} />
                        <Route path="/bookroom/:id" element={<BookARoom />} />
                        <Route path="/hotels/:id/bookroom/:id" element={<BookARoom />} />
                        <Route path="/details/:id" element={<ViewCustomer />} />
                        <Route path="/hotels" element={<Hotels />} />
                        <Route path="/hotels/:id" element={<Hotels />} />
                        <Route path="/review" element={<Review />} />
                        <Route path="/hotelDet" element={<GetHotel />} />
                        <Route path="/view" element={<View />} />
                        <Route path="/reschedule/:id" element={<ReSchedule />} />
                        <Route path="/bookings" element={<Bookings />} />
                        <Route path="/getallusers" element={<GetAllUsers />} />
                        <Route path='/dashboard' element={<HomeP />} />
                        <Route path="*" element={<PageNotFound />} />
                    </>
                )}

            </Routes>
        </div>


    );
};

export default App