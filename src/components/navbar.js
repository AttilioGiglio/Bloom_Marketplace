import React, { useState } from 'react';
import { RiPlantLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        BLOOM! <RiPlantLine />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes/> : <GiHamburgerMenu />}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
