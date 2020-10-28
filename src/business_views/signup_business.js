import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../assets/images/undraw_investment_xv9d.svg';
import { RiLoginBoxLine } from 'react-icons/ri';
import { RiPlantLine } from 'react-icons/ri';
import AlertContext from '../context/alert/alert_context'
import '../client_views/alert.scss'
import { Context } from '../store/context';

const SignupBusiness = ({ history }) => {

    const { alert, showAlert } = useContext(AlertContext);

    const { actions } = useContext(Context)

    const [businessSignup, setBusinessSignup] = useState({
        name: '',
        email: '',
        password: '',
        role:'business'
    })

    const { name, email, password, address, business_legal_name, business_id } = businessSignup;

    const onChange = (e) => {
        let value = e.target.value;
        (e.target.name === 'email') && (value = value.toLowerCase())
        setBusinessSignup({ ...businessSignup, [e.target.name]: value })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        // validacion de campos vacios
        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alert-error')
        }
        // validacion password min 6 caracteres
        if (password.length < 6) {
            showAlert('La contraseña debe ser al menos de 6 caracteres', 'alert-error')
            return;
        }

        // pasarlo al action del context
        actions.registerSupplier(businessSignup);

        setBusinessSignup({
            name: '',
            email: '',
            password: '',
            role:'business'
        })

        history.push('/login_business');
    }


    return (
        <div className='d-flex'>
            <Link to='/business' style={{ textDecoration: 'none' }}>
                <div className="position-absolute d-flex ml-4 mt-3 d-flex align-items-center">
                    <RiPlantLine size={40} style={{ color: "#479A79" }} />
                    <div className='mt-1'>
                        <span style={{ color: "#479A79", fontSize: '40px', fontWeight: 'bold' }}>BLOOM!</span>
                    </div>
                </div>
            </Link>
            <section className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
                <div className='container'>
                    <div className='card p-5'>
                        <div className='row' className='d-flex justify-content-center align-items-center' >
                            <div className='col-4 align-self-center mx-2'>
                                <form
                                    style={{ fontSize: '20px' }}
                                    onSubmit={onSubmit}
                                >
                                {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name='name'
                                            value={name}
                                            onChange={onChange}
                                        />
                                    </div>
                                    {/* <div className="form-group">
                                        <label for="exampleInputEmail1">Rut Empresa</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="business_id "
                                            name='business_id'
                                            value={business_id}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Razón Social</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="business_legal_name"
                                            name='business_legal_name'
                                            value={business_legal_name}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Domicilio</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            name='address'
                                            value={address}
                                            onChange={onChange}
                                        />
                                    </div> */}
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Correo</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name='email'
                                            value={email}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Contraseña</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="password"
                                            name='password'
                                            value={password}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn my-2 px-3" style={{ background: '#6c63ff', border: 'solid #6c63ff', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }}>Registrarse</button>
                                </form>
                                <Link
                                    to={'/login_business'}
                                    className='enlace-cuenta'>
                                    <p className='mt-3' style={{ color: '#6c63ff', fontSize: '15px' }}>Ya tienes una cuenta <RiLoginBoxLine style={{ color: '#6c63ff', fontSize: '18px' }} /></p>
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

export default SignupBusiness
