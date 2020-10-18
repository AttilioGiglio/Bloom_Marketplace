import React, { Fragment, useContext } from 'react';
import NavBar from '../../components/navbar_client';
import CardProduct from './card_product';
import {Context} from '../../store/context'

const ProductCards = () => {

    const { store } = useContext(Context);

    return (
        <Fragment>
            <NavBar />
            <div className='row d-flex justify-content-around'>
                <div className='col-12 d-flex justify-content-around mt-5 mx-0 p-0'>
                    {store.productlist.map(product => (
                        <CardProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                    }
                </div>
            </div>
        </Fragment>
    )

}

export default ProductCards
