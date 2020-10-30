import React from 'react';
import {Link} from 'react-router-dom';


const AllOrders = ({order}) => {
    return (
        <tr>
        <td><Link to={'/products_list_business/'+order.id}><span style={{color:'#6c63ff'}}>{order.id}</span></Link></td>
        <td>{order.client}</td>
        <td>{order.total}</td>
        <td>{order.date}</td>     
        </tr>
    )
}

export default AllOrders