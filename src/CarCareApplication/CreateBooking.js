import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const CreateBooking = () => {
    const [state, setState] = useState({ email: '', bookedOn: null, serviceName: '' });
    const [formErrors, setFormErrors] = useState({ email: '', bookedOn: '', serviceName: '' });
    const [mandatory, setManadatory] = useState(false);
    const [success, setSuccess] = useState("")
    const [error, setErrors] = useState("")
    const [existingUser, setExistingUser] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const validateForm = () => {
        let isValid = true;
        // setFormErrors({ email: '', bookedOn: '', serviceName: '' }); // Reset errors

        if (!state.email) {
            isValid = false;
            setFormErrors({ ...formErrors, email: 'Email is required.' });
        } else if (!state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            isValid = false;
            setFormErrors({ ...formErrors, email: 'Please enter a valid email address.' });
        }

        if (!state.bookedOn) {
            isValid = false;
            setFormErrors({ ...formErrors, bookedOn: 'Booked On is required.' });
        } else if (isNaN(new Date(state.bookedOn))) {
            isValid = false;
            setFormErrors({ ...formErrors, bookedOn: 'Please enter a valid date.' });
        } else if (new Date(state.bookedOn) <= new Date()) {
            isValid = false;
            setFormErrors({ ...formErrors, bookedOn: 'Booked On must be in the future.' });
        }

        if (!state.serviceName || state.serviceName === 'Select Service') {
            isValid = false;
            setFormErrors({ ...formErrors, serviceName: 'Please select a valid service.' });
        }

        return isValid;
    };


    useEffect(() => {
        const checkexistingUser = async () => {
            try {
                const response = await axios.get("http://localhost:4000/bookings?email=" + state.email)
                if (response.data.length > 0) {
                    setExistingUser(true)
                } else {
                    setExistingUser(false)
                }
            } catch (error) {
                console.log(error)
                setErrors("Error while checking existing user")
            }
        }
        if (state.email) {
            checkexistingUser()
        }
        else {
            setExistingUser(false)
        }
    }, [state.email])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm() || existingUser) {
            return;
        }

        if (validateForm()) {
            axios.post("http://localhost:4000/bookings", {
                email: state.email,
                bookedOn: state.bookedOn,
                serviceName: state.serviceName

            })
                .then((response) => {
                    setSuccess("Booked Successfully with booking id: " + response.data.id)
                    setManadatory(false)
                })
                .catch(() => {
                    setErrors("Error while booking")
                })

        } else {
            setManadatory(true)
        }
    }
    return (
        <div className="text-center">
            <h1>Book Your Service</h1>
            <form onSubmit={handleSubmit} className='text-center'>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" name="email" value={state.email}
                        onChange={handleChange} className="form-control w-50 text-center mx-auto" />
                    {formErrors.email !== "" ? <div className="text-danger">{formErrors.email}</div> : null}
                    {existingUser ? <div className="text-danger">This email is already registered. Please try with another email!</div> : null}
                </div>
                <div className="form-group">
                    <label>Booked On: </label>
                    <input type="date" name="bookedOn" value={state.bookedOn}
                        onChange={handleChange} className="form-control w-50 text-center mx-auto" />
                    {formErrors.bookedOn !== "" ? <div className="text-danger">{formErrors.bookedOn}</div> : null}
                </div>
                <br />
                <div className="form-group">
                    <label>Service Name: </label>
                    <select name="serviceName" value={state.serviceName}
                        onChange={handleChange} className="form-control w-50 text-center mx-auto">
                        <option value="">Select Service</option>
                        <option value="Car Wash">Car Wash</option>
                        <option value="Car Service">Car Service</option>
                        <option value="Car Repair">Car Repair</option>
                    </select>
                    {formErrors.serviceName !== "" ? <div className="text-danger">{formErrors.serviceName}</div> : null}
                </div>
                <input type="submit" value="Create Booking" className="btn btn-primary" />
                {mandatory ? <p>Please enter all the fields</p> : null}
                {success ? <p className='text-success'>{success}</p> : null}
                {error ? <p className='text-success'>{error}</p> : null}
            </form>
        </div>
    )
}

export default CreateBooking
