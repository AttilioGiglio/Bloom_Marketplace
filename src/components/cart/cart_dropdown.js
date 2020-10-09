import React from 'react';
import './cart_dropdown.scss';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
    return (
                <div className='cart-dropdown'>
                    <div className='cart-items'>
                        <button style={{
                            background: '#2D624D',
                            border: 'solid #2D624D',
                            borderRadius: '5px 5px 5px 5px',
                            color: '#fcf9f3',
                            fontSize: '20px'
                        }}
                        >
                            <Link to='/checkout_step_one'>
                                Comprar</Link>
                        </button>
                    </div>
                </div>
    )
}

export default CartDropdown
