import React from 'react';
import AllOrders from './components/all_orders';
import NavbarAccount from './components/navbar_account';
import Sidebar from './components/sidebar';


const OrdersList = () => {
    return (
        <div>
            <div class="d-flex" id="content-wrapper">
                <Sidebar />
                <div className='w-100'>
                    <NavbarAccount />
                    <div id="content" style={{ margin: '50px auto 0', width: '80%', minHeight: '90vh' }}>
                    <AllOrders />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersList
