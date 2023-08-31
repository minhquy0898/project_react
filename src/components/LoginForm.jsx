import React, { useState } from 'react';
import './LoginForm.css'
function LoginForm({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedInUsername, setLoggedInUsername] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setErrorMessage('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        const storedPassword = localStorage.getItem(email);
        if (!storedPassword || storedPassword !== password) {
            setErrorMessage('Email hoặc mật khẩu không đúng.');
            return;
        }

        setErrorMessage('');
        setLoggedInUsername(email)
        onLoginSuccess(email);
    };

    return (
        <div className='container_form'>
            <div className='login_form'>
                <h2 className='login_title'>Login</h2>
                {errorMessage && <p>{errorMessage}</p>}
                {loggedInUsername ? (
                    <p> {loggedInUsername}!</p>
                ) : null}
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
                <div className='btn_login'>
                    <button className='btn_loginForm' onClick={handleLogin}>Login now</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
