import React, {useContext} from 'react';
import {Context} from '../../store/context'

const CardProduct = ({product}) => {

    const {actions} = useContext(Context)
    
    return (
        <div className='col-3 d-flex justify-content-center my-4'>
            <div className="card" style={{ width: '18rem' }}>

            <img className="card-img-top" src={product.img} alt="card cap" />

                   <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className='card-text'>${product.price}</p>
                        <button onClick={() => actions.updateProductCart(product)} className="btn btn-primary">Agregar al Carrito</button>
                    </div>
                </div>
        </div>
    )
}

export default CardProduct