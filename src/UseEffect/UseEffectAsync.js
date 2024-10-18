import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseEffectAsync = () => {
    const [employee, setEmployee] = useState([]);
    const addEmployee = () => {
        setEmployee([...employee, { empId: 6789, name: "Clara", designation: "TL" },
        ]);
    };
    useEffect(() => {
        axios.get("http://localhost:4500/employee")
            .then((response) => {
                setEmployee(response.data)
            })
    }, []);
    return (
        <>
            <table style={{width:"60%"}} className='table'>
                <thead className='thread-light'>
                    <tr style={{backgroundColor:"blue"}}>
                        <th>EmpId</th>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((emp) => {
                        return (
                            <tr key={emp.empId}>
                                <td>{emp.empId}</td>
                                <td>{emp.name}</td>
                                <td>{emp.designation}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button style={{color:"green"}} onClick={addEmployee}>Add an Employee</button>
        </>
    )
}

export default UseEffectAsync
