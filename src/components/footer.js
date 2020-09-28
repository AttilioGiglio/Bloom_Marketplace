import React from 'react';
import { Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';
import './footer.scss';
import ContactForm from './contactform';

const Footer = () => {
    return (
        <div className='footer py-5'>
            <div className='row pb-1 d-flex justify-content-center align-items-center '>
                <div className='col-3 d-flex align-items-center mx-3'>
                    <RiPlantLine size={100} style={{ color: "#fcf9f3" }} /> <span style={{ color: "#fcf9f3", fontSize: '70px', fontWeight: 'bold' }}>BLOOM!</span>
                </div>
                <div className='col-2 mx-3'>
                    <strong>Acerca de nosotros:</strong>
                    <p style={{ margin: '0' }}>Somos Bloom y tenemos la</p>
                    <p style={{ margin: '0' }}>misión de transformar</p>
                    <p style={{ margin: '0' }}>completamente la forma en</p>
                    <p style={{ margin: '0' }}>que compran y venden</p>
                    <p style={{ margin: '0' }}>flores y plantas en Chile.
                    <p style={{ margin: '0' }}>Usando tecnología simple</p> 
                    <p style={{ margin: '0' }}>junto con la guía y nuestro</p>
                    <p style={{ margin: '0' }}></p>soporte diario</p>
                </div>
                <div className='col-2 mx-3'>
                    <strong>Dirección:</strong>
                    <p style={{ margin: '0' }}>Las trinitarias 7023.</p>
                    <p>Las condes, Santiago, Chile.</p>
                    <strong>Información de contacto:</strong>
                    <p style={{ margin: '0' }}>(+569) 95416520</p>
                    <p>attilio.g93@gmail.com</p>
                </div>
                <div className='col-2 mx-3'>
                    <ContactForm />
                </div>
            </div>
        </div>

    )
}

export default Footer;
