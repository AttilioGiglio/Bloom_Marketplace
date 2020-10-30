import React, { useState, useEffect, useContext } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavbarAccount from './components/navbar_account';
import Sidebar from './components/sidebar';
import { Context } from '../../store/context';
import Order from './components/order'

const OrdersList = () => {

    const [orders, setOrders] = useState([]);
    const { actions } = useContext(Context) 

    const {id} = useParams()
    
    const getOrders = async() => {
        const fetch = await actions.getAllOrders(id);
        setOrders(fetch.response)
    }

    useEffect(() => {
        getOrders()
    }, []) 


    return (
        <div>
            <div className="d-flex" id="content-wrapper">
                <Sidebar />
                <div className='w-100'>
                    <NavbarAccount />
                    <div id="content" style={{ margin: '50px auto 0', width: '80%', minHeight: '90vh' }}>
                    <ReactBootStrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th>#OrdenID</th>
                    <th>Cliente</th>
                    <th>Monto</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
            {
                orders.map(order => <Order order={order}/>)
            }
                
            </tbody>
        </ReactBootStrap.Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersList
