import React from 'react'
import Sidebar from './components/sidebar';
import NavbarAccount from './components/navbar_account';

const Profile = () => {
    return (
        <div class="d-flex" id="content-wrapper">
        <Sidebar />
        <div className='w-100'>
            <NavbarAccount />
            <div id="content" class="w-100">
            
            </div>
        </div>
    </div>
    )
}

export default Profile
