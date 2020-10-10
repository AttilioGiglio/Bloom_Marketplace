import React, { Fragment, useContext } from 'react';
import NavBar from '../../components/navbar_client';
import CardProduct from './card_product';
import { ProductContext } from '../../context/products/product_context';

const ProductCards = () => {

    const {productlist} = useContext(ProductContext);

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
                            id={product.id}
                        />
                    ))
                    }
                </div>
            </div>
        </Fragment>
    )

}

export default ProductCards
