import './SideBar.css';
import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='sideBar'>
            <ul>
                <Link to='/'>
                    <li className='active'>
                        <span className='sideBar_icon'>
                            <AiOutlineHome />
                        </span>
                            Home
                    </li>
                </Link>
                {/* <Link to='/soon'> */}
                    <li className=''>
                        <span className='sideBar_icon'>
                            <FiUsers />
                        </span>
                        Users
                    </li>
                {/* </Link> */}
                {/* <Link to='/soon'> */}
                    <li className=''>
                        <span className='sideBar_icon'>
                            <AiOutlineShop />
                        </span>
                        Products
                    </li>
                {/* </Link> */}
            </ul>
        </div>
    )
}

export default SideBar;