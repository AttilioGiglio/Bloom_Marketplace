import { SUCCESS_REGISTER, ERROR_REGISTER, GET_USER, SUCESS_LOGIN, ERROR_LOGIN, CLOSE_SESSION } from '../../types/constants';

export default (state, action) => {
    switch (action.type) {
        case SUCCESS_REGISTER:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state, 
                auth: true,
                message: null
            }
        case ERROR_REGISTER:
            return{
                ...state, 
                toke: null,
                message: action.payload
            }
        default:
            return state;
    }
}
