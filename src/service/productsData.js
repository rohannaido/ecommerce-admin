import { userRequest } from '../requestMethods';

export const getProducts = async () => {
    console.log("INSIDE GET PRODUCTS");
    try{
        const res = await publicRequest.get('/products');
        return res.data;
    }
    catch(error) {
        console.log("GET PRODUCT ERROR : ",error);
        throw error;
    }
};


export const deleteProducts = async (id) => {
    console.log("INSIDE DELETE PRODUCTS");
    try{
        // const res = await userRequest.delete(`/products/${id}`);
        console.log("DELETE PRODUCT ");
    }
    catch(error) {
        console.log("DELETE PRODUCT ERROR : ",error);
        throw error;
    }
};

export const updateProduct = async (id, product) => {
    try{
        console.log("INSIDE UPDATE PRODUCT: ",product);
        const res = await userRequest.put(`/products/${id}`, product);
        return res.data;
    }
    catch(error) {
        console.log("UPDATE PRODUCT ERROR : ",error);
        throw error;
    }
};

export const addProduct = async (product) => {
    try {
        console.log(product);
        const res = await userRequest.post("/products", product);
        console.log(res.data);    
        return res.data;    
    }
    catch(error) {
        console.log("ADD PRODUCT ERROR : ",error);
        throw error;
    }
};