import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';
import { MdControlPoint } from 'react-icons/md';
import { RiFileList2Line } from 'react-icons/ri';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BiCog } from 'react-icons/bi';
import { Context } from '../../../store/context'

const Sidebar = () => {
   const { store } = useContext(Context) 
    return (
        

                <div id="sidebar-container" style={{ background: '#479A79' }}>
                    <Link to='summary_business' style={{ textDecoration: 'none' }}><div className="logo nav-link active logo navbar-brand d-flex mr-5 mb-3 d-flex align-items-center">
                        <RiPlantLine size={40} style={{ color: "#fcf9f3" }} /> <div className='mt-2'><span style={{ color: "#fcf9f3", fontSize: '40px', fontWeight: 'bold' }}>BLOOM!</span></div>
                    </div></Link>
                    <div className="menu">
                        <Link to={'/summary_business'} style={{ textDecoration: 'none' }} className="d-block text-light p-3 border-0"><i className="icon ion-md-apps lead mr-2"></i>
                            <AiOutlineBarChart className='mb-1' style={{ fontSize: '26px' }} /> Resumen </Link>
                        <Link to={'/orders_list_business/'+store.supplier.id} style={{ textDecoration: 'none' }} className="d-block text-light p-3 border-0"><i className="icon ion-md-apps lead mr-2"></i>
                            <RiFileList2Line className='mb-1' /> Lista de Ordenes</Link>
                        <Link to={'/add_product_business/'+store.supplier.id} style={{ textDecoration: 'none' }} className="d-block text-light p-3 border-0"><i className="icon ion-md-people lead mr-2"></i>
                            <MdControlPoint className='mb-1' /> Agregar Producto</Link>
                        <Link to={'/profile_business/'+store.supplier.id} style={{ textDecoration: 'none' }} className="d-block text-light p-3 border-0"><i className="icon ion-md-people lead mr-2"></i>
                            <BiCog /> Configuración</Link>
                    </div>
                </div>
    )
}

export default Sidebar
