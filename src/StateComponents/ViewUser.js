import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ViewUser = () => {
    const { id } = useParams()//{id:"456a"}//456a
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get("http://localhost:4000/users/" + id)
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (

        <div className='centre' id='img'>
            <h4>View user: {user.id}</h4>
            <p>Name: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>Emailid: {user.email}</p>
        </div>
    )
}
export default ViewUser