import React, { useContext, useState } from 'react';
import './navbar_client.scss';
import { Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';
import { BsChatDots } from 'react-icons/bs';
import Cart from './cart/cart';
import CartDropdown from './cart/cart_dropdown';
import { Context } from '../store/context';

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const { actions} = useContext(Context)

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
                            <Link to='/' className="nav-link active" style={{ textDecoration: 'none' }}>HOME</Link>
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
                            <Link to='product_cards' className="nav-link active" style={{ textDecoration: 'none' }}>PRODUCTOS</Link>
                        </li>
                        {
                            (localStorage.getItem('auth'))
                        
                        ?
                        <li className="nav-item mr-3">
                            <Link to='/blog_cards' className="nav-link active" style={{ textDecoration: 'none' }}>BLOG</Link>
                        </li>
                        :
                        null
                        }
                        <li className="nav-item mr-3">
                            <Link to='/business' className="nav-link active" style={{ textDecoration: 'none' }}>VENDE CON BLOOM!</Link>
                        </li>
                        {
                            (localStorage.getItem('auth'))
                        
                        ?
                        <li className="nav-item mr-3" onClick={actions.logoutClient}>
                            <Link to='/' className="nav-link active" style={{ textDecoration: 'none' }}>CERRAR SESIÓN</Link>
                        </li>
                        :
                        <>
                        <li className="nav-item mr-3">
                            <Link to='/signup_client' className="nav-link active" style={{ textDecoration: 'none' }}>CREAR CUENTA</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to='/login_client' className="nav-link active" style={{ textDecoration: 'none' }}>INICIAR SESIÓN</Link>
                        </li>
                        </>
                        }
                        <li className="nav-item ml-2" onClick={() => setToggle(!toggle) }>
                            <Cart/>
                            </li>
                            {
                                toggle
                                    ?
                                    < CartDropdown />
                                    :
                                    null
                            }
                            {
                            (localStorage.getItem('auth'))
                        
                        ?
                        <li className="nav-item ml-4">
                            <Link to='/chat' className="nav-link active ml-3 p-0 m-0 d-flex" style={{ textDecoration: 'none', fontSize:'36px', position: 'relative', alignItems:'center' }}><BsChatDots/></Link>
                        </li>
                        :
                        null
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
