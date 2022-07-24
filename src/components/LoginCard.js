import React, { useState } from 'react';
import './login.css';
import LoginForm from './LoginForm';
import {Users, User} from '../data/data' //Import constructor

const LoginCard = () => {
    const [user, setUser] = useState(new User('test', 'test'));
    const [showStatus, setShowStatus] = useState('login-msg-hidden')
    const [loginStatus, setLoginStatus] = useState(0);

    const onLoginSubmit = (inputUser, inputPass) => {
        setUser(new User(inputUser,inputPass));
        console.log(Users);
        setShowStatus('login-msg-show')
    }   

    const sampleUser = new User('newTest', 'newPassword');

    return (
        <div className='login-card'>
            <div id='header'>
                <h1>Login</h1>
            </div>
            <LoginForm onLoginSubmit={onLoginSubmit}/> {/*get login data*/}
            <div id={showStatus}>
                Invalid Username or Password!
            </div>
        </div>
    )
}

export default LoginCard;