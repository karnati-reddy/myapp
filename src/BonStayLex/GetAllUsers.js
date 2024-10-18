import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const GetAllUsers = () => {
    const [users, setUsers] = useState([])
    const [delSuccess, setDelSuccess] = useState("")
    const [delError, setDelError] = useState("")
    useEffect(() => {
        axios.get("http://localhost:4000/users" + users)
            .then((result) => {
                console.log(result)
                setUsers(result.data)
            })
            .catch(() => {
                // setError("Error while fetching data")
            })
    }, [users])

    const deleteUser = (id) => {
        axios.delete("http://localhost:4000/users/" + id)
            .then((result) => {
                setDelSuccess("user deleted successfully")
            })
            .catch((error) => {
                setDelError("Error while deleting the user")
            })
    }
    return (
        <>
            <div className='text-center'><h3>All Users</h3>
                {delSuccess ? <div>{delSuccess}</div> : null}
                {setDelError ? <div>{delError}</div> : null}
                {users.length > 0 ?
                    <table className='table table-striped table-bordered'>
                        <tr name="headers">
                            <th>Id</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>EmailId</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                        {
                            users.map((user) => {
                                return (<tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.email}</td>
                                    <td><Link to={"/details/" + user.id}>View User</Link></td>
                                    <td><button onClick={(event) => { deleteUser(user.id) }} >Delete</button></td>
                                </tr>)
                            })
                        }
                    </table>:null}
            </div>
        </>
    )
}

export default GetAllUsers
