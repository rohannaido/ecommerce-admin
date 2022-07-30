import { publicRequest, userRequest } from '../requestMethods';

export const loginService = async (user) => {
    try{
        console.log("SENDING TO SERVER:", user);
        const res = await publicRequest.post('/auth/login', user);
        console.log("LOGIN RES : ", res.data);
    }
    catch(error) {
        console.log(error);
        throw error;
    }
};
