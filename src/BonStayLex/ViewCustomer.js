import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewCustomer = () => {
    const { id } = useParams();
    const [user, setUser] = useState({}); // Initialize user state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/users/${id}`); // Use template literal
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error); // Handle errors more gracefully
            }
        };

        fetchData(); // Call the function to fetch data
    }, [id]); // Dependency array ensures effect runs when id changes

    return (
        <div className='centre' id='img'>
            {user.id ? ( // Conditionally render content only if user data is available
                <div className='cards' style={{ marginTop: "1%", marginLeft: "43%", fontSize: "16px" }}>
                    <h4 className='card-header' data-id="bookingId">View user: {user.id}</h4>
                    <br />
                    <div className='card-body' style={{ padding: "10px" }}>
                        <p>Id: {user.id}</p>
                        <p>Name: {user.Name}</p>
                        <p>Address: {user.Address}</p>
                        <p>PhoneNo: {user.PhoneNo}</p>
                        <p>Email: {user.email}</p>  {/* Corrected property name here */}
                        <button className='btn btn-secondary' data-id='delete-button'>Delete</button>
                    </div>
                </div>
            ) : (
                <p>Loading user data...</p> // Display loading message while fetching data
            )}
        </div>
    );
};

export default ViewCustomer;
