function Map() {
    var employees = [
        { empId: 1234, name: "John", designation: "SE" },
        { empId: 4567, name: "Tom", designation: "SSE" },
        { empId: 8910, name: "Kevin", designation: "TA" },
    ];
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>EmpID</th>
                        <th>Name</th>
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
        </>
    );
}
export default Map