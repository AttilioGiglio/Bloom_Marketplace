import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillTag } from 'react-icons/ai';
const RecentSales = () => {
    return (
        <div className="col-lg-4 my-3">
        <div className="card rounded-0">
            <div className="card-header bg-light">
                <h6 className="font-weight-bold mb-0">Ventas recientes</h6>
            </div>
            <div className="card-body pt-2">
                <div className="d-flex border-bottom py-2">
                    <div className="d-flex mr-3">
                        <h2 className="align-self-center mb-1"><AiFillTag style={{ fontSize: '25px', color: '#479A79' }} /></h2>
                    </div>
                    <div className="d-flex align-self-center mt-2">
                        <h6 className="mr-2">$10000 - Girasoles</h6>
                    </div>
                </div>
                <div className="d-flex border-bottom py-2">
                    <div className="d-flex mr-3">
                        <h2 className="align-self-center mb-1"><AiFillTag style={{ fontSize: '25px', color: '#479A79' }} /></h2>
                    </div>
                    <div className="d-flex align-self-center mt-2">
                        <h6 className="mr-2">$20000 - Rosas Rojas</h6>
                    </div>
                </div>
                <Link to='products_list_business'>
                    <button className="btn w-100" style={{ background: '#479A79', border: 'solid #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3' }}>Ver todas</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default RecentSales
