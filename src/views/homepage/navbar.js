import React from 'react';
import './navbar.scss';

const NavBar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-white bg-white">
            <div class="container">
                <ul className='image'>
                    <li>
                        <img className="pb-4" src='./logo.jpg' width='180' />
                    </li>
                    <a className="navbar-brand" to="/petitions_1">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Productos</a>
                        </li>
                    </a>
                    <div className="navbar-brand">
                        <li class="nav-item">
                            <a class="nav-link" href="#carouselExampleControls">Tips para green lovers</a>
                        </li>
                    </div>
                    <div className="navbar-brand">
                        <li class="nav-item">
                            <a class="nav-link" href="#howitworks">¿Quieres vender con Bloom?</a>
                        </li>
                    </div>
                    <a className="navbar-brand" to="/signup">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign up</a>
                        </li>
                    </a>
                    <a className="navbar-brand" to="login">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Log in</a>
                        </li>
                    </a>
                    <a className="navbar-brand" to="login">
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </a>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
