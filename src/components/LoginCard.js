import React, { useState } from 'react';
import './login.css';
import LoginForm from './LoginForm';
import {Users, User} from '../data/data' //Import constructor

const LoginCard = () => {

    const [user, setUser] = useState(new User('test', 'test'));
    const [loginStatus, setLoginStatus] = useState('login-msg-hidden')

    const Eval = () => {
        return (
            Users.find((element) => {
                return element.userName === user.userName && element.userPassword === user.userPassword
            }) ? true : false
        )
    }

    const onLoginSubmit = (inputUser, inputPass) => {
        setUser(new User(inputUser,inputPass));
        const truth = Eval();

        if (truth==true) {
            setLoginStatus('login-msg-show-good')
        } else if (truth==false) {
            setLoginStatus('login-msg-show')
        } else {
            setLoginStatus('login-msg-hidden')
        }
    }   

    const sampleUser = new User('ahrmada95', 'Taipei101VIP123=');

    return (
        <div className='login-card'>
            <div id='header'>
                <h1>Login</h1>
            </div>
            <LoginForm onLoginSubmit={onLoginSubmit}/> {/*get login data*/}
            <div className={loginStatus}> 
                Invalid Username or Password!
            </div>
        </div>
    )
}

export default LoginCard;