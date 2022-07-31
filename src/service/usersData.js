import { createUserRequest } from '../requestMethods';


export const getUsers = async () => {
    let userRequest = createUserRequest();
    try {
        const res = await userRequest.get('/users');
        console.log("USER Data: ", res.data);
        return res.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
};

export const updateUsers = async (id, user) => {
    try{
        let userRequest = createUserRequest();
        const res = await userRequest.put("/users/" + id, user);
        console.log("USER Data: ". res.data);
        return res.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
};