import ProductRow from './ProductRow/ProductRow';
import './ProductTable.css'

const ProductTable = ({productsArr}) => {
    return (
        <table className="productTable">
            <thead>
                <tr>
                    <th>
                        Product ID
                    </th>
                    <th>
                        Image
                    </th>
                    <th className='productTable_headingTitle'>
                        Title
                    </th>
                    <th>
                        In Stock
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            {productsArr.map(productItem => (
                <ProductRow productItem={productItem} key={productItem._id} />
            ))}
        </table>
    )
}

export default ProductTable;