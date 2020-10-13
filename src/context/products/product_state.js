import React, { useReducer } from 'react';
import ProductReducer from './product_reducer';
import ProductContext from './product_context';
import { UPDATE_PRODUCTS_CART} from '../../types/constants';

const ProductProvider = (props) => {
    
    const initialState = { 
        productlist: [
        { id: 1, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#1', price: 50000 },
        { id: 2, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#2', price: 20000 },
        { id: 3, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#3', price: 10000 },
        { id: 4, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#4', price: 30000 },
        { id: 5, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#5', price: 40000 },
        { id: 6, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#6', price: 20000 },
        { id: 7, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#7', price: 10000 },
        { id: 8, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#8', price: 50000 },
        { id: 9, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#9', price: 40000 },
        { id: 10, img:'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG', name: 'planta#10', price: 5000 },
        ],
        cart: []
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const updateProductsCart = product => {
        dispatch({
            type: UPDATE_PRODUCTS_CART,
            payload: product
        })
    }

    return (
        <ProductContext.Provider
        value={{
            productlist: state.productlist,
            cart: state.cart,
            updateProductsCart
        }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;