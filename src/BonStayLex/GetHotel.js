import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const GetHotel = () => {
    const { id } = useParams()
    const [users, setUsers] = useState([])
    const [cancel, setCancel] = useState("")
    const [error, setError] = useState("")
    const [reSchedule, setReSchedule] =useState("")

    useEffect(() => {
        axios.get("http://localhost:4000/hotels/")
            .then((result) => {
                console.log(result);
                setUsers(result.data)
            })
            .catch(() => {
                setError("Error while fetching data")
            })
    }, [users])

    const cancelUser = (id) => {
        axios.delete("http://localhost:4000/hotels/" + id)
            .then((result) => {
                setCancel("cancelled your order")
            })
            .catch(() => {
                setError("Something went wrong, Please try again later")
            })
    }

    // const handleRes = (id) => {
    //     axios.get("http://localhost:4000/hotels/" + id)
    //     .then((res) =>{
    //         console.log(res);
    //         setReSchedule("Re-Scheduled Successfully")
    //     })
    //     .catch(() =>{
    //         setError("Try again")
    //     })
    // }
    return (
        <>
            <div className='text-center'><h3>All Users</h3>
                {setCancel ? <div>{cancel}</div> : null}
                {setError ? <div>{error}</div> : null}
                {setReSchedule ? <div>{reSchedule}</div>:null}
                {users.length > 0 ?
                    <table className='table table-striped table-bordered'>
                        <tr name="headers">
                            <th>Id</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>No of Persons</th>
                            <th>No of Rooms</th>
                            <th>Type of Room</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                        {
                            users.map((user) => {
                                return (<tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.startDate}</td>
                                    <td>{user.endDate}</td>
                                    <td>{user.noOfPersons}</td>
                                    <td>{user.noOfRooms}</td>
                                    <td>{user.typeOfRoom}</td>
                                    <td><Link to={"/details/" + user.id}>View User</Link></td>
                                    <td><button onClick={() => { cancelUser(user.id) }}>Cancel</button></td>
                                    <td><Link to={"/reschedule/" + user.id}>Re-Scheduled</Link></td>
                                    {/* <td><button onClick={() => { handleRes(user.id)}}>Re-Schedule</button></td> */}

                                </tr>)
                            })
                        }
                    </table> : null}
            </div>
        </>
    )
}

export default GetHotel
