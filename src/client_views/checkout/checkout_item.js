import React from 'react';
import './checkout_item.scss';

const CheckoutItem = ({ cart }) => {
    return (
        <div className='checkout-item'>
        <tbody>
            {
                cart.length === 0
                    ? <tr style={{ width: '100%', paddingTop: '15px' }}><th>No hay tareas...</th></tr>
                    :
                    cart.map(item => (
                        <tr>
                            <th className='image-container'><img style={{width:'50%'}} src={item.img} alt="card cap" /></th>
                            <th className='name'>{item.name}</th>
                            <th className='quantity'>Counter</th>
                            <th className='price'>${item.price}</th>
                            <th className='remove-button'>&#10005;</th>
                        </tr>
                    ))
            }
        </tbody>
</div>

    )
}

export default CheckoutItem;
