// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Hotels = () => {
//     const navigate=useNavigate()
//     return (
// <>
// <div className='hotels'>
//     <h3>Paradise Stay</h3>
//     <span>
//         City: Bangalore <br/>
//         Amenties: Different Cuisine Food, Swimming Pool, Self Cooking Station<br/>
//         Address: 120/IC, Bangalore, Karnataka<br/>
//         Contact No: 9090909090<br/>
//         <button onClick={()=> {navigate("/login")}}>Book A Room</button><br/>
//         <button onClick={()=> {navigate("/review")}}>Add review</button>
//     </span><br/><br/>

//     <h3>Hill Palace</h3>
//     <span>
//         City: Kochi <br/>
//         Amenties: Homely Food, Sea Food, Children's Park, Boating<br/>
//         Address: 90/1A, Kochi, Kerala<br/>
//         Contact No: 9191919191<br/>
//         <button onClick={()=> {navigate("/login")}}>Book A Room</button><br/>
//         <button onClick={()=> {navigate("/review")}}>Add review</button>
//     </span><br/><br/>

//     <h3>Monsoon Stay Palace</h3>
//     <span>
//         City: Chennei <br/>
//         Amenties: 24 hr Homely Food, Security, Children's Park<br/>
//         Address: 90/1A, Kochi, Kerala<br/>
//         Contact No: 9191919191<br/>
//         <button onClick={()=> {navigate("/login")}}>Book A Room</button><br/>
//         <button onClick={()=> {navigate("/review")}}>Add review</button>
//     </span><br/><br/>


// </div>
// </>
//     )
// }

// export default Hotels


// ========================================================================================



// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Hotels = () => {
//     const [hotels, setHotels] = useState([])
//     const [delSuccess, setDelSuccess] = useState("")
//     const [delError, setDelError] = useState("")

//     const navigate = useNavigate()

//     useEffect(() => {
//         axios.get("http://localhost:4000/hotels")
//             .then((result) => {
//                 console.log(result)
//                 setHotels(result.data)
//             })
//             .catch(() => {
//             })
//     }, [hotels])
//     return (
//         <>
//             <div className='text-center'><h3>All Hotels</h3>
//                 {delSuccess ? <div>{delSuccess}</div> : null}
//                 {setDelError ? <div>{delError}</div> : null}
//                 {hotels.length > 0 ?
//                     <>
//                         {
//                             hotels.map((hotel) => {
//                                 return (<div className='hotels'>
//                                     <h3>{hotel.hotelName}</h3>
//                                     <span>
//                                         City: {hotel.city} <br />
//                                         Description: {hotel.description}<br />
//                                         Amenties: {hotel.amenities}<br />
//                                         Address: {hotel.address}<br />
//                                         Contact No: {hotel.phoneNo}<br />
//                                         {/* <Link to={"/login"}>Book A Room</Link><br />
//                                         <Link to={"/review"}>Add review</Link> */}

//                                         <button onClick={() => { navigate("/login") }}>Book A Room</button><br />
//                                         <button onClick={() => { navigate("/review") }}>Add review</button>
//                                         <button onClick={() => { navigate("/viewReview") }}>View review</button>
//                                     </span><br /><br />
//                                 </div>)
//                             })
//                         }
//                     </> : null}
//             </div>
//         </>
//     )
// }

// export default Hotels

//-----------------------------------------------------------------------------------

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Hotels.css'; // Import your custom CSS file for styling

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [delSuccess, setDelSuccess] = useState('');
    const [delError, setDelError] = useState('');
    const [selectedHotel, setSelectedHotel] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/hotels')
            .then((result) => {
                console.log(result);
                setHotels(result.data);
            })
            .catch(() => {
                // Handle errors appropriately (e.g., display an error message)
            });
    }, [hotels]); // Empty dependency array to fetch hotels only once

    const handleReview = (hotelId) => {
        navigate(`/viewReview?hotelId=${hotelId}`);
    };

    return (
        <>
            <div className="text-center">
                {/* <h3>All Hotels</h3> */}
                {delSuccess && <div className="alert alert-success">{delSuccess}</div>}
                {delError && <div className="alert alert-danger">{delError}</div>}
                {hotels.length > 0 ? (
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {hotels.map((hotel) => (
                            <div key={hotel.id} className="col">
                                <div className="card h-100 shadow-sm">
                                    {/* <img
                                        src="https://via.placeholder.com/300x200?text=Hotel+Image" // Replace with placeholder or actual image URL
                                        className="card-img-top"
                                        alt={hotel.hotelName}
                                    /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{hotel.hotelName}</h5>
                                        <span>
                                            <p>City: {hotel.city}</p>
                                            <p>Description: {hotel.description}...</p>
                                            <p>Amenities: {hotel.amenities}</p>
                                        </span>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Contact No: {hotel.phoneNo}</small>
                                        <br/>
                                        <button
                                            className="btn btn-primary me-2"
                                            onClick={() => navigate(`/login?hotelId=${hotel.id}`)} // Pass hotel ID as query parameter
                                        >
                                            Book a Room
                                        </button>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => navigate(`/review?hotelId=${hotel.id}`)} // Pass hotel ID as query parameter
                                        >
                                            Add Review
                                        </button>

                                        <button className='btn btn-danger float-right'
                                            onClick={()=> handleReview(hotel.id)}
                                            >
                                            View Review
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                null
                )}
            </div>
            {selectedHotel && ( // Conditionally display selected hotel name
                <div>
                    <h2>Selected Hotel: {selectedHotel.hotelName}</h2>
                    {/* You can display additional details about the selected hotel here */}
                </div>
            )}
        </>
    );
};

export default Hotels;