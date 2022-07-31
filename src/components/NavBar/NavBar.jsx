import './NavBar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';

const NavBar = ({setDrawer}) => {

    const navigate = useNavigate();

    return (
        <div className='navBar'>
            <div className='navBar_logoMenuDiv'>
                <div className='navBar_menuIcon' onClick={() => setDrawer(prev => !prev)}>
                        <GiHamburgerMenu />
                    </div>
                <div className='navBar_logoText'>
                    ONE ADMIN
                </div>
            </div>
            {/* <div onClick={() => navigate('/login')}> */}
            <div>
                <LoginButton />
            </div>
        </div>
    )
}

export default NavBar;