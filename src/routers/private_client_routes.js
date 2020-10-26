import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Context} from '../store/context';

const PrivateRoutesClient = ({component: Component, ...others}) => {
    const { store, actions } = useContext(Context);
    
    return (

        
         <Route {...others} component={(props) => (store.auth && store.currentuser.role === 'client') ? (<Component {...props} />) : (<Redirect to="/" />)} />
        

    )
}

export default PrivateRoutesClient
