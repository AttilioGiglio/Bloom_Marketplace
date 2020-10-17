import React from 'react';
import AllProducts from './components/all_products';
import NavbarAccount from './components/navbar_account';
import Sidebar from './components/sidebar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {Link} from 'react-router-dom';

const ProductsList = () => {
    return (
        <div>
            <div className="d-flex" id="content-wrapper">
                <Sidebar />
                <div className='w-100'>
                    <NavbarAccount />
                    <div id="content" style={{ margin: '50px auto 0', width: '80%', minHeight: '90vh' }}> 
                    <AllProducts />
                    <button className='btn' style={{ background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }}>
                       <Link to='orders_list_business'> <AiOutlineArrowLeft style={{color: '#fcf9f3', marginBottom:'4px'}}/></Link></button>
                    </div>

                </div>

            </div>  
        </div>
    )
}

export default ProductsList
