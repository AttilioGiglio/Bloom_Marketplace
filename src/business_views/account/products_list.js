import React, {useState, useEffect, useContext} from 'react';
import NavbarAccount from './components/navbar_account';
import Sidebar from './components/sidebar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {Link, useParams} from 'react-router-dom';
import { Context } from '../../store/context';
import * as ReactBootStrap from 'react-bootstrap';

const ProductsList = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const { store, actions } = useContext(Context) 
    const getProducts = async() => {
        const fetch = await actions.getAllProductByOrder(id);
        setProducts(fetch.exitoso)
    }

    useEffect(() => {
        getProducts()
    }, []) 
    return (
        <div>
            <div className="d-flex" id="content-wrapper">
                <Sidebar />
                <div className='w-100'>
                    <NavbarAccount />
                    <div id="content" style={{ margin: '50px auto 0', width: '80%', minHeight: '90vh' }}>
                    <ReactBootStrap.Table striped bordered hover>
            <thead>
                <tr>
                <th>SKU</th>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
            {products.map(product => 
            
                <tr>
                <td>{product.sku_id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                </tr>
               
            
            )}       
            </tbody>
        </ReactBootStrap.Table>
                   
                        <button className='btn' style={{ background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }}>
                       <Link to={'/orders_list_business/'+store.supplier.id }> <AiOutlineArrowLeft style={{color: '#fcf9f3', marginBottom:'4px'}}/></Link></button>
                    </div>

                </div>

            </div>  
        </div>
    )
}

export default ProductsList
