import './Users.css'
import UserTable from '../../components/UserTable/UserTable';
import { useEffect, useState } from 'react';
import { getUsers } from '../../service/usersData';

const Users = () => {

    const [usersArr, setUsersArr]  = useState([]);

    const loadUsers = async () => {
        const data = await getUsers();
        setUsersArr(data);
    }

    useEffect(() => {
        loadUsers();
    },[]);

    return (
        <div className='usersPage'>
            <h2>Users</h2>
            <UserTable usersArr={usersArr} />
        </div>
    )
}

export default Users;