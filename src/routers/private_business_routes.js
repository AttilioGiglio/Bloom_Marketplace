import React, { useState, useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../store/context';

const PrivateRoutesClient = ({component: Component, ...others}) => {
        const [business, setBusiness] = useState([]);
        const { actions } = useContext(Context)
        const authBusiness = async() => {
            if(!localStorage.getItem('authbusiness')) { return false }
            const token = localStorage.getItem('authbusiness');
            const business = await actions.getSupplierByToken(token);
            if (!business ) return false;
        
            return {
                'token':token,
                'user':{
                    'id': business.id,
                    'name': business.name,
                    'email': business.email,
                    'role': business.role,
                    }
            }
        }
        useEffect(() => {
            authBusiness().then(response => { 
                setBusiness(response);
                return response
            })
        }, [])
        
        return (

            <Route {...others} component={(props) => (business) ? (<Component {...props} />) : (<Redirect to="/business" />)} />
        )
    }

export default PrivateRoutesClient

// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import {Context} from '../store/context';

// const PrivateRoutesBusiness = ({component: Component, ...others}) => {
//     const { store } = useContext(Context);
    
//     return (

        
//          <Route {...others} component={(props) => (store. === 'business') ? (<Component {...props} />) : (<Redirect to="/business" />)} />
        

//     )
// }

// export default PrivateRoutesBusiness
