import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../../context/products/product_context';

const CardProduct = ({product}) => {
    
    const { updateProductsCart } = useContext(ProductContext);


    const productSelectorCart = (product) => {
        updateProductsCart(product)
    }

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>

            <img className="card-img-top" src={product.img} alt="Card image cap" />

                   <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className='card-text'>${product.price}</p>
                        <button onClick={() => productSelectorCart(product)} className="btn btn-primary">Agregar al Carrito</button>
                        <Link to='checkout_step_one'><button onClick={() => productSelectorCart(product)} className="btn btn-primary">Comprar ahora</button></Link>
                    </div>
                </div>
        </>
    )
}

export default CardProduct
