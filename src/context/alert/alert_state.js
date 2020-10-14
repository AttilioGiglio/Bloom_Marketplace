import React, { useReducer } from 'react';
import AlertReducer from './alert_reducer';
import AlertContext from './alert_context';
import { SHOW_ALERT, HIDE_ALERT } from '../../types/constants';


const AlertProvider = (props) => {
    
    const initialState = { 
       alert:null
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload:{
                msg,
                category
            }
        });
        setTimeout(() => {
            dispatch({
                type:HIDE_ALERT
            })
        }, 5000);
    }

    return (
        <AlertContext.Provider
        value={{
            alert:state.alert,
            showAlert
        }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertProvider;