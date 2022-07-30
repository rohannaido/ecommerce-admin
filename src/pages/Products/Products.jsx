import './Products.css'
import ProductTable from '../../components/ProductTable/ProductTable';
import { useEffect, useState } from 'react';
import { getProducts } from '../../service/productsData';

const Products = () => {

    const [productsArr, setProductsArr]  = useState([]);

    const loadProducts = async () => {
        const data = await getProducts();
        setProductsArr(data);
    }

    useEffect(() => {
        loadProducts();
    },[]);

    return (
        <div className='productsPage'>
            <h2>Products</h2>
            <ProductTable productsArr={productsArr} />
        </div>
    )
}

export default Products;