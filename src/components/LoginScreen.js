import './login.css'
import React, { useState } from 'react';
import LoginCard from './LoginCard';

const LoginScreen = () => {
    const [showStatus, setShowStatus] = useState('login-msg-hidden')

    return (
        <div className='login-screen'>
            <LoginCard setShowStatus={setShowStatus}/>
        </div>
    )
}

export default LoginScreen;