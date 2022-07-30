import './ProductRow.css';
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const ProductRow = ({productItem}) => {

    const navigate = useNavigate();

    return (
        <tr className='productRow'>
            <td className='productRow_idCell'>
                {productItem._id}
            </td>
            <td className='productRow_imageCell'>
                <div className='productRow_imageDiv'>
                    <img src={productItem.img} alt={productItem.title} />
                </div>
            </td>
            <td>{productItem.title}</td>
            <td>{(productItem.inStock) ? 'Yes' : 'No'}</td>
            <td>₹ {productItem.price}</td>
            <td className='productRow_actions'>
                <span className='productRow_editIcon' onClick={() => { navigate('/product/' + productItem._id) }}>
                    <AiOutlineEdit />
                </span>
                <span className='productRow_deleteIcon'>
                    <AiOutlineDelete />
                </span>
            </td>
        </tr>
    )
}

export default ProductRow;