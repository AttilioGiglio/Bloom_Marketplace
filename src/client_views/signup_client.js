import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../assets/images/Asset1.svg';
import { RiLoginBoxLine } from 'react-icons/ri';


const SignupClient = () => {
    return (
        <section className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
            <div className='container'>
                <div className='card p-5'>
                    <div className='row' className='d-flex justify-content-center align-items-center' >
                        <div className='col-4 align-self-center mx-2'>
                            <form style={{ fontSize: '20px' }}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Nombre</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Correo</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn my-2 px-3" style={{ background: '#2D624D', border: 'solid #2D624D', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }}>Registrarse</button>
                            </form>
                            <Link
                                to={'/login_client'}
                                className='enlace-cuenta'>
                                <p className='mt-3' style={{ color: '#2D624D', fontSize: '15px' }}>Ya tienes una cuenta <RiLoginBoxLine style={{color: '#2D624D', fontSize:'18px'}} /></p>
                            </Link>
                        </div>
                        <div className='col-7 mx-2'>
                            <div className='img' style={{ width: '100%', height: '100%' }}>
                                <ReactLogo/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default SignupClient
