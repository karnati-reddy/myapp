import axios from 'axios'
import React, { useState } from 'react'

const GetUser = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    const getData = (e) => {
        e.preventDefault();
        axios.get("http://localhost:4000/users")
            .then((response) => {
                console.log(response)
                setUsers(response.data)
            })
            .catch(() => {
                setError("Error while fetching data")
            })
    }
    return (
        <div>
            <p>GetUsers</p>
            <button onClick={getData}>Get users</button>
            {users.length > 0 ?
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email</th>
                    </tr>
                    {
                        users.map((user) => {
                            return (<tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.email}</td>
                            </tr>)
                        })}
                </table>
                : null}
        </div>
    )
}

export default GetUser
