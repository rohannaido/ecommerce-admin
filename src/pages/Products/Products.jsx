import './Products.css'
import ProductTable from '../../components/ProductTable/ProductTable';
import { useEffect, useState } from 'react';
import { getProducts } from '../../service/productsData';
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const [productsArr, setProductsArr]  = useState([]);
    const navigate = useNavigate();

    const loadProducts = async () => {
        const data = await getProducts();
        setProductsArr(data);
    }

    useEffect(() => {
        loadProducts();
    },[]);

    return (
        <div className='productsPage'>
            <div className='productsPage_headerDiv'>
                <h2>Products</h2>
                <button className='productsPage_addProduct' onClick={() => {navigate('/newproduct')} }>
                    Add Product
                </button>
            </div>
            <ProductTable productsArr={productsArr} />
        </div>
    )
}

export default Products;