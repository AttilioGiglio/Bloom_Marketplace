import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [shoppingCart, setShoppingCart] = useState('comprar');

    return (
        <ProductContext.Provider
        value={{
            shoppingCart
        }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;