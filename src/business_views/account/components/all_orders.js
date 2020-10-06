import React from 'react';
import {Link} from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';

const AllOrders = () => {
    return (
        <ReactBootStrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th>#OrdenID</th>
                    <th>Cliente</th>
                    <th>Monto</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Link to='products_list_business'><span style={{color:'#6c63ff'}}>1</span></Link></td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td><Link to='products_list_business'><span style={{color:'#6c63ff'}}>2</span></Link></td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td><Link to='products_list_business'><span style={{color:'#6c63ff'}}>3</span></Link></td>
                    <td>Larry the Bird</td>
                    <td>Jackson</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </ReactBootStrap.Table>
    )
}

export default AllOrders