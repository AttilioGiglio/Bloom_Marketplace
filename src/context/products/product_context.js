import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [productlist, setProductList] = useState(
        [
        { id: 1, name: 'planta#1', price: '$50.000' },
        { id: 2, name: 'planta#2', price: '$20.000' },
        { id: 3, name: 'planta#3', price: '$10.000' },
        { id: 4, name: 'planta#4', price: '$30.000' },
        { id: 5, name: 'planta#5', price: '$40.000' },
        { id: 6, name: 'planta#6', price: '$20.000' },
        { id: 7, name: 'planta#7', price: '$10.000' },
        { id: 8, name: 'planta#8', price: '$50.000' },
        { id: 9, name: 'planta#9', price: '$40.000' },
        { id: 10, name: 'planta#10', price: '$5.000' },
        ]
    );

    const [car, setCart] = useState([]);

    return (
        <ProductContext.Provider
        value={{
            productlist
        }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;