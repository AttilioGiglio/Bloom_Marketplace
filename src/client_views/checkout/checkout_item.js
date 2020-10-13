import React from 'react';
import './checkout_item.scss';

const CheckoutItem = ({ cart }) => {
    return (
        <tbody>
            {
                cart.length === 0
                    ? <tr style={{ width: '100%', paddingTop: '15px' }}><th>No hay tareas...</th></tr>
                    :
                    cart.map(item => (
                        <tr>
                            <th><img style={{width:'20%'}} src={item.img} alt="Card image cap">{item.img}</img></th>
                            <th>{item.name}</th>
                            <th>counter</th>
                            <th>${item.price}</th>
                            <th>&#10005;</th>
                        </tr>
                    ))
            }
        </tbody>


    )
}

export default CheckoutItem;
