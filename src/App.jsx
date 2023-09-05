import React, { useState } from 'react';
import './App.css';
import PageContainer from './components/PageContainer';
import { ProductContextProvider } from './components/Context/ProductContextProvider';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleLoginSuccess = (username) => {
    setLoggedInUsername(username);
  };

  return (

    <>
      <ProductContextProvider>
        {/*{isLogin ? (<LoginForm onLoginSuccess={handleLoginSuccess} />) : */}
        {/*    (<RegisterForm onSwitchToLogin={handleSwitchToLogin} />)}*/}
        {/*{isLogin ? (*/}
        {/*  <p>Chưa có tài khoản?{' '}*/}
        {/*    <a href="#" onClick={handleSwitchToRegister}>*/}
        {/*      Đăng ký ngay*/}
        {/*    </a>*/}
        {/*  </p>*/}
        {/*) : null}*/}
        {/*{loggedInUsername && <p></p>}*/}
        {/*  */}
         <PageContainer></PageContainer>
      </ProductContextProvider>
    </>
  );
}

export default App;
