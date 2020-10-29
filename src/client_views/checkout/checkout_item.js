import React from 'react';
import './checkout_item.scss';

const CheckoutItem = ({ cart, setState, state }) => {


    const deleteItem = (item) => {
        console.log(item)
        setState(!state)
        let checkout= cart.filter(itemtwo => itemtwo.id !== item.id)
        sessionStorage.setItem('cartlist', JSON.stringify(checkout))
    }
    return (
        <div className='checkout-item'>
        <tbody>
            {
                cart.length === 0
                    ? <tr style={{ width: '100%', paddingTop: '15px' }}><th>No hay tareas...</th></tr>
                    :
                    cart.map(item => (
                        <tr>
                            <th className='image-container'><img style={{width:'50%'}} src={'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG'} alt="card cap" /></th>
                            <th className='name'>{item.name}</th>
                            <th className='quantity'>Counter</th>
                            <th className='price'>${item.price}</th>
                            <th className='remove-button'> <button onClick={() => deleteItem(item)}>&#10005;</button></th>
                        </tr>
                    ))
            }
        </tbody>
</div>

    )
}

export default CheckoutItem;
