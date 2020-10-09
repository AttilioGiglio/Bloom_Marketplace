import React, { Fragment, useState } from 'react';
import NavBar from '../../components/navbar_client';
import CardProduct from './card_product';


const ProductCards = () => {
    const [productlist, setProductList] = useState([
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
    ])
    return (
        <Fragment>
            <NavBar />
            <div className='row d-flex justify-content-around'>
                <div className='col-12 d-flex justify-content-around mt-5 mx-0 p-0'>      
                    {productlist.map((product) => (
                        <CardProduct
                            key={product.id}
                            name={product.name}
                            price={product.price}
                        />
                    ))
                    }
                </div>
            </div>
        </Fragment>
    )

}

export default ProductCards
