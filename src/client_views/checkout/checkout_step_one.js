import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './checkout.scss';
import CheckoutItem from './checkout_item';
import { BsCreditCard } from 'react-icons/bs';
import { RiPlantLine } from 'react-icons/ri';
import ProductContext from '../../context/products/product_context';

const CheckoutStepOne = () => {

    const { cart } = useContext(ProductContext);

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
                    />
                </table>
                <div className='total'>
                    <span>Total: ${cart.reduce((acc, product) => acc + product.price, 0)}</span>
                </div>
                <div className='total'>
                    <Link to='/checkout_step_two'>
                        <button className='btn text-center' style={{ background: '#2D624D', border: 'solid #2D624D', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }}><span className='mr-1'>Pagar con</span> <BsCreditCard style={{ fontSize: '28px', marginBottom: '2px' }} /></button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CheckoutStepOne
