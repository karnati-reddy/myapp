import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HomeP = () => {
    const [user, setUser] = useState({Name: ""}); // Initialize user to null to avoid displaying an empty name

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Replace with your actual API endpoint that retrieves user data
                const response = await axios.get(`http://localhost:4000/users/${user.Name}`); // Placeholder ID
                setUser(response.data);
            } catch (error) {
                console.error(error);
                // Handle error gracefully, e.g., display an error message to the user
            }
        };

        fetchUser();
    }, []);

    return (
        <div >

            {user ? ( // Conditionally render the welcome message only if user is not null
                <h2>Welcome, {user.Name}!</h2>
            ) : (
                <h2>Loading user information...</h2>
            )}

            <p className='home'>
                Bonstay always provides you an amazing and pleasant stay<br />
                with your friends and family at reasonable prices.<br />
                We provide well-designed space with modern amenties.<br />
                you can reserve a room faster with our efficient Bonstay app
            </p>
            <h2>Our Services</h2>
            <ul>
                <li>Easy Booking</li>
                <li>Quick Cancellation</li>
                <li>24/7 Customer Service</li>
                <li>Best Price Guaranteed</li>
            </ul>
            <h2>Our Mission</h2>
            <p>
                Our mission is to provide the best services to our customers<br />
                and make their stay comfortable and memorable.
            </p>
            <h2>Our Vision</h2>
            <p>
                Our vision is to become the best hotel booking platform<br />
                and provide the best services to our customers.
            </p>
            <h2>Our Values</h2>
            <p>
                Our values are to provide the best services to our customers<br />
                and make their stay comfortable and memorable.
            </p>
            <h2>Our Team</h2>
            <p>
                Our team is dedicated to providing the best services to our customers<br />
                and make their stay comfortable and memorable.
            </p>
            <h2>Contact Us</h2>
            <p>
                Email: queries@bonstay.com <br />
                Phone: +91 9191919191 <br />
                Address: 90/1A, Kochi, Kerala
            </p>

        </div>
    )
}

export default HomeP
