import React from 'react';
import {ReactComponent as ReactLogo} from '../assets/images/undraw_investing_7u74.svg';

const Jumbotron = () => {
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-6 align-self-center '>
                    <h1 style={{fontSize: '45px', fontWeight: 'bold'}}>IMPULSA TU NEGOCIO AL PROXIMO NIVEL !!</h1>
                    <h5>Te apoyamos a lo largo de todo el camino</h5>
                    <button className='btn my-3' style={{background:'#6c63ff', border:'solid #6c63ff', borderRadius: '5px 5px 5px 5px', color:'#fcf9f3', fontSize:'20px' }}>Comienza ahora</button>
                    </div>
                    <div className='col-6'>
                    <div className='img' style={{width:'120%'}}>
                    <ReactLogo />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jumbotron
