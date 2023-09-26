import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie';
import { NavLink } from 'react-router-dom';
function Login() {
    const [account, setAccount] = useState({
        username: "",
        password: ""
    });
    const [err, setErr] = useState('');
    const HandleChangeInput = (event) => {
        const { name, value } = event.target;
        setAccount(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const HandleSignIn = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8888/login`, account)
            console.log(response.data);
            setErr(response.data.message)
            window.location.href = '/'
            const dataInCookies = JSON.stringify(response.data.data);
            Cookies.set('data', dataInCookies)
        } catch (error) {
            setErr(error.response.data.message)
        }
    }

    return (
        <div className='Container'>
            <div className='body_content1'>
                <h2 style={{ color: `#80D8EE`, marginTop: 10 }}>Login Form</h2>
                <form action="" className='formLogin'>
                    <input
                        type='text'
                        name='username'
                        className="input-border d-block"
                        placeholder='Tên đăng nhập'
                        value={account.username}
                        onChange={HandleChangeInput}
                    />

                    <input
                        type='password'
                        name='password'
                        className="input-border d-block"
                        placeholder='Mật khẩu'
                        value={account.password}
                        onChange={HandleChangeInput}
                    />
                    {err ? <p>{err}</p> : null}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: `15px 0px 15px 0px`
                    }}>
                    </div>
                    <NavLink className='navLinkRegister' to={'/register'}>
                        <button className='btnSignIn'>Register</button>
                    </NavLink>
                    <NavLink className='navLinkRegister'>
                        <button className='btnSignIn' onClick={HandleSignIn}>Sign in</button>
                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default Login
