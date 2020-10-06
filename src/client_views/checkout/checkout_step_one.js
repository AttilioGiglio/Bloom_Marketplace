import React from 'react';
import { Link } from 'react-router-dom';
import './checkout.scss';
import CheckoutItem from './checkout_item';
import { BsCreditCard } from 'react-icons/bs';
import { RiPlantLine } from 'react-icons/ri';

const CheckoutStepOne = () => {
    return (
        <div className='d-flex'>
            <Link to='/' style={{ textDecoration: 'none' }}><div class="position-absolute d-flex ml-4 mt-3 d-flex align-items-center">
                <RiPlantLine size={40} style={{ color: "#2D624D" }} /> <div className='mt-1'><span style={{ color: "#2D624D", fontSize: '40px', fontWeight: 'bold' }}>BLOOM!</span></div>
            </div></Link>
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Productos</span>
                </div>
                <div className='header-block'>
                    <span>Descripción</span>
                </div>
                <div className='header-block'>
                    <span>Cantidad</span>
                </div>
                <div className='header-block'>
                    <span>Precio</span>
                </div>
                <div className='header-block'>
                    <span>Eliminar</span>
                </div>
            </div>
            <CheckoutItem />
            <div className='total'>
                <span>Total: $10000</span>
            </div>
            <div className='total'>
                <Link to='/checkout_step_two'>
                    <button className='btn text-center' style={{ background: '#2D624D', border: 'solid #2D624D', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }}><span className='mr-1'>Pagar con</span> <BsCreditCard style={{fontSize:'28px', marginBottom:'2px'}}/></button>
                </Link>
            </div>

        </div>
        </div>
    )
}

export default CheckoutStepOne
