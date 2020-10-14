import React, { useReducer } from 'react';
import AlertReducer from './auth_reducer';
import AlertContext from './auth_context';
import { SHOW_ALERT, HIDE_ALERT } from '../../types/constants';


const AlertProvider = (props) => {
    
    const initialState = { 
       
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)


    return (
        <AlertContext.Provider
        value={{
        }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertProvider;