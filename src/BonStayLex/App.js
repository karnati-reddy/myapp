import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
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

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountMenu from './AccountMenu';
import { Box, FormControlLabel, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './Themes/Theme';
import ThemeToggle from './Themes/ThemeToggle';
import ViewReview from './ViewReview';

const App = () => {

    const themeMode = useSelector((state) => state.theme.mode);
    const appliedTheme = themeMode === 'light' ? lightTheme : darkTheme;

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
        navigate('/');
    };

    return (
        <ThemeProvider theme={appliedTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Bonstay Hotel
                        </Typography>
                        {isLoggedIn ? (
                            <div>
                                <Button color="inherit" component={NavLink} to="/dashboard">Dashboard</Button>
                                <Button color="inherit" component={NavLink} to="/hotels">Hotels</Button>
                                <Button color="inherit" component={NavLink} to="/bookings">Bookings</Button>
                                <Button color="inherit" component={NavLink} to="/view">View</Button>
                                <AccountMenu handleLogout={handleLogout} />
                            </div>

                        ) : (
                            <div>
                                <FormControlLabel control={<ThemeToggle />} />
                                <Button color="inherit" component={NavLink} to="/">Home</Button>
                                <Button color="inherit" component={NavLink} to="/login">Login</Button>
                                <Button color="inherit" component={NavLink} to="/register">Register</Button>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>

                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} navigate={navigate} />} />
                    {isLoggedIn && (
                        <>
                            <Route path='/dashboard' element={<HomeP />} />
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
                            <Route path="/viewReview" element={<ViewReview/>} />
                            <Route path="*" element={<PageNotFound />} />
                        </>
                    )}
                </Routes>
            </Box>
        </ThemeProvider>
    );
};

export default App;