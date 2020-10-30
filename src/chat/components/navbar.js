import React from 'react'
import {ChatContext} from '../context/chat_provider'

const Navbar = () => {

    const {usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext)

    return (
        <nav className='navbar navbar-dark bg-dark'>
            <span className='navbar-brand'>
                Chat
            </span>
            {/* <div>
                {
                    usuario.estado ? (
                        <button 
                            className='btn btn-outline-danger my-2'
                            onClick={cerrarSesion}
                        >
                            Cerrar Sesión
                        </button>
                    ) : (
                        <button 
                            className='btn btn-outline-success my-2'
                            onClick={ingresoUsuario}
                        >
                            Acceder
                        </button>
                    )
                }
            </div> */}
        </nav>
    )
}

export default Navbar
