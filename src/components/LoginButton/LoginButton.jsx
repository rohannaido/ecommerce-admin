import './LoginButton.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutApp } from '../../service/auth';

const LoginButton = () => {

    const navigate = useNavigate();
    const displayName = useSelector(state => {
        return (state.user.value) ? state.user.value.username : '';
    });
    
    const dispatch = useDispatch();

    return (
        <div className='loginButton_div'>
            {!displayName ? 
            <button className="loginButton" onClick={() => navigate('/login')}>
                Login
            </button>
            :
            <div>
                <span>Hi, {displayName}</span>
                <button className="loginButton_signOutBtn" onClick={() => {
                    signOutApp(dispatch)
                    navigate('/');
                    }}>
                    Sign Out
                </button>
            </div>}
        </div>
    )
}

export default LoginButton;