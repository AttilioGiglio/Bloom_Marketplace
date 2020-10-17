import { USER_AUTH, REGISTER_USER, USER_LOGIN } from '../../types/constants';

export default (state, action) => {
    switch (action.type) {
        case USER_AUTH:
            return {
                ...state,
                auth: true,
            }
        case REGISTER_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case USER_LOGIN:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}
