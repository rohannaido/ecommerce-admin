import './ProductForm.css'
import { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProduct } from '../../service/productsData';
import app from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const EditProductForm = ({productData}) => {

    const [ formInputs, setFormInputs ] = useState({});
    const [file, setFile] = useState("");
    const navigate = useNavigate();

    const handleChange = () => {}

    useEffect(() => {
        const { title, desc, price, inStock, img, _id } = productData;
        setFormInputs({
          title,
          desc,
          price,
          inStock,
          img,
        });
    },[productData]);

    const handleClick = (e) => {
        e.preventDefault();
        if(!file){
          updateProduct(productData._id, formInputs);
          navigate('/products');
        }

        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
    
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
            console.log(error);
          }, 
          () => {
            // Handle successful uploads on complete
            
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
            //   console.log({...formInputs, categories: cat, img: downloadURL});
            //   const product = {...formInputs, categories: cat, img: downloadURL};
              const product = {...formInputs, img: downloadURL};
              updateProduct(productData._id, product);
              navigate('/products');
          });
        }
        );
      }


    return (
        <div className="productForm">
            <form>
                <div className="productForm_itemData">
                    <div className='productForm_imageDiv'>
                      <img src={productData.img} alt="" />
                    </div>
                    <div className='productForm_contentsData'>
                      <h3>{productData.title}</h3>
                      <p>{productData.desc}</p>
                      <p>₹ {productData.price}</p>
                    </div>
                </div>

                <div className="productForm_item">
                    <label>Image</label>
                    <input type="file" id="file" onChange={(e) => {
                        setFile(e.target.files[0])
                    }} />
                </div>
                
                <div className="productForm_item">
                    <label>Title</label>
                    <input name="title" type="text" placeholder="Optimum Nutrition Whey Protein" 
                    value={formInputs.title}
                    onChange={(e) => setFormInputs(prev => ({...prev, title: e.target.value}))}/>
                </div>
                
                <div className="productForm_item">
                    <label>Price</label>
                    <input name="price" type="number" placeholder="1000" 
                    value={formInputs.price}
                    onChange={(e) => setFormInputs(prev => ({...prev, price: e.target.value}))}/>
                </div>

                <div className="productForm_item">
                    <label>Description</label>
                    <input name="desc" type="text" placeholder="Product description" 
                    value={formInputs.desc}
                    onChange={(e) => setFormInputs(prev => ({...prev, desc: e.target.value}))}/>
                </div>
                
                {/* <div className="productForm_item">
                    <label>Categories</label>
                    <input type="text" placeholder="whey, pre-workout, creatine, chocolate" />
                </div> */}

                <div className="productForm_item">
                    <label>Stock</label>
                    <select name="inStock" value={formInputs.inStock}
                    onChange={(e) => setFormInputs(prev => ({...prev, inStock: e.target.value}))} >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <button type="button" className="productForm_addProductButton" onClick={handleClick}>
                    Update Product
                </button>
            </form>
        </div>
    )
}

export default EditProductForm;