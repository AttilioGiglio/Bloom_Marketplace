import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Context} from '../store/context';

const PrivateRoutesClient = ({component: Component, ...others}) => {
    const { store, actions } = useContext(Context);

    // if(store.currentuser === null && store.auth === false){
    //     const user = localStorage.getItem('user')
    //     const auth = localStorage.getItem('auth')
    //     if(user !== null){
    //         actions.revalidate(JSON.parse(user,auth))
    //     }
    //     else{
    //         return(
    //             <Redirect to='/' />
    //         )
    //     }
    // }
    
    return (

        
         <Route {...others} component={(props) => (store.auth && store.currentuser.role === 'client') ? (<Component {...props} />) : (<Redirect to="/" />)} />
        

    )
}

export default PrivateRoutesClient
