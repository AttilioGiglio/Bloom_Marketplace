import React, { useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../assets/images/Asset2.svg';
import { RiUserAddLine } from 'react-icons/ri';
import { RiPlantLine } from 'react-icons/ri';
import './alert.scss'
import { Context } from '../store/context';
import AlertContext from '../context/alert/alert_context';


const LoginClient = ({history}) => {
    
    const [clientLogin, setClientLogin] = useState({
        email: '',
        password: '',
        role:'client'
    })
    
    const { alert, showAlert } = useContext(AlertContext);

    const {email, password} = clientLogin;

    const {store, actions} = useContext(Context)

    // useEffect(() => {
    //     const user = localStorage.getItem('user');
    //     const auth = localStorage.getItem('auth');
    // }, [])


    const handleChange = (e) => {
        let value = e.target.value;
        (e.target.name === 'email')&&(value = value.toLowerCase())
        setClientLogin({...clientLogin, [e.target.name]: value})
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        if ( email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alert-error')
        }
        if (password.length < 6) {
            showAlert('La contraseña debe ser al menos de 6 caracteres', 'alert-error')
            return;
        }
        actions.loginUser(clientLogin)

        store.users.map(user => (user.email === clientLogin.email && store.auth) ? history.push('/summary_business') : showAlert('No se encuentra registrado','alert-error'))

        setClientLogin({
            email: '',
            password: '',
        })
    }

    return (
        <div className='d-flex'>
            <Link to='/' style={{ textDecoration: 'none' }}><div className="position-absolute d-flex ml-4 mt-3 d-flex align-items-center">
                <RiPlantLine size={40} style={{ color: "#2D624D" }} /> <div className='mt-1'><span style={{ color: "#2D624D", fontSize: '40px', fontWeight: 'bold' }}>BLOOM!</span></div>
            </div></Link>
            <section className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
                <div className='container'>
                    <div className='card p-5'>
                        <div className='row' className='d-flex justify-content-center ' >
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
                                        type='text' 
                                        name='password'
                                        value={password}
                                        className="form-control"
                                        onChange={handleChange}
                                         />
                                    </div>
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
