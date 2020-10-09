import React, {useContext} from 'react';
import { ProductContext } from '../context/products/product_context'

const Indoor = () => {
    
    const {shoppingCart} = useContext(ProductContext);
    alert(shoppingCart)
    return (
        <div>
            
        </div>
    )
}

export default Indoor
