import './login.css'

const LoginForm = ({onLoginSubmit}) => {

    return (
        <div id='login-area'>
            <form className='form' onSubmit={(event) => {
                                                            event.preventDefault();
                                                            onLoginSubmit(event.target[0].value, event.target[1].value)                                                         
                                                        }}>
                <label>Username:</label>
                <br/> {/*Not ideal, but it'll have to do*/}
                <input type="text" placeholder="Enter Username" name="username" id="user-box"/>
                <label>Password:</label>
                <br/> {/*Not ideal, but it'll have to do*/}
                <input type="password" placeholder="Enter Password" name="password" id="pass-box"/>
                <button type="submit" id='login-button'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;