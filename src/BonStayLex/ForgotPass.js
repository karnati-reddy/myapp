import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPass = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Not used in this component
    // Remove the unused state
    // const [isLoginEnabled, setIsLoginEnabled] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setErrors] = useState('');

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Forgot Password</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (email === '') {
                            setErrors('Please enter your email address.');
                        } else {
                            // Handle forgot password logic here (e.g., send reset link via API call)
                            setSuccess('Password reset link has been sent to your email.');
                            // Optionally, clear email input after successful submission
                            setEmail('');
                        }
                    }}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required // Add required attribute for form validation
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Reset Link
                        </button>
                    </form>
                    {success && <div className="alert alert-success">{success}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;

