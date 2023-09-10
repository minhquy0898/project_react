import React, { useState } from 'react';
import './App.css';
import PageContainer from './components/PageContainer';
import { v4 as uuidv4 } from 'uuid'
import { ProductContextProvider } from './components/Context/ProductContextProvider';
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

  if (!localStorage.getItem("device_id")){
    localStorage.setItem("device_id",uuidv4())
  }

  return (

    <>
      <ProductContextProvider>
        <PageContainer></PageContainer>
      </ProductContextProvider>
    </>
  );
}

export default App;
