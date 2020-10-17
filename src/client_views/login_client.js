import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../assets/images/Asset2.svg';
import { RiUserAddLine } from 'react-icons/ri';
import { RiPlantLine } from 'react-icons/ri';
import AuthContext from '../context/auth/auth_context';

const LoginClient = () => {
    
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const {currentUser} = useContext(AuthContext)

    const handleChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value})
    }

    const clientLogin = (e) => {
        e.preventDefault();
        currentUser(login)

    }

    return (
        <div className='d-flex'>
            <Link to='/' style={{ textDecoration: 'none' }}><div class="position-absolute d-flex ml-4 mt-3 d-flex align-items-center">
                <RiPlantLine size={40} style={{ color: "#2D624D" }} /> <div className='mt-1'><span style={{ color: "#2D624D", fontSize: '40px', fontWeight: 'bold' }}>BLOOM!</span></div>
            </div></Link>
            <section className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
                <div className='container'>
                    <div className='card p-5'>
                        <div className='row' className='d-flex justify-content-center ' >
                            <div className='col-5 align-self-center mx-2'>
                                <form
                                    style={{ fontSize: '20px' }}
                                    onSubmit={clientLogin}
                                >
                                    <div className="form-group">
                                        <label>Correo</label>
                                        <input 
                                        type="email" 
                                        className="form-control"
                                        onChange={handleChange}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <label>Contraseña</label>
                                        <input 
                                        type='text' 
                                        className="form-control"
                                        onChange={handleChange}
                                         />
                                    </div>
                                    <Link
                                        to={'/'}>
                                        <button
                                            type="submit"
                                            className="btn my-2 px-3"
                                            style={{
                                                background: '#2D624D',
                                                border: 'solid #2D624D',
                                                borderRadius: '5px 5px 5px 5px',
                                                color: '#fcf9f3',
                                                fontSize: '20px'
                                            }}>
                                            Iniciar Sesión
                                </button>
                                    </Link>
                                </form>
                                <Link
                                    to={'/signup_client'}
                                    className='enlace-cuenta'>
                                    <p className='mt-3' style={{ color: '#2D624D', fontSize: '15px' }}>Crear un cuenta <RiUserAddLine style={{ color: '#2D624D', fontSize: '18px' }} /></p>
                                </Link>
                            </div>
                            <div className='col-7 mx-2'>
                                <div className='img' style={{ width: '100%', height: '100%' }}>
                                    <ReactLogo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginClient
