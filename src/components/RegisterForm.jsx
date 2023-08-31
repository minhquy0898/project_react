import React, { useState } from 'react';
import './RegisterForm.css'

function RegisterForm({ onSwitchToLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = () => {
        if (!email || !password) {
            setErrorMessage('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        const existingUser = localStorage.getItem(email);
        if (existingUser) {
            setErrorMessage('Email đã tồn tại.');
            return;
        }

        localStorage.setItem(email, password);
        setErrorMessage('');
        onSwitchToLogin();
    };

    return (
        <div className='container_form'>
            <div className='register_form'>
                <h2 className='register_title'>Register</h2>
                {errorMessage && <p>{errorMessage}</p>}
                <input
                    className='email'
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='btn_register'>
                    <button className='btn_registerForm' onClick={handleRegister}>Register now</button>
                </div>
                <p className='register_convert'>
                    Already have an account?{' '}
                    <a href="#" onClick={onSwitchToLogin}>
                        Login now
                    </a>
                </p>
            </div>
        </div>
    );
}

export default RegisterForm;
