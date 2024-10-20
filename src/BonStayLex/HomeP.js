import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

import { Container, Typography, CircularProgress } from '@mui/material';

const HomeP = () => {
    const [user, setUser] = useState([]); // Initialize user to array for loading state
    const [isLoading, setIsLoading] = useState(true); // Track loading state for feedback

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('token'); // Replace with your token storage mechanism

                if (!token) {
                    // Handle case where user is not logged in (redirect to login?)
                    console.warn('User is not logged in. Redirect to login page?');
                    return;
                }

                const response = await axios.get('http://localhost:4000/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in Authorization header
                    },
                });

                // Adjust this line to access the username property based on your API structure
                const userName = response.data.Name || response.data.username; // Assuming username might be 'Name' or 'username' property

                setUser(userName); // Update user with just the username
            } catch (error) {
                console.error(error);
                // Handle error gracefully, e.g., display an error message to the user
            } finally {
                setIsLoading(false); // Ensure loading state is updated even on errors
            }
        };

        fetchUser();
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <Container maxWidth="md">
            {isLoading ? (
                <CircularProgress sx={{ mt: 4, mb: 4 }} />
            ) : (
                user ? (
                    <>
                        <Typography variant="h2" component="h2" gutterBottom>
                            Welcome, {user.Name}!
                        </Typography>
                        {/* Other content using user data */}
                    </>
                ) : (
                    <Typography variant="h5" component="h5" gutterBottom>
                        An error occurred while fetching user data.
                    </Typography>
                )
            )}
            <Typography className='home'>
                Bonstay always provides you an amazing and pleasant stay<br />
                with your friends and family at reasonable prices.<br />
                We provide well-designed space with modern amenties.<br />
                you can reserve a room faster with our efficient Bonstay app
            </Typography>
            <h2>Our Services</h2>
            <ul>
                <li>Easy Booking</li>
                <li>Quick Cancellation</li>
                <li>24/7 Customer Service</li>
                <li>Best Price Guaranteed</li>
            </ul>
            <h2>Our Mission</h2>
            <Typography>
                Our mission is to provide the best services to our customers<br />
                and make their stay comfortable and memorable.
            </Typography>
            <h2>Our Vision</h2>
            <Typography>
                Our vision is to become the best hotel booking platform<br />
                and provide the best services to our customers.
            </Typography>
            <h2>Our Values</h2>
            <Typography>
                Our values are to provide the best services to our customers<br />
                and make their stay comfortable and memorable.
            </Typography>
            <h2>Our Team</h2>
            <Typography>
                Our team is dedicated to providing the best services to our customers<br />
                and make their stay comfortable and memorable.
            </Typography>
            <h2>Contact Us</h2>
            <Typography>
                Email: queries@bonstay.com <br />
                Phone: +91 9191919191 <br />
                Address: 90/1A, Kochi, Kerala
            </Typography>
        </Container>
    );
};

export default HomeP;