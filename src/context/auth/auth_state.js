import React, { useReducer} from 'react';
import AuthReducer from './auth_reducer';
import AuthContext from './auth_context';
import { USER_AUTH, REGISTER_USER, USER_LOGIN } from '../../types/constants';
import { v4 as uuidv4 } from 'uuid';


const AuthProvider = (props) => {
    
    const initialState = {
        auth: false,
        users: [
        { id: 1, nombre: 'juan', email:'juan@hotmail.com', contraseña:'1234567' },
        { id: 2, nombre: 'andres', email:'andres@gmail.com', contraseña:'9876543' },
        { id: 3, nombre: 'juana', email:'juana@hotmail.com', contraseña:'7654321' },
        { id: 4, nombre: 'andrea', email:'andrea@gmail.com', contraseña:'3456789' }
    ],
        currentuser: null,
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const userAuth = () => {
        dispatch({
            type:USER_AUTH
        })
    }

    const registerUser = newuser => {
        newuser.id = uuidv4();
        dispatch({
            type: REGISTER_USER,
            payload: newuser
        })
    }

    const currentUser = user => {
        dispatch({
            type: USER_LOGIN,
            payload: user
        })
    }
    return (
        <AuthContext.Provider
        value={{
            auth: state.auth,
            currentuser: state.currentuser,
            users: state.user,
            message: state.message,
            userAuth,
            registerUser,
            currentUser
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;