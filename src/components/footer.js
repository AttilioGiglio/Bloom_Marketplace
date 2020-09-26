import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col-12 col-lg'>
                        <Link path='/nosotros'><a className='btn btn-default'>Nosotros</a></Link>
                    </div>
                    <div className='col-12 col-lg'>
                        <Link path='/preguntas'><a className='btn btn-default'>Noticias y eventos</a></Link>
                    </div>
                    <div className='col-12 col-lg'>
                        <Link path='/preguntas'><a className='btn btn-default'>Dueños de florerias y viveros</a></Link>
                    </div>
                    <div className='col-12 col-lg'>
                        <Link path='/preguntas'><a className='btn btn-default'>Preguntas Frecuentes</a></Link>
                    </div>
                    <div className='col-12 col-lg'>
                        <Link path='/preguntas'><a className='btn btn-default'>Contactanos</a></Link>
                    </div>
                    <div className='col-12 col-lg'>
                        <Link path='/preguntas'><a className='btn btn-default'>Terminos y condiciones</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
