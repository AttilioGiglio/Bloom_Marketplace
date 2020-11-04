import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './checkout.scss';
import CheckoutItem from './checkout_item';
import { RiPlantLine } from 'react-icons/ri';

const CheckoutStepOne = () => {

    const {id} = useParams()
    
    const [state,setState] = useState(false)

    let cart = JSON.parse(sessionStorage.getItem('cartlist'))
    
    const total = cart.reduce((acc, product) => acc + product.price, 0)

    

    return (
        <div className='d-flex'>
            <Link to='/' style={{ textDecoration: 'none' }}><div className="position-absolute d-flex ml-4 mt-3 d-flex align-items-center">
                <RiPlantLine size={40} style={{ color: "#2D624D" }} /> <div className='mt-1'><span style={{ color: "#2D624D", fontSize: '40px', fontWeight: 'bold' }}>BLOOM!</span></div>
            </div></Link>
            <div className='checkout-page'>
                <table style={{ width: '100%' }}>
                <thead>
                    <tr className='titule'>
                        <th>Productos</th>
                        <th>Descripción</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                    <CheckoutItem
                        cart={cart}
                        state={state}
                        setState={setState}
                        uid={id}
                        total={total}
                    />
                </table>
            </div>
        </div>
    )
}

export default CheckoutStepOne
