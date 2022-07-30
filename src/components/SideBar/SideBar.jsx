import './SideBar.css';
import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SideBar = () => {

    const location = useLocation();
    const currPage = location.pathname.split('/')[1];

    return (
        <div className='sideBar'>
            <ul>
                <Link to='/'>
                    <li className={`${(currPage === '') && 'active'}`}>
                        <span className='sideBar_icon'>
                            <AiOutlineHome />
                        </span>
                            Home
                    </li>
                </Link>
                <Link to='/users'>
                    <li className={`${(currPage === 'users') && 'active'}`}>
                        <span className='sideBar_icon'>
                            <FiUsers />
                        </span>
                        Users
                    </li>
                </Link>
                <Link to='/products'>
                    <li className={`${(currPage === '/products') && 'active'}`}>
                        <span className='sideBar_icon'>
                            <AiOutlineShop />
                        </span>
                        Products
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar;