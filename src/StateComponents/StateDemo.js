import React, { useState } from 'react'

/*
const StateDemo = () => {

    const [name,setName] = useState("")
    return (
        <>
        Your name is: {name}<br></br>
        <button onClick={()=>setName("Raghuram")}>Change</button>
        </>
    );
}

export default StateDemo
*/


const StateDemo = () => {
    const [name,setName]=useState("")
    const [age,setAge] = useState("")
    const handleChandge = ()=>{
        setName("raghuram")
        setAge(24)
    }
    return (
        <>
        Your name is : {name} and
        the age is: {age}<br/>
        <button onClick={handleChandge}>Change</button>
        </>
    )
}

export default StateDemo


