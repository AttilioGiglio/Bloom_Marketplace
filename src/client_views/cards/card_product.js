import React from 'react';
import { Link } from 'react-router-dom';

const CardProduct = ({name, price, id}) => {
    
    const productSelector = () => {
        
    }

    return (
        <>
            <div class="card" style={{ width: '18rem' }}>
            <Link> 
            <img class="card-img-top" src="https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG" alt="Card image cap" />
            </Link>
                   <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p className='card-text'>{price}</p>
                        <button onClick={() => productSelector(id)} class="btn btn-primary">Agregar al Carrito</button>
                         <Link to='checkout_step_one' class="btn btn-primary">Comprar ahora</Link>
                    </div>
                </div>
        </>
    )
}

export default CardProduct
