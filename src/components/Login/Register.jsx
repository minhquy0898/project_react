import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
function Register() {
    const [account, setAccount] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        phonenumber: ''
    });

    const [formErr, setFormErr] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        phonenumber: ''
    });

    const validateForm = () => {
        let error = {};
        let isValid = true;

        if (!account.username) {
            error.username = 'Hãy điền tên tài khoản';
            isValid = false;
        }
        if (!account.email) {
            error.email = 'Hãy điền tài khoản email';
            isValid = false;
        }
        if (!account.password) {
            error.password = 'Hãy điền mật khẩu của bạn';
            isValid = false;
        }
        if (!account.address) {
            error.address = 'Hãy điền địa chỉ nhà của bạn';
            isValid = false;
        }
        if (!account.phonenumber) {
            error.phonenumber = ' Hãy điền số điện thoại của bạn'
        }

        setFormErr(error);
        return isValid;
    };

    const [err, setErr] = useState('');

    const HandleChangeInput = (event) => {
        const { name, value } = event.target;
        setAccount((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const HandleRegister = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        const newAccount = {
            ...account,
            userId: uuidv4(),
        };

        const response = await axios.get(`http://localhost:3001/Account`);
        const accountAll = response.data;

        if (accountAll.find((acc) => acc.username === newAccount.username)) {
            setErr('Email already used');
        } else {
            try {
                await axios.post(`http://localhost:3001/Account`, newAccount, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setErr('Registration successful');
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className='Container'>
            <div className='body_content2'>
                <h2>Welcome back</h2>
                <form action='' className='formLogin'>
                    <input
                        type='text'
                        name='username'
                        className='loginInput'
                        placeholder='Username'
                        value={account.username}
                        onChange={HandleChangeInput}
                    />
                    {formErr.username && <p>{formErr.username}</p>}

                    <input
                        type='password'
                        name='password'
                        className='loginInput'
                        placeholder='Password'
                        value={account.password}
                        onChange={HandleChangeInput}
                    />
                    {formErr.password && <p>{formErr.password}</p>}

                    <input
                        type='text'
                        name='address'
                        className='loginInput'
                        placeholder='Your address'
                        value={account.address}
                        onChange={HandleChangeInput}
                    />
                    {formErr.address && <p>{formErr.address}</p>}

                    <input
                        type='email'
                        name='email'
                        className='loginInput'
                        placeholder='Email'
                        value={account.email}
                        onChange={HandleChangeInput}
                    />
                    {formErr.email && <p>{formErr.email}</p>}
                    <input
                        type='number'
                        name='phonenumber'
                        className='loginInput'
                        placeholder='Your phone number'
                        value={account.phonenumber}
                        onChange={HandleChangeInput}
                    />
                    {formErr.phonenumber && <p>{formErr.phonenumber}</p>}

                    {err ? <p>{err}</p> : null}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            margin: `15px 0px 15px 0px`,
                        }}
                    ></div>
                    <NavLink className='navLinkRegister'>
                        <button className='btnSignIn' onClick={HandleRegister}>
                            Register
                        </button>
                    </NavLink>
                    <NavLink className='navLinkRegister' to={'/login'}>
                        <button className='btnSignIn'>Login</button>
                    </NavLink>
                </form>
            </div>
        </div>
    );
}

export default Register;