import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
function Register() {
    const [account, setAccount] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        phonenumber: '',
    });

    const [formErr, setFormErr] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        phonenumber: ''
    });
    const [province, provinceChange] = useState("")
    const [provinces, provincesChange] = useState("")
    const [ward, wardCodeChange] = useState("")
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json").then((res) => res.json())
            .then((resp) => {
                provincesChange(resp)
            }).catch((err) => console.log(err.message))
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
        const selectedProvince = provinces.find((item) => item.Id === province);
        const selectedWard = selectedProvince ? selectedProvince.Districts.find((item) => item.Name === ward) : null;
        const newAccount = {
            ...account,
            province: selectedProvince ? selectedProvince.Name : '',
            ward: selectedWard ? selectedWard.Name : '',
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
                        type='text'
                        name='address'
                        className="input-border d-block"
                        placeholder='Địa chỉ'
                        value={account.address}
                        onChange={HandleChangeInput}
                    />
                    {formErr.address && <p style={{ color: `red`, fontSize: 12, paddingLeft: 5, marginBottom: 5 }}>{formErr.address}</p>}
                    <select className="d-block minimal input-border"
                        required
                        onChange={(e) => provinceChange(e.target.value)}>
                        <option selected value="">Tỉnh thành</option>
                        {
                            provinces && provinces.map((item) => (
                                <option key={item.Id}
                                    value={item.Id}>{item.Name}</option>
                            ))
                        }
                    </select>
                    <select className="d-block minimal input-border"
                        required name=""
                        id=""
                        onChange={event => wardCodeChange(event.target.value)}>
                        <option value="">Quận/huyện</option>
                        {
                            provinces && provinces.map((item) => (
                                item.Id === province ? item.Districts.map((e) => (
                                    <option key={e.Id}
                                        value={e.Name}>{e.Name}</option>
                                )) : null
                            ))
                        }
                    </select>
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
                        required pattern="[0-9]{10}"
                        name='phonenumber'
                        className="input-border d-block"
                        placeholder='Số điện thoại'
                        value={account.phonenumber}
                        onChange={HandleChangeInput}
                    />
                    {formErr.phonenumber && <p style={{ color: `red`, fontSize: 12, paddingLeft: 5, marginBottom: 5 }}>{formErr.phonenumber}</p>}

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