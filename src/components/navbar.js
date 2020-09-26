import React from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light py-3">
            <a class="navbar-brand">
                <RiPlantLine size={75} style={{ color: "green" }} /> <span style={{ color: "green", fontSize: '50px', fontWeight:'bold'  }}>BLOOM!</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto pt-3 mb-1">
                    <li class="nav-item mr-4">
                        <Link to='/' style={{ textDecoration: 'none' }}><h4 class="nav-link active ">HOME</h4></Link>
                    </li>
                    <li class="nav-item dropdown mr-4">
                        <h4 class="nav-link dropdown-toggle active" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PRODUCTOS
                        </h4>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to='todos' style={{ textDecoration: 'none' }}><h5 class="dropdown-item">TODOS</h5></Link>
                            <Link to='/indoor' style={{ textDecoration: 'none' }}><h5 class="dropdown-item">PLANTAS INDOOR</h5></Link>
                            <Link to='/outdoor' style={{ textDecoration: 'none' }}><h5 class="dropdown-item">PLANTAS OUTDOOR</h5></Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown mr-4">
                        <h4 class="nav-link dropdown-toggle active" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            BLOG
                        </h4>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to='/tips' style={{ textDecoration: 'none' }}><h5 class="dropdown-item">TIPS</h5></Link>
                            <Link to='/noticias' style={{ textDecoration: 'none' }}><h5 class="dropdown-item">NOTICIAS</h5></Link>
                            <Link to='/eventos' style={{ textDecoration: 'none' }}><h5 class="dropdown-item">EVENTOS</h5></Link>
                        </div>
                    </li>
                    <li class="nav-item mr-4">
                        <Link to='/signup' style={{ textDecoration: 'none' }}><h4 class="nav-link active">SIGN UP</h4></Link>
                    </li>
                    <li class="nav-item mr-4">
                        <Link to='/login' style={{ textDecoration: 'none' }}><h4 class="nav-link active">LOGIN</h4></Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/checkout'><a class="nav-link active"><FiShoppingCart size={35} style={{ color: "green"}} /></a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
