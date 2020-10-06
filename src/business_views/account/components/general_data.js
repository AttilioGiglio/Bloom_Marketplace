import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';


const GeneralData = () => {
    return (
        <section class="bg-mix pt-3">
        <div class="container">
            <div class="card rounded-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 d-flex stat my-3">
                            <div class="mx-auto">
                                <h6 class="text-muted">Ingresos mensuales</h6>
                                <h3 class="font-weight-bold">$1500000</h3>
                                <h6 class="text-success"><FaArrowUp /> 10.50%</h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 d-flex stat my-3">
                            <div class="mx-auto">
                                <h6 class="text-muted">Ventas</h6>
                                <h3 class="font-weight-bold">100</h3>
                                <h6 class="text-danger"><FaArrowDown />2.50%</h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 d-flex stat my-3">
                            <div class="mx-auto">
                                <h6 class="text-muted">Stock</h6>
                                <h3 class="font-weight-bold">2500</h3>
                                <h6 class="text-success"><FaArrowUp /> 5.50%</h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 d-flex my-3">
                            <div class="mx-auto">
                                <h6 class="text-muted">Precio Promedio</h6>
                                <h3 class="font-weight-bold">$15000</h3>
                                <h6 class="text-success"><FaArrowUp />15.50%</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default GeneralData
