import React from 'react'

const Employee = ({employees}) => {
    return (
        <>
        <table style={{ width: '60%' }} className='table'>
            <thead className='thread-light'>
                <tr>
                    <th>EmpId</th>
                    <th>EmpName</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee=>{
                    return(
                        <tr>
                            <td>{employee.empId}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table><br/><br/>
        </>
    )
}

export default Employee
