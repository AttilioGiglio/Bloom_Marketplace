import React from 'react';
import AllProducts from './components/all_products';
import NavbarAccount from './components/navbar_account';
import Sidebar from './components/sidebar';


const ProductsList = () => {
    return (
        <div>
            <div class="d-flex" id="content-wrapper">
                <Sidebar />
                <div className='w-100'>
                    <NavbarAccount />
                    <div id="content" class="w-100">
                    <AllProducts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList
