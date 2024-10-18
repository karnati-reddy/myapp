import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Hotels from './Hotels';
import GetAllUsers from './GetAllUsers';


const BookARoom = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfPersons, setNoOfPersons] = useState(1);
    const [noOfRooms, setNoOfRooms] = useState(1);
    const [typeOfRoom, setTypeOfRoom] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('')
    const [error, setErrors] = useState('')
    const [users, setUsers] = useState([])
    const [errors, setError] = useState("")
    const [hotels, setHotels] = useState([]);
    const params=useParams()//object
    const navigate = useNavigate();
    let {id}=params;

    // const getAllUsers = () => {
    //     axios.get("http://localhost:4000/users" + id)
    //         .then((result) => {
    //             setUsers(result.data)
    //         })
    //         .catch(() => {
    //             setError("Error while fetching data")
    //         })
    //     }

    // useEffect = (() => {
    //     getAllUsers()
    // }, [id])


    const validateForm = () => {
        let isValid = true;
        setErrorMessage('');

        if (!startDate) {
            isValid = false;
            setErrorMessage('Start date is required.');
        } else if (startDate < new Date()) {
            isValid = false;
            setErrorMessage('Start date must be in the future.');
        }

        if (!endDate) {
            isValid = false;
            setErrorMessage('End date is required.');
        } else if (endDate < startDate) {
            isValid = false;
            setErrorMessage('End date must be after start date.');
        }

        if (!noOfPersons || noOfPersons <= 0 || noOfPersons > 5) {
            isValid = false;
            setErrorMessage('Number of persons must be between 1 and 5.');
        }

        if (!noOfRooms || noOfRooms <= 0 || noOfRooms > 3) {
            isValid = false;
            setErrorMessage('Number of rooms must be between 1 and 3.');
        }

        if (!typeOfRoom) {
            isValid = false;
            setErrorMessage('Type of room is required.');
        }

        return isValid;
    };

                const handleSubmit = (event) => {
                    event.preventDefault();

                    if (validateForm()) {
                        // Submit form data (using axios or other means)
                        axios.post("http://localhost:4000/bookings", {
                            startDate,
                            endDate,
                            noOfPersons,
                            noOfRooms,
                            typeOfRoom,
                        })
                            .then((response) => {
                                setSuccess("Booked Successfully: " + response.data.id)
                            })
                            .catch(() => {
                                setErrors("Error while booking")
                            })
                    }
                };

                // Extra Code Which is not required
                useEffect(() => {
                    axios.get("http://localhost:4000/bookings" + id)
                        .then((result) => {
                            setHotels(result.data);
                        })
                        .catch(() => {
                            // Handle errors appropriately (e.g., display an error message)
                        });
                }
                    , [hotels]);



                return (
                    <>
                        <div className='bookpage'>
                            <form onSubmit={handleSubmit}>
                                {errorMessage && <p className="error-message">{errorMessage}</p>}
                                <h4>Book Hotel</h4>
                                {/* <h3>Welcome User : {id}</h3> */}
                                <label>Start Date:</label><br />
                                <input type="date"
                                    value={startDate.toISOString().substring(0, 10)}
                                    onChange={(e) => setStartDate(new Date(e.target.value))}
                                /><br />
                                <label>End Date:</label><br />
                                <input type="date"
                                    value={endDate.toISOString().substring(0, 10)}
                                    onChange={(e) => setEndDate(new Date(e.target.value))}
                                /><br />
                                <label>Number of Persons:</label><br />
                                <input type="number"
                                    value={noOfPersons}
                                    onChange={(e) => setNoOfPersons(Number(e.target.value))}
                                /><br />
                                <label>Number of Rooms: </label><br />
                                <input type="number"
                                    value={noOfRooms}
                                    onChange={(e) => setNoOfRooms(Number(e.target.value))}
                                /><br />
                                <label>Type of Room: </label><br />
                                <select value={typeOfRoom} onChange={(e) => setTypeOfRoom(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="single with A/c">Single with A/c</option>
                                    <option value="double with A/c">Double with A/c</option>
                                    <option value="suite with A/c">Suite with A/c</option>
                                </select>
                                <br />
                                {/* <button type="submit">Book Now</button><br /> */}
                                <button
                                            className="btn btn-primary me-2"
                                            onClick={() => navigate(`/bookroom?userId=${users.id}`)}
                                        >
                                            Book Now
                                        </button>
                                {/* <Link to={`/bookroom?userId=${users.id}`}>Book Now</Link> */}
                                {/* <Link to="/hotelDet" className="login-paragraph"> Click here to Hotel Details</Link><br/> */}
                                {/* <Link to="/user1" className='user-para'>Click User Details</Link> */}
                                {success ? <p className='text-success'>{success}</p> : null}
                                {error ? <p className='text-error'>{error}</p> : null}
                            </form>
                        </div>
                    </>
                )
            }

export default BookARoom
