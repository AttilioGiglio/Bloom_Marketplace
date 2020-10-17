import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/auth_context';



const PrivateRoutes = ({component: Component, ...others}) => {
    const { auth } = useContext(AuthContext);
    console.log(auth)
    return (
        <>
        { 
            auth ? (<Route {...others} component = {Component} />) : (<Redirect to="/" />)
        }
        </>
    )
}

export default PrivateRoutes
