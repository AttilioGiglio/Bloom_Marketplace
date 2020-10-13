import React, { useReducer } from 'react';
import AuthReducer from './auth_reducer';
import AuthContext from './auth_context';
import { SUCCESS_REGISTER, ERROR_REGISTER, GET_USER, SUCESS_LOGIN, ERROR_LOGIN, CLOSE_SESSION } from '../../types/constants';


const AuthProvider = (props) => {
    
    const initialState = { 
        token:localStorage.getItem('token')
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    return (
        <AuthContext.Provider
        value={{
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;