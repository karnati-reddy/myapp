import React, { useEffect, useState } from 'react'

const UseEff = () => {
    const[name,setName]=useState("Raghu")
    const[age,setAge]=useState(24   )
    useEffect(()=>{
        console.log("use Effect called");
    })
    return (
        <>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <button className='btn btn-primary' onClick={()=>setName("Chandhu")}>Update Name</button>&nbsp;&nbsp;
        <button className='btn btn-primary' onClick={()=>setAge(age+1)}>Increment Age</button>
        </>
    )
}

export default UseEff
