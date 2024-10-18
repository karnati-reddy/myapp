import axios from 'axios'
import React, { useEffect, useState } from 'react'

const JoinAsCoach = () => {
    const [state, setState] = useState({ Name: '', Password: '', DateOfBirth: null, Gender: '', MobileNumber: '', Speciality: '' })
    const [formErrors, setFormErrors] = useState({ Name: '', Password: '', DateOfBirth: null, Gender: '', MobileNumber: '', Speciality: '' })
    const [mandatory, setManadatory] = useState(false)
    const [success, setSuccess] = useState("")
    const [error, setErrors] = useState("")

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
        if (e.target.name === 'Name') {
            let value = e.target.value;
            if (value.length < 4 || value.length > 50) {
                setFormErrors({ ...formErrors, Name: "Name should have 3 to 50 characters" })
            }
            else {
                setFormErrors({ ...formErrors, Name: "" })
            }
        }
        if (e.target.name === 'Password') {
            let value = e.target.value;
            if (value.length < 6 || value.length > 10) {
                setFormErrors({ ...formErrors, Password: "Password should have 5 to 10 characters" })
            }
            else {
                setFormErrors({ ...formErrors, Password: "" })
            }
        }
        if (e.target.name === 'DateOfBirth') {
            let value = e.target.value;
            const today = new Date();
            const birthDate = new Date(value);
            if (today.getFullYear() - birthDate.getFullYear() < 20 || today.getFullYear() - birthDate.getFullYear() > 100) {
                setFormErrors({ ...formErrors, DateOfBirth: "Age should be between 20 and 100 years" })
            }
            // if(value.length < 20 || value.length > 100){
            //     setFormErrors({...formErrors, DateOfBirth: "Age should be between 20 and 100 years"})
            // }
            else {
                setFormErrors({ ...formErrors, DateOfBirth: "" })
            }
        }
        if (e.target.name === 'Gender') {
            let value = e.taget.value;
            if (value === '') {
                setFormErrors({ ...formErrors, Gender: "Gender is mandatory" })
            }
            else {
                setFormErrors({ ...formErrors, Gender: "" })
            }
        }
        if (e.target.name === 'MobileNumber') {
            let value = e.target.value;
            if (value.length < 10 || value.length > 10) {
                setFormErrors({ ...formErrors, MobileNumber: "Mobile number should have 10 digits" })
            }
            else {
                setFormErrors({ ...formErrors, MobileNumber: "" })
            }
        }
        if (e.target.name === 'Speciality') {
            let value = e.target.value;
            if (value.length < 11 || value.length > 50) {
                setFormErrors({ ...formErrors, Speciality: "Speciality should have 10 to 50 characters" })
            }
            else {
                setFormErrors({ ...formErrors, Speciality: "" })
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.Name === '' || state.Password === '' || state.DateOfBirth === null || state.Gender === '' || state.MobileNumber === '' || state.Speciality === '') {
            setManadatory(true);
            axios.post('http://localhost:4000/coach', {...state})
                .then((response) => {
                    setSuccess("Coach added successfully: " + response.data.id);
                    setErrors(''); // Clear any previous errors on successful addition
                })
                .catch(() => {
                    setErrors("Error while adding coach");
                    setSuccess(''); // Clear any previous success messages on error
                });
        };
    }

    return (
        <>
            <h2>Join as a Coach</h2>
            <form onSubmit={handleSubmit} className='text-center'>
                <div>
                    <label>Name: </label>
                    <input type='text' name='Name' value={state.Name} onChange={handleOnChange} placeholder='Enter Name' />
                    {/* {mandatory && state.Name === '' && <span style={{ color: 'red' }}>Name is mandatory</span>} */}
                    {formErrors.Name !== "" ? <p className='text-danger'>{formErrors.Name}</p> : null}
                </div> <br />

                <div>
                    <label>Password</label>
                    <input type='password' name='Password' value={state.Password} onChange={handleOnChange} placeholder='Enter Password' />
                    {/* {mandatory && state.Password === '' && <span style={{ color: 'red' }}>Password is mandatory</span>} */}
                    {formErrors.Password !== "" ? <p className='text-danger'>{formErrors.Password}</p> : null}
                </div><br />

                <div>
                    <label>Date of Birth</label>
                    <input type='date' name='DateOfBirth' value={state.DateOfBirth} onChange={handleOnChange} placeholder='Enter Date of Birth' />
                    {/* {mandatory && state.DateOfBirth === null && <span style={{ color: 'red' }}>Date of Birth is mandatory</span>} */}
                    {formErrors.DateOfBirth !== "" ? <p className='text-danger'>{formErrors.DateOfBirth}</p> : null}
                </div><br />

                <div>
                    <label>Gender :</label>&nbsp;
                    <input
                        type='radio'
                        name='Gender'
                        value="male"
                        checked={state.Gender === 'male' || state.Gender === ''}
                        onChange={handleOnChange}
                    />
                    <label>Male</label>&nbsp;
                    <input
                        type='radio'
                        name='Gender'
                        value="female"
                        checked={state.Gender === 'female' || state.Gender === ''}
                        onChange={handleOnChange}
                    />
                    <label>Female</label>
                    {formErrors.Gender !== '' && <p className='text-danger'>{formErrors.Gender}</p>}
                </div><br />

                <div>
                    <label>Mobile Number</label>
                    <input type='mobile' name='MobileNumber' value={state.MobileNumber} onChange={handleOnChange} placeholder='Enter mobile number' />
                    {/* {mandatory && state.MobileNumber === '' && <span style={{ color: 'red' }}>Mobile Number is mandatory</span>} */}
                    {formErrors.MobileNumber !== "" ? <p className='text-danger'>{formErrors.MobileNumber}</p> : null}
                </div><br />

                <div>
                    <label>Speciality</label>
                    <input type='text' name='Speciality' value={state.Speciality} onChange={handleOnChange} placeholder='Enter Speciality' />
                    {/* {mandatory && state.Speciality === '' && <span style={{ color: 'red' }}>Speciality is mandatory</span>} */}
                    {formErrors.Speciality !== "" ? <p className='text-danger'>{formErrors.Speciality}</p> : null}
                </div><br />

                <div>
                    <button type='submit'>Join as a Coach</button>
                    {/* {mandatory ? <p className='text-danger'>Please enter all the fields</p> : null} */}
                </div>
                {success ? <p className='text-success'>{success}</p> : null}
                {error ? <p className='text-danger'>{error}</p> : null}


            </form>
        </>
    )
}

export default JoinAsCoach
