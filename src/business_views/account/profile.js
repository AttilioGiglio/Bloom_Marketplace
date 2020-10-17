import React from 'react'
import Sidebar from './components/sidebar';
import NavbarAccount from './components/navbar_account';
import FormProfile from './components/form_profile';

const Profile = () => {
    return (
        <div className="d-flex" id="content-wrapper">
        <Sidebar />
        <div className='w-100'>
            <NavbarAccount />
            <div id="content" className="w-100">
            <FormProfile />
            </div>
        </div>
    </div>
    )
}

export default Profile
