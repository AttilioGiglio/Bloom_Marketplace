import React from 'react';
import { Link } from 'react-router-dom';
import './categorias-principales.scss';

const CategoriasPrincipales = () => {
    return (
        
        <div className='row d-flex justify-content-center'>
            <div className='col-5'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className="card-text text-center pb-2"> JARDIN OUTDOOR </h2>
                        <Link to='/outdoor_products'>
                        <img src="https://images.unsplash.com/photo-1551893665-f843f600794e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="card-img-bottom" alt="..." />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='col-5'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className="card-text text-center pb-2"> JARDIN INDOOR</h2>
                        <Link to='/indoor_products'>
                        <img src="https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="card-img-bottom" alt="..." />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CategoriasPrincipales;
