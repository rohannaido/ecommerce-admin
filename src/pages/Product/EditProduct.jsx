import './Product.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Product = () => {
    
    const location = useLocation();
    const productId = location.pathname.split('/')[2];

    // useEffect

    return (
        <div className="productPage">
            
        </div>
    )
}

export default Product;