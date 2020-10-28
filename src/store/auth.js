import React,{ useContext } from 'react';

export const Auth = async () => {
    
    const { actions } = useContext(Context)

    if(!localStorage.getItem('auth')) { return false }
    const token = localStorage.getItem('auth');
    const client = await actions.getClientByToken(token);
    if (!client ) return false;

    return {
        'token':token,
        'user':{
            'id': client.id,
            'firstname': client.firstname,
            'lastname': client.lastname,
            'email': client.email,
            'role': client.role,
            }
    }
}