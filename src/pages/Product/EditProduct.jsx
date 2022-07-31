import './Product.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditProductForm from '../../components/ProductForm/EditProductForm'
import { getProductById } from '../../service/productsData';

const Product = () => {
    
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [productData, setProductData] = useState({});

    const loadProductData = async () => {
        const data = await getProductById(productId);
        setProductData(data);
        console.log("LOADED DAA: ", data);
    }

    useEffect(() => {
        loadProductData();
    },[])

    return (
        <div className="productPage">
            <h2>Edit Product</h2>
            <EditProductForm productData={productData} />
        </div>
    )
}

export default Product;