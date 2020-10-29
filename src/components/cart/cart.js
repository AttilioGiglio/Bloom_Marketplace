import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg'
import './cart.scss'

const Cart = () => {
    let cart = JSON.parse(sessionStorage.getItem('cartlist'))
    return (
        <div className='cart-icon pb-4'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cart.length}</span>
        </div>
    )
}

export default Cart
