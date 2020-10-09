import React from 'react'
import './cart_dropdown.scss'

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
                >Comprar</button>
            </div>
        </div>
    )
}

export default CartDropdown
