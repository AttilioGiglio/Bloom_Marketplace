import React,{useContext} from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg'
import './cart.scss'
import {Context} from '../../store/context';

const Cart = () => {
    const { store } = useContext(Context);
    return (
        <div className='cart-icon pb-4'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{store.cart.length}</span>
        </div>
    )
}

export default Cart
