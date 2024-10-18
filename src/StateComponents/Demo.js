import React, { useState } from 'react'

const Demo = () => {
    const[counter,seCounter]=useState(0)
    return (
        <>
        Counter: {counter}<br/>
        <button className='btn btn-primary' onClick={()=> seCounter(()=> counter+1)}>Increament</button>
        </>
    )
}

export default Demo
