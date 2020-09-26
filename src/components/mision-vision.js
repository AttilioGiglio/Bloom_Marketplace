import React, { useState } from 'react';
import './mision-vision.scss';
import { FcCloseUpMode } from 'react-icons/fc';
import { GiTreeGrowth } from 'react-icons/gi';
import { FcShipped } from 'react-icons/fc';



const MisionVision = () => {

    return (

        <div className='container'>
            <div row='row '>
                <div className='col-12 text-center mb-4'>
                    <h1>¿PORQUE COMPRAR EN BLOOM?</h1>
                </div>
            </div>
            <div className='row  d-flex justify-content-center text-center'>
                <div className='col-4'>
                    <FcCloseUpMode size={150} />
                    <h3>ALTA CALIDAD</h3>
                    <p>Solo trabajamos con los mas talentosos y apasionados artesanos. Y a nosotros nos apasioan apoyar sus familias y plantas.</p>
                </div>
                <div className='col-4'>
                    <FcShipped size={150} style={{ color: 'blue' }} />
                    <h3>DESPACHO A DOMICILIO</h3>
                    <p>Nuestros envios son preparados a mano, por profesionales. Con alto foco de mantener intacta y fresca sus ordenes. </p>
                </div>
                <div className='col-4'>
                    <GiTreeGrowth size={150} style={{ color: 'green' }} />
                    <h3>REFORESTACION</h3>
                    <p>Destinamos el 10% de nuestras utilidades a esta reforestar nuestro pais querido. Desde Arica a Punta Arenas.</p>
                </div>
            </div>
        </div>

    )
}

export default MisionVision
