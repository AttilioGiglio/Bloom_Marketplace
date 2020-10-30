import React, { Fragment, useContext } from 'react';
import NavBar from '../../components/navbar_client';
import CardProduct from './card_product';
import {Context} from '../../store/context'

const ProductCards = () => {

    const { store } = useContext(Context);

    return (
        <Fragment>
            <NavBar />
                <div className='row d-flex justify-content-center mt-3 mx-0 p-0'>
                    {store.productlist.map(product => (
                        <CardProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                    }
                </div>
        </Fragment>
    )

}

export default ProductCards
