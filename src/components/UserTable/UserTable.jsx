import UserRow from './UserRow/UserRow';
import './UserTable.css'

const UserTable = ({usersArr}) => {
    return (
        <table className="userTable">
            <thead>
                <tr>
                    <th>
                        User ID
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Is Admin
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            {usersArr.map(userItem => (
                <UserRow userItem={userItem} key={userItem._id} />
            ))}
        </table>
    )
}

export default UserTable;