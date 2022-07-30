import { publicRequest, userRequest } from '../requestMethods';
import { userLogIn, userLogOut } from '../redux/userRedux';

export const loginService = async (dispatch, user) => {
    try{
        console.log("SENDING TO SERVER:", user);
        const res = await publicRequest.post('/auth/login', user);
        console.log("LOGIN RES : ", res.data);
        dispatch(userLogIn(res.data))
    }
    catch(error) {
        console.log(error);
        throw error;
    }
};

export const signOutApp = async (dispatch) => {
    dispatch(userLogOut());
}