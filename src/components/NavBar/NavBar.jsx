import './NavBar.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='navBar_logoMenuDiv'>
                <div className='navBar_menuIcon'>
                        <GiHamburgerMenu />
                    </div>
                <div className='navBar_logoText'>
                    ONE ADMIN
                </div>
            </div>
            <div>
                Login
            </div>
        </div>
    )
}

export default NavBar;