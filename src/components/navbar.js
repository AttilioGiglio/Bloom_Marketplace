import React, { useState } from 'react';
import { RiPlantLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        BLOOM! <RiPlantLine />
                    </Link>
                    <div
                        className='menu-icon'
                        onClick={handleClick}
                    >
                        {click ? <FaTimes /> : <GiHamburgerMenu />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                to='/services'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/signup'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
