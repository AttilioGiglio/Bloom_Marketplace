import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../assets/images/undraw_Login_re_4vu2.svg';
import { RiUserAddLine } from 'react-icons/ri';

const LoginBusiness = () => {
    return (
        <section className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
            <div className='container'>
                <div className='card p-5'>
                    <div className='row' className='d-flex justify-content-center'>
                        <div className='col-5 align-self-center mx-2'>
                            <form style={{ fontSize: '20px' }}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Correo</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <Link
                                    to={'/summary_business'}>
                                    <button type="submit" className="btn my-2 px-3" style={{ background: '#6c63ff', border: 'solid #6c63ff', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }}>Iniciar Sesión</button>
                                </Link>
                            </form>
                            <Link
                                to={'/signup_business'}
                                className='enlace-cuenta'>
                                <p className='mt-3' style={{ color: '#6c63ff', fontSize: '15px' }}>Crear un cuenta <RiUserAddLine style={{color:'#6c63ff', fontSize: '18px'}} /></p>
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
    )
}

export default LoginBusiness
