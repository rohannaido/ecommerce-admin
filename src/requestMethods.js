import axios from 'axios';

const getToken = () => {
    let output;
    if(localStorage.getItem("persist:adminecom")){
        try{
            output = JSON.parse(JSON.parse(localStorage.getItem("persist:adminecom")).user).currentUser.accessToken;
            return output;
        }
        catch(error){
            console.log(error);
        }
    }
    return ''
}

const BASE_URL = "https://ecommerceapi19.herokuapp.com/api/";
const TOKEN = getToken();

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})