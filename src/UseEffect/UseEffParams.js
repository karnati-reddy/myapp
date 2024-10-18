import React, { useEffect, useState } from 'react'

const UseEffParams = () => {
    const [name, setName] = useState("Jack")
    const [age, setAge] = useState(23)
    useEffect(() => {
        console.log("use Effect called");
    }, [age])
    return (
        <d>
            <h1>Your Name is: {name}</h1><br />
            <h1>Your Age is: {age} </h1><br />
            <button className='btn btn-primary' onClick={()=>setName("Tom")}>Update Name</button><br/>
            <button className='btn btn-primary' onClick={()=>setAge(age+1)}>Update Age</button>
        </d>
    )
}

export default UseEffParams
