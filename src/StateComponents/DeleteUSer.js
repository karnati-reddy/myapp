import axios from 'axios'
import React, { useState } from 'react'

const DeleteUSer = () => {
    const [userId, setUserId] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setErrors] = useState("")
    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:4000/users" + userId)
            .then(() => {
                setSuccess("User Deleted Successfully")
                setErrors("")
            })
            .catch(() => {
                setErrors("Error while deleting user")
            })
    }
    return (
        <>

            <p>Delete User</p>
            <form onSubmit={handleDelete}>
                <input type='text' name='userid' value={userId} onChange={(event) => { setUserId(event.target.value) }} /><br />
                <button type='submit'>Delete</button>
            </form>
            {success ? <p className='text-success'>{success}</p> : null}
            {error ? <p className='text-success'>{error}</p> : null}
        </>
    )
}

export default DeleteUSer
