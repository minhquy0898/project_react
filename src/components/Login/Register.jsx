import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
function Register() {
    const [error, setError] = useState(null)
    const [account, setAccount] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        fullName: ''
    });
    const [formErr, setFormErr] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        fullName: ''
    });
    const validateForm = () => {
        let error = {};
        let isValid = true;

        if (!account.username) {
            error.username = 'Hãy điền tên tài khoản';
            isValid = false;
        }
        if (!account.fullName) {
            error.fullName = 'Hãy điền tên của bạn';
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
        if (!account.phoneNumber) {
            error.phoneNumber = ' Hãy điền số điện thoại của bạn';
            isValid = false;
        }

        setFormErr(error);
        return isValid;
    };

    // const [err, setErr] = useState('');

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

        try {
            const response = await axios.post(`http://localhost:8888/register`, account)
            console.log(response);
            setError(response.data.message)
        } catch (error) {
            console.log(error);
            setError(error.response.data.message)
        }
    };

    return (
        <div className='Container'>
            <div className='body_content2'>
                <h2 style={{ color: `#80D8EE`, marginTop: 10 }}>Register form</h2>
                <form action='' className='formLogin'>
                    <input
                        type='text'
                        name='username'
                        className="input-border d-block"
                        placeholder='Tên đăng nhập'
                        value={account.username}
                        onChange={HandleChangeInput}
                    />
                    {formErr.username && <p style={{ color: `red`, fontSize: 12, paddingLeft: 5, marginBottom: 5 }}>{formErr.username}</p>}

                    <input
                        type='password'
                        name='password'
                        className="input-border d-block"
                        placeholder='Mật khẩu'
                        value={account.password}
                        onChange={HandleChangeInput}
                    />
                    {formErr.password && <p style={{ color: `red`, fontSize: 12, paddingLeft: 5, marginBottom: 5 }}>{formErr.password}</p>}
                    <input
                        type='name'
                        name='fullName'
                        className="input-border d-block"
                        placeholder='Họ và tên'
                        value={account.fullName}
                        onChange={HandleChangeInput}
                    />
                    {formErr.fullName && <p style={{ color: `red`, fontSize: 12, paddingLeft: 5, marginBottom: 5 }}>{formErr.fullName}</p>}

                    <input
                        type='text'
                        name='address'
                        className="input-border d-block"
                        placeholder='Địa chỉ'
                        value={account.address}
                        onChange={HandleChangeInput}
                    />
                    {formErr.address && <p style={{ color: `red`, fontSize: 12, paddingLeft: 5, marginBottom: 5 }}>{formErr.address}</p>}
                    <input
                        type='email'
                        name='email'
                        className="input-border d-block"
                        placeholder='Địa chỉ email'
                        value={account.email}
                        onChange={HandleChangeInput}
                    />
                    {formErr.email && <p style={{ color: `red`, fontSize: 12, paddingLeft: 5, marginBottom: 5 }}>{formErr.email}</p>}
                    <input
                        type='tel'
                        pattern="[0-9]{10}"
                        name='phoneNumber'
                        className="input-border d-block"
                        placeholder='Số điện thoại'
                        value={account.phoneNumber}
                        onChange={HandleChangeInput}
                    />
                    {formErr.phoneNumber && <p style={{ color: `red`, fontSize: 12, paddingLeft: 5, marginBottom: 5 }}>{formErr.phoneNumber}</p>}
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
                    {error ? <p style={{ color: `red`, fontSize: 12, paddingLeft: 5, marginBottom: 5 }}>{error}</p> : null}

                </form>
            </div>
        </div>
    );
}

export default Register;