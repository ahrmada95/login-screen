import React, { useState } from 'react';
import './login.css';
import LoginForm from './LoginForm';
import {Users, User} from '../data/data' //Import constructor

const LoginCard = (showStatus, handleLoginStatus) => {
    const [user, setUser] = useState(new User('test', 'test'));
    
    //this is really jank, needs to be improved
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

        if (truth) {
            handleLoginStatus(1);
        } else if (!truth) {
            handleLoginStatus(-1)
        } else {
            handleLoginStatus(0)
        }
    }   

    const sampleUser = new User('ahrmada95', 'Taipei101VIP123=');

    

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