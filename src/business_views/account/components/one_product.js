import React from 'react';
import './one_product.scss'

const OneProduct = () => {
    return (
        <div>
           
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

    )
}

export default OneProduct


// <div className='image'>
//                 <img alt='item' />
//             </div>
//             <div className='name'>Girasol</div>
//             <div className='quantity'>1</div>
//             <div className='stock'>10</div>
//             <div className='price'>$10000</div>
