import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const { loading, error, setError } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.email ||
            !formData.username ||
            !formData.password

        ) {
            setError('All fields are required.');
            return;
        }
        try {
            const response = await axios.post('/auth/register', {
                email: formData.email,
                username: formData.username,
                password: formData.password,
            },
            );
            console.log(response)
            navigate("/")
        } catch (error) {
            setError('An error occurred during signup.', console.log(error));
        }
    };

    return (
        <div className="signup">
            <h2>Create a new account</h2>
            <div className="sContainer">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        onChange={handleChange}
                        className="sInput"
                        value={formData.email}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        onChange={handleChange}
                        className="sInput"
                        value={formData.username}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={handleChange}
                        className="sInput"
                        value={formData.password}
                        required
                    />


                    <button disabled={loading} className="sButton" type="submit">
                        Sign Up
                    </button>
                    {error && <span className="sError">{error}</span>}
                </form>
            </div>
        </div>
    );
};

export default SignUp;
