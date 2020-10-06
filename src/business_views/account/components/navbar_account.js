import React from 'react';
import { ReactComponent as ReactLogo } from '../../../assets/images/programador.svg';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';

const NavbarAccount = () => {
    return (
        <nav class="navbar navbar-expand-lg" style={{ borderBottom: 'solid 2px #479A79' }}>
            <div className='container-fluid'>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mr-5" id="navbarSupportedContent">
                    <form class="form-inline position-relative my-2 d-inline-block ml-2">
                        <input class="buscar form-control mr-sm-2" aria-label="Search" style={{ border: 'solid 2px #479A79', background: '#fcf9f3', color: '#479A79' }} />
                        <button class="btn btn-search position-absolute my-sm-0" type="submit">
                            <div>
                                <GoSearch style={{ fontSize: '20px', color: '#479A79' }} />
                            </div>
                        </button>
                    </form>
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <ReactLogo className='mr-2 rounded-circle avatar' />
                                <span style={{ color: '#479A79' }}>Attilio Giglio</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link to='/profile_business' class="dropdown-item" href="#"><span style={{ color: '#479A79' }}>Mi Perfil</span></Link>
                                <div class="dropdown-divider"></div>
                                <Link to='/business' class="dropdown-item" href="#"><span style={{ color: '#479A79' }}>Cerrar Sesión</span></Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarAccount
