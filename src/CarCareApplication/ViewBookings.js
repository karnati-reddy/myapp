import axios from 'axios';
import React, { useState } from 'react'

const ViewBookings = () => {
    const [bookings, setBookings] = useState({ id: '', serviceName: '', email: '', bookedOn: '' });
    const [errorMsg, setErrorMsg] = useState(''); // Simplified error handling

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:4000/bookings/${bookings.id}`);
            setBookings({ id: '' }); // Clear booking details after successful deletion
            setErrorMsg('Booking deleted successfully');
        } catch (error) {
            setErrorMsg('Error deleting booking. Please try again later.');
            console.error(error);
        }
    };

    const handleChange = (e) => {
        let val = e.target.value;
        setBookings({ ...bookings, id: val });
        setErrorMsg(val.length < 4 ? 'Booking id should be minimum 4 characters' : '');
    };

    const ViewBooking = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/bookings/${bookings.id}`);
            setBookings(response.data);
            setErrorMsg(''); // Clear any previous errors on successful fetch
        } catch (error) {
            setErrorMsg('Booking ID not found.');
            console.error(error);
        }
    };

    return (
        <>
            <center>
                <div className="container">
                    <h4 className='viewheader'>
                        <input type="text" placeholder="Enter Booking ID" onChange={handleChange} value={bookings.id} />
                        <button className='btn btn-primary' style={{ marginLeft: "1%" }} onClick={ViewBooking}> ViewBooking</button>
                    </h4>
                    <p className='text-danger'>{errorMsg}</p>

                    {
                        <div className='card' style={{ marginTop: "1%", marginLeft: "43%", fontSize: "16px" }}>
                            <h4 className='card-header'>Booking Id : {bookings.id}</h4>
                            <div className='card-body' style={{ padding: "10px" }}>
                                <p>Service Name: {bookings.serviceName}</p>
                                <p>Email: {bookings.email}</p>
                                <p>Booked On: {bookings.bookedOn}</p>
                                <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    }
                </div>
            </center>
        </>
    )
}

export default ViewBookings
