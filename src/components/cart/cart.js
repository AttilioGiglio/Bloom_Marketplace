import React,{useContext} from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg'
import './cart.scss'
import ProductContext from '../../context/products/product_context';

const Cart = () => {
    const { cart } = useContext(ProductContext);
    return (
        <div className='cart-icon pb-4'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cart.length}</span>
        </div>
    )
}

export default Cart
