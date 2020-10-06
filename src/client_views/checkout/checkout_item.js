import React from 'react';
import'./checkout_item.scss';

const CheckoutItem = () => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' />
            </div>
            <span className='name'>Girasol</span>
            <span className='quantity'>1</span>
            <span className='price'>$10000</span>
            <span className='remove-button'>&#10005;</span>
        </div>
    )
}

export default CheckoutItem;
