import React from 'react';
import {ChatContext} from '../context/chat_provider';
import { Link } from 'react-router-dom';
import {RiPlantLine } from 'react-icons/ri';

const Navbar = () => {

    const {usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext)

    return (
        <nav className='navbar' style={{background:'#2D624D'}}>
            <Link to='/' style={{ textDecoration: 'none' }} className="nav-link active logo navbar-brand d-flex mr-5 d-flex align-items-center">
                    <RiPlantLine size={60} style={{ color: "#fcf9f3" }} /> <div className='mt-2'><span style={{ color: "#fcf9f3", fontSize: '45px', fontWeight: 'bold' }}>BLOOM!</span></div>
                </Link>
            <div>
                {
                    usuario.estado ? (
                        <button 
                            className='btn my-2'
                            style={{background:'#fcf9f3', color:'#2D624D'}}
                            onClick={cerrarSesion}
                        >
                            Cerrar Sesión
                        </button>
                    ) : (
                        <button 
                            className='btn my-2'
                            style={{background:'#fcf9f3', color:'#2D624D'}}
                            onClick={ingresoUsuario}
                        >
                            Acceder
                        </button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
