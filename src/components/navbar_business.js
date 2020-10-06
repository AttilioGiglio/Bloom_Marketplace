import React from 'react';
import './navbar_business.scss';
import { Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';

const NavBar = () => {
    return (
        <div>
            <div className='navBar business'>
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
                                <Link to='/' className="nav-link active" style={{ textDecoration: 'none' }}>HOME</Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link to='/signup_business' className="nav-link active" style={{ textDecoration: 'none' }}>CREAR CUENTA</Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link to='/login_business' className="nav-link active" style={{ textDecoration: 'none' }}>INICIAR SESIÓN</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
