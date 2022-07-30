import './UserRow.css';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const UserRow = ({userItem}) => {
    return (
        <tr className='userRow'>
            <td className='userRow_idCell'>
                {userItem._id}
            </td>
            <td className='userRow_imageCell'>
                <div className='userRow_imageDiv'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt={userItem.title} />
                </div>
            </td>
            <td>{userItem.username}</td>
            <td>₹ {userItem.email}</td>
            <td>{(userItem.isAdmin) ? 'Yes' : 'No'}</td>
            <td className='userRow_actions'>
                <span className='userRow_editIcon'>
                    <AiOutlineEdit />
                </span>
                <span className='userRow_deleteIcon'>
                    <AiOutlineDelete />
                </span>
            </td>
        </tr>
    )
}

export default UserRow;