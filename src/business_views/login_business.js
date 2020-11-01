import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../assets/images/undraw_Login_re_4vu2.svg';
import { RiUserAddLine } from 'react-icons/ri';
import { RiPlantLine } from 'react-icons/ri';
import { Context } from '../store/context';
import AlertContext from '../context/alert/alert_context';

const LoginBusiness = ({history}) => {

    const [businessLogin, setBusinessLogin] = useState({
        email: '',
        password: '',
        role:'business'
    })
    
    const { alert, showAlert } = useContext(AlertContext);

    const { email, password, role } = businessLogin;

    const { store, actions } = useContext(Context)

    const handleChange = (e) => {
        let value = e.target.value;
        (e.target.name === 'email')&&(value = value.toLowerCase())
        setBusinessLogin({...businessLogin, [e.target.name]: value})
    }

    const loginSubmit = async(e) => {
        e.preventDefault();

         // validacion de campos vacios
         if ( email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alert-error')
        }
        // validacion password min 6 caracteres
        if (password.length < 6) {
            showAlert('La contraseña debe ser al menos de 6 caracteres', 'alert-error')
            return;
        }
        
        let success = await actions.loginSupplier(email, password, role);
        
        if (success && store.token) {
            localStorage.setItem('authbusiness',store.token);
            history.replace("/summary_business")
        } else {
            showAlert('No se encuentra registrado','alert-error')
        }
        
        setBusinessLogin({
            email: '',
            password: '',
        })
    }

    return (
        <div className='d-flex'>
            <Link to='/business' style={{ textDecoration: 'none' }}>
                <div className="position-absolute d-flex ml-4 mt-3 align-items-center" style={{ color: "#479A79", fontSize: '40px', fontWeight: 'bold' }}>
                    <RiPlantLine />
                    <div className='mt-1'>
                        <span >BLOOM!</span>
                    </div>
                </div>
            </Link>
            <section className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
                <div className='container'>
                    <div className='card p-5'>
                        <div className=' row d-flex justify-content-center'>
                            <div className='col-5 align-self-center mx-2'>
                                <form
                                    style={{ fontSize: '20px' }}
                                    onSubmit={loginSubmit}
                                >
                                {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
                                    <div className="form-group">
                                        <label>Correo</label>
                                        <input
                                            type="email"
                                            name='email'
                                            value={email}
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Contraseña</label>
                                        <input
                                            type='password'
                                            name='password'
                                            value={password}
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </div>
                                        <button 
                                        type="submit" 
                                        className="btn my-2 px-3" 
                                        style={{ background: '#6c63ff', border: 'solid #6c63ff', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }}>Iniciar Sesión</button>
                                </form>
                                <Link
                                    to={'/signup_business'}
                                    className='enlace-cuenta'>
                                    <p className='mt-3' style={{ color: '#6c63ff', fontSize: '15px' }}>Crear un cuenta <RiUserAddLine style={{ color: '#6c63ff', fontSize: '18px' }} /></p>
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

export default LoginBusiness
