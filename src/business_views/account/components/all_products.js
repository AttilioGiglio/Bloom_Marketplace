import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const AllProducts = () => {
    return (
        <ReactBootStrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rosas</td>
                    <td>Blancas</td>
                    <td>3</td>
                    <td>$4990</td>
                </tr>
                <tr>
                    <td>Claveles</td>
                    <td>Rojos</td>
                    <td>4</td>
                    <td>$5990</td>
                </tr>
                <tr>
                    <td>Rosas</td>
                    <td>Blancas</td>
                    <td>3</td>
                    <td>$4990</td>
                </tr>
            </tbody>
        </ReactBootStrap.Table>
    )
}

export default AllProducts