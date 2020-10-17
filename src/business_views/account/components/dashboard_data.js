import React from 'react'

const DashboardData = () => {
    return (
        <div className="col-lg-8 my-3">
        <div className="card rounded-0">
            <div className="card-header bg-light">
                <h6 className="font-weight-bold mb-0">Gráfico de ventas diarias</h6>
            </div>
            <div className="card-body">
                <canvas id="myChart" width="300" height="142"></canvas>
            </div>
        </div>
    </div>
    )
}

export default DashboardData
