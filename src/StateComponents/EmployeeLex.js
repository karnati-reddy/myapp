import React, { useState } from 'react'

const EmployeeLex = () => {
    const [employees, setEmployees] = useState([
        { empId: 1234, name: "Phanee", designation: "TE" },
        { empId: 2345, name: "Vani", designation: "SE" },
        { empId: 3456, name: "Charan", designation: "SSE" }

    ]);

    const addEmployee = (event) => {
        setEmployees([...employees, { empId: 4567, name: "Ramki", designation: "ETA" },]);
    };
    return (
        <div>
            <table style={{ width: "50%" }} className='table'>
                <thead className='thread-light'>
                    <tr>
                        <th>EmpID</th>
                        <th>EmpName</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr key={employee.empId}>
                                <td>{employee.empId}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>
            <button className='btn btn-primary' onClick={addEmployee}>Add an Employee</button>
        </div>
    )
}

export default EmployeeLex
