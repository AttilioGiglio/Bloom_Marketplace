import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Context} from '../store/context';

const PublicRoutes = ({component: Component, ...others}) => {
    const { store } = useContext(Context);
    
    return (

        
         <Route {...others} component={(props) => (!store.auth) ? (<Component {...props} />) : (<Redirect to="/" />)} />
        

    )
}

export default PublicRoutes
