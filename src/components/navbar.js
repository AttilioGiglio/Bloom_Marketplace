import React from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-5">
            <Link to='/' style={{ textDecoration: 'none' }}> <a className="logo navbar-brand d-flex">
            <RiPlantLine size={70} style={{ color: "#224229" }} /> <div style={{marginTop:'2px'}}><span style={{ color: "#224229", fontSize: '50px', fontWeight: 'bold' }}>BLOOM!</span></div>
            </a>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto pt-3 mb-1">
                    <li className="nav-item mr-5">
                        <Link to='/' style={{ textDecoration: 'none' }}><a className="nav-link active ">HOME</a></Link>
                    </li>
                    <li className="nav-item dropdown mr-5">
                        <a className="nav-link dropdown-toggle active" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PRODUCTOS
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to='todos' style={{ textDecoration: 'none' }}><a className="dropdown-item">TODOS</a></Link>
                            <Link to='/indoor' style={{ textDecoration: 'none' }}><a className="dropdown-item">PLANTAS INDOOR</a></Link>
                            <Link to='/outdoor' style={{ textDecoration: 'none' }}><a className="dropdown-item">PLANTAS OUTDOOR</a></Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown mr-5">
                        <a className="nav-link dropdown-toggle active" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            BLOG
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to='/tips' style={{ textDecoration: 'none' }}><a className="dropdown-item">TIPS</a></Link>
                            <Link to='/noticias' style={{ textDecoration: 'none' }}><a className="dropdown-item">NOTICIAS</a></Link>
                            <Link to='/eventos' style={{ textDecoration: 'none' }}><a className="dropdown-item">EVENTOS</a></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to='/signup' style={{ textDecoration: 'none' }}><a className="nav-link active">SIGN UP</a></Link>
                    </li>
                    <li className="nav-item">
                    <a className='nav-link active'>/</a>
                    </li>
                    <li className="nav-item mr-5">
                        <Link to='/login' style={{ textDecoration: 'none' }}><a className="nav-link active">LOGIN</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/checkout'><a className="nav-link active"><FiShoppingCart size={40} style={{ color: "#224229" }} className='icon' /></a></Link>
                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default NavBar;
