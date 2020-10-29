import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
// import ProductContext from '../../context/products/product_context';
import {Context} from '../../store/context'

const CardProduct = ({product}) => {
    
    const {actions} = useContext(Context)

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>

            <img className="card-img-top" src={'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG'} alt="card cap" />

                   <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className='card-text'>${product.price}</p>
                        <button onClick={() => actions.updateProductCart(product)} className="btn btn-primary">Agregar al Carrito</button>
                        <Link to='checkout_step_one'><button onClick={() => actions.updateProductCart(product) } className="btn btn-primary">Comprar ahora</button></Link>
                    </div>
                </div>
        </>
    )
}

export default CardProduct
