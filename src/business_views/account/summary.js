import React from 'react';
import Sidebar from './components/sidebar';
import NavbarAccount from './components/navbar_account';
import GeneralData from './components/general_data';
import DashboardData from './components/dashboard_data';
import RecentSales from './components/recent_sales';
import './styles.scss';

const Summary = () => {
    return (
        <div className="d-flex" id="content-wrapper">
            <Sidebar />
            <div className='w-100'>
                <NavbarAccount />
                <div id="content" className="w-100">
                <GeneralData />
                    <section>
                        <div className="container">
                            <div className="row">
                                <DashboardData />
                                <RecentSales />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default Summary
