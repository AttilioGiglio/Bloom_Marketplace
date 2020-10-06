import React from 'react';
import './navbar_client.scss'
import { Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = () => {
    return (
        <div className='navBar client'>
            <nav className="navbar navbar-expand-lg navbar-light py-2 px-5">
                <Link to='/' style={{ textDecoration: 'none' }} className="nav-link active logo navbar-brand d-flex mr-5 d-flex align-items-center">
                    <RiPlantLine size={60} style={{ color: "#fcf9f3" }} /> <div className='mt-2'><span style={{ color: "#fcf9f3", fontSize: '45px', fontWeight: 'bold' }}>BLOOM!</span></div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto pt-3 mb-1">
                        <li className="nav-item mr-3">
                            <Link to='/' className="nav-link active"  style={{ textDecoration: 'none' }}>HOME</Link>
                        </li>
                        {/* <li className="nav-item dropdown mr-3">
                            <a className="nav-link dropdown-toggle active" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PRODUCTOS
                        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to='todos' style={{ textDecoration: 'none' }}><a className="dropdown-item">TODOS</a></Link>
                                <Link to='/indoor' style={{ textDecoration: 'none' }}><a className="dropdown-item">PLANTAS INDOOR</a></Link>
                                <Link to='/outdoor' style={{ textDecoration: 'none' }}><a className="dropdown-item">PLANTAS OUTDOOR</a></Link>
                            </div>
                        </li> */}
                        <li className="nav-item mr-3">
                            <Link to='/todos' className="nav-link active"  style={{ textDecoration: 'none' }}>PRODUCTOS</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to='/noticias' className="nav-link active"  style={{ textDecoration: 'none' }}>BLOG</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to='/business' className="nav-link active" style={{ textDecoration: 'none' }}>VENDE CON BLOOM!</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to='/signup_client' className="nav-link active" style={{ textDecoration: 'none' }}>SIGN UP</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to='/login_client' className="nav-link active" style={{ textDecoration: 'none' }}>LOGIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/checkout_step_one' className="nav-link active"><FiShoppingCart size={40} style={{ color: "#fcf9f3" }} className='icon' /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
