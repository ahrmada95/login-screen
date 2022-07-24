import './login.css'
import React, { useState } from 'react';
import LoginCard from './LoginCard';

const LoginScreen = () => {
    const [showStatus, setShowStatus] = useState('login-msg-hidden')
    const [loginStatus, setLoginStatus] = useState(0);

    const handleShowStatus = () => {
        if (loginStatus === 1) {
            setShowStatus('login-msg-show-good')
        } else if (loginStatus === -1) {
            setShowStatus('login-msg-show')
        } else {
            setShowStatus('login-msg-hidden')
        }
    }

    const handleLoginStatus = (value) => {
        setLoginStatus(value);
    }

    return (
        <div className='login-screen'>
            <LoginCard showStatus={showStatus} handleLoginStatus={handleLoginStatus}/>
        </div>
    )
}

export default LoginScreen;