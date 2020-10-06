import React from 'react';
import './all_product.scss'
import OneProduct from './one_product';

const AllProducts = () => {
    return (
        <div className='card d-flex flex-direction-column align-items-center' style={{ margin: '50px auto 0', width: '80%', minHeight: '90vh' }}>
            <div className='row py-2' style={{ borderBottom: '1px solid darkgrey' }}>
                <div className='col-2'>
                    <span>Productos</span>
                </div>
                <div className='col-2'>
                    <span>Descripción</span>
                </div>
                <div className='col-2'>
                    <span>Cantidad</span>
                </div>
                <div className='col-2'>
                    <span>Stock</span>
                </div>
                <div className='col-2'>
                    <span>Precio</span>
                </div>
                <div className='col-1'>
                    <span>Editar</span>
                </div>
                <div className='col-1'>
                    <span>Eliminar</span>
                </div>
            </div>
            <div className='row flex-direction-row py-2' style={{ borderBottom: '1px solid darkgrey' }}>
            <OneProduct />
            </div>
        </div>
    )
}

export default AllProducts

// <div className='checkout-header px-4'>
// <div className='header-block'>
//     <span>Productos</span>
// </div>
// <div className='header-block'>
//     <span>Descripción</span>
// </div>
// <div className='header-block'>
//     <span>Cantidad</span>
// </div>
// <div className='header-block'>
//     <span>Stock</span>
// </div>
// <div className='header-block'>
//     <span>Precio</span>
// </div>
// <div className='header-block'>
//     <span>Editar</span>
// </div>
// <div className='header-block'>
//     <span>Eliminar</span>
// </div>

// </div>