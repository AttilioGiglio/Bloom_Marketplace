import React from 'react';
import { ReactComponent as ReactLogo } from '../../../assets/images/programador.svg';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';

const NavbarAccount = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ borderBottom: 'solid 2px #479A79' }}>
            <div className='container-fluid'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mr-5" id="navbarSupportedContent">
                    <form className="form-inline position-relative my-2 d-inline-block ml-2">
                        <input className="buscar form-control mr-sm-2" aria-label="Search" style={{ border: 'solid 2px #479A79', background: '#fcf9f3', color: '#479A79' }} />
                        <button className="btn btn-search position-absolute my-sm-0" type="submit">
                            <div>
                                <GoSearch style={{ fontSize: '20px', color: '#479A79' }} />
                            </div>
                        </button>
                    </form>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <ReactLogo className='mr-2 rounded-circle avatar' />
                                <span style={{ color: '#479A79' }}>Attilio Giglio</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link to='/profile_business' className="dropdown-item" href="#"><span style={{ color: '#479A79' }}>Mi Perfil</span></Link>
                                <div className="dropdown-divider"></div>
                                <Link to='/business' className="dropdown-item" href="#"><span style={{ color: '#479A79' }}>Cerrar Sesión</span></Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarAccount
