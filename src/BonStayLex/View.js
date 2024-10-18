import axios from 'axios';
import React, { useState } from 'react'

const View = () => {
    const [user, setUser] = useState({ id: "", Name: "", email: "" });
    const [Delete, setDelete] = useState("")

    const handleDetelte = () => {
        try{
            axios.delete(`http://localhost:4000/users/${user.id}`);
            setUser({ id: '' });
            setDelete('User deleted successfully');
        }
        catch (error) {
            setDelete('Error deleting user. Please try again later.');
            console.error(error);
        }
    }

    const handleChange = (e) => {
        let val = e.target.value;
        setUser({ ...user, id: val });
        setDelete(val.length < 4 ? 'User id should be minimum 4 characters' : '');
    }
    const viewBooking = async () => {

        try {
            const response = await axios.get(`http://localhost:4000/users/${user.id}`);
            setUser(response.data);
            setDelete('');
        }
        catch (error) {
            setDelete('User ID not found.');
            console.error(error);
        }
    }

    return (
        <>
            <center>
                <div>
                    <h4>
                        <input type='text' name='id' placeholder='User id' value={user.id} data="userGivenID" onChange={handleChange} />
                        <button className='btn btn-primary' style={{ marginLeft: "1%" }} onClick={viewBooking}>View Button</button>
                    </h4>

                    {/* <p className='text-danger' data="error">{error}</p> */}
                    <p className='text-danger' data="del">{Delete}</p>

                    <div className='centre' id='img'>
                        <div className='cards' style={{ marginTop: "1%", marginLeft: "43%", fontSize: "16px" }}>
                            <h4 className='card-header' data-id="bookingId">View user: {user.id}</h4><br />
                            <div className='card-body' style={{ padding: "10px" }}>
                                <p>Name: {user.Name}</p>
                                <p>Email: {user.email}</p>
                                <button className='btn btn-secondary'
                                    data-id='delete-button'
                                    onClick={handleDetelte}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default View
