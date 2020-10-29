import React, { useState, useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../store/context';

const PrivateRoutesClient = ({component: Component, ...others}) => {
        const [client, setClient] = useState([]);
        const { actions } = useContext(Context)
        const authClient = async() => {
            if(!localStorage.getItem('auth')) { return false }
            const token = localStorage.getItem('auth');
            const client = await actions.getClientByToken(token);
            console.log(token)
            if (!client ) return false;
        
            return {
                'token':token,
                'user':{
                    'id': client.id,
                    'name': client.name,
                    'email': client.email,
                    'role': client.role,
                    }
            }
        }
        useEffect(() => {
            authClient().then(response => { 
                setClient(response);
                return response
            })
        }, [])
        
        return (

            <Route {...others} component={(props) => (client) ? (<Component {...props} />) : (<Redirect to="/" />)} />
        )
    }

export default PrivateRoutesClient
