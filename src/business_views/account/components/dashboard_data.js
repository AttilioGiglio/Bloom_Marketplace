import React from 'react'

const DashboardData = () => {
    return (
        <div class="col-lg-8 my-3">
        <div class="card rounded-0">
            <div class="card-header bg-light">
                <h6 class="font-weight-bold mb-0">Gráfico de ventas diarias</h6>
            </div>
            <div class="card-body">
                <canvas id="myChart" width="300" height="142"></canvas>
            </div>
        </div>
    </div>
    )
}

export default DashboardData
