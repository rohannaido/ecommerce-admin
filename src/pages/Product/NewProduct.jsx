import './Product.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addProduct } from '../../service/productsData';
import ProductForm from '../../components/ProductForm/ProductForm'

const Product = () => {
    
    const location = useLocation();
    const [productFormData, setProductFormData] = useState({});

    useEffect(() => {

    },[]);

    return (
        <div className="productPage">
            <h2>Add Product</h2>
            <ProductForm />
        </div>
    )
}

export default Product;