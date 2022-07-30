import { useState } from 'react';
import './Login.css';
import { loginService } from '../../service/auth'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='loginPage'>
            <form className='loginPage_form'>
                <h2>Sign In</h2>
                <label htmlFor='email'>
                    Username
                    <input type="text" name='username' value={loginForm.username} onChange={(e) => setLoginForm(prev => ({...prev, 
                        username: e.target.value}) )} />
                </label>
                <label htmlFor='password'>
                    Password
                    <input type='password' name='password' value={loginForm.password} onChange={(e) => setLoginForm(prev => ({...prev, 
                        password: e.target.value}) )}/>
                </label>
                
                <div className='loginPage_buttonsDiv'>
                    <button className='loginPage_signInBtn' onClick={(e) => {
                        e.preventDefault();
                        try{
                            loginService(dispatch, loginForm)
                            .then(() => navigate('/'));
                        }
                        catch(error){
                            console.log(error);
                        }
                    }}>
                        Sign In
                    </button>

                    <button className='loginPage_signInBtn guest' onClick={(e) => {
                        e.preventDefault();
                        try{
                            loginService(dispatch, {username: "ram", password:"thisisit"})
                            .then(() => navigate('/'));
                        }
                        catch(error){
                            console.log(error);
                        }
                    }}>
                        Sign In as Guest
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Login;