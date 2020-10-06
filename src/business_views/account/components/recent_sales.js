import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillTag } from 'react-icons/ai';
const RecentSales = () => {
    return (
        <div class="col-lg-4 my-3">
        <div class="card rounded-0">
            <div class="card-header bg-light">
                <h6 class="font-weight-bold mb-0">Ventas recientes</h6>
            </div>
            <div class="card-body pt-2">
                <div class="d-flex border-bottom py-2">
                    <div class="d-flex mr-3">
                        <h2 class="align-self-center mb-1"><AiFillTag style={{ fontSize: '25px', color: '#479A79' }} /></h2>
                    </div>
                    <div class="d-flex align-self-center mt-2">
                        <h6 class="mr-2">$10000 - Girasoles</h6>
                    </div>
                </div>
                <div class="d-flex border-bottom py-2">
                    <div class="d-flex mr-3">
                        <h2 class="align-self-center mb-1"><AiFillTag style={{ fontSize: '25px', color: '#479A79' }} /></h2>
                    </div>
                    <div class="d-flex align-self-center mt-2">
                        <h6 class="mr-2">$20000 - Rosas Rojas</h6>
                    </div>
                </div>
                <Link to='products_list_business'>
                    <button class="btn w-100" style={{ background: '#479A79', border: 'solid #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3' }}>Ver todas</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default RecentSales
