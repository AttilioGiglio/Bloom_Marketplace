import React from 'react'
import FormAddProduct from './components/form_add_product'
import NavbarAccount from './components/navbar_account'
import Sidebar from './components/sidebar'

const AddProduct = () => {
    return (
        <div>
        <div className="d-flex" id="content-wrapper">
            <Sidebar />
            <div className='w-100'>
                <NavbarAccount />
                <div id="content" className="w-100">
                <FormAddProduct />
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default AddProduct
