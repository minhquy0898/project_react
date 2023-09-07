import React, { useState } from 'react';
import './App.css';
import PageContainer from './components/PageContainer';
import { ProductContextProvider } from './components/Context/ProductContextProvider';
function App() {

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
