import './ProductForm.css'

const ProductForm = () => {


    const handleChange = () => {}

    return (
        <div className="productForm">
            <form>
                <div className="productForm_item">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="productForm_item">
                    <label>Title</label>
                    <input name="title" type="text" placeholder="Optimum Nutrition Whey Protein" />
                </div>
                <div className="productForm_item">
                    <label>Price</label>
                    <input name="price" type="number" placeholder="1000" />
                </div>
                <div className="productForm_item">
                    <label>Description</label>
                    <input name="desc" type="text" placeholder="Product description" />
                </div>
                <div className="productForm_item">
                    <label>Categories</label>
                    <input type="text" placeholder="whey, pre-workout, creatine, chocolate" />
                </div>
                <div className="productForm_item">
                    <label>Stock</label>
                    <select name="inStock" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
        
            </form>
        </div>
    )
}

export default ProductForm;