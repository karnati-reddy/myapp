import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hotels from './Hotels';
// import './Bookings.css'; // Import your custom CSS file for styling

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [cancelSuccess, setCancelSuccess] = useState('');
    const [cancelError, setCancelError] = useState('');
    const navigate =useNavigate()

    useEffect(() => {
        axios.get('http://localhost:4000/bookings/') // Fetch booking data from API
            .then((result) => {
                setBookings(result.data);
            })
            .catch(() => {
                setCancelError('Error while fetching bookings. Please try again later.');
            });
    }, []); // Fetch bookings only once on component mount

    const handleCancelBooking = async (bookingId) => {
        try {
            const response = await axios.delete(`http://localhost:4000/bookings/${bookingId}`);
            setBookings(bookings.filter((booking) => booking._id !== bookingId)); // Update bookings state without re-fetching
            setCancelSuccess('Booking cancelled successfully!');
        } catch (error) {
            setCancelError('Error canceling booking. Please try again later.');
        }
    };

    return (
        <>
            <div className="text-center">
                <h3>All Bookings</h3>
                {cancelSuccess && <div className="alert alert-success">{cancelSuccess}</div>}
                {cancelError && <div className="alert alert-danger">{cancelError}</div>}
                {bookings.length > 0 ? (
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {bookings.map((booking) => (
                            <div key={booking._id} className="col">
                                <div className="card h-100 shadow-sm">
                                    {/* Add an image section if desired */}
                                    {/* <img
                    src="https://via.placeholder.com/300x200?text=Hotel+Image" // Replace with placehoder or actual image URL
                    className="card-img-top"
                    alt={booking.hotelName} // Assuming hotelName exists
                  /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{booking.hotelName}</h5> {/* Assuming hotelName exists */}
                                        <p>Hotel Name: </p>{Hotels.name}
                                        <p>
                                            <b>Start Date:</b> {booking.startDate}
                                        </p>
                                        <p>
                                            <b>End Date:</b> {booking.endDate}
                                        </p>
                                        <p>
                                            <b>Number of Persons:</b> {booking.noOfPersons}
                                        </p>
                                        <p>
                                            <b>Number of Rooms:</b> {booking.noOfRooms}
                                        </p>
                                        <p>
                                            <b>Type of Room:</b> {booking.typeOfRoom}
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            className="btn btn-primary me-2"
                                            onClick={() => navigate(`/reschedule/${booking._id}`)} // Pass booking ID as query parameter
                                        >
                                            Reschedule Booking
                                        </button>
                                        <button
                                            className="btn btn-danger float-right"
                                            onClick={() => handleCancelBooking(booking.id)}
                                        >
                                            Cancel Booking
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No bookings found.</p>
                )}
            </div>
        </>
    );
};

export default Bookings;
