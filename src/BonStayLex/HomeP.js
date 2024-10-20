import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

import { Container, Typography, CircularProgress } from '@mui/material';

const HomeP = () => {
    const [user, setUser] = useState(null); // Initialize user to array for loading state
    const [isLoading, setIsLoading] = useState(true); // Track loading state for feedback

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const userId = sessionStorage.getItem('id');
                if (userId) {
                    const response = await
                        axios.get(`http://localhost:4000/users/${userId}`); // Replace with your actual API endpoint
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    setUser(response.data);
                } else {
                    console.log("user not found in session storage");
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle errors gracefully, e.g., show an error message
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <Container maxWidth="md" className='dashboard'>
            {isLoading ? (
                <CircularProgress sx={{ mt: 4, mb: 4 }} />
            ) : (
                user ? (
                    <>
                        <Typography variant="h3" component="h2" color='white' gutterBottom>
                            Welcome to Bonstay, {user.Name}!
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