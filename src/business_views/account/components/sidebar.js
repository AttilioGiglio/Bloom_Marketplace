import React from 'react';
import { Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';
import { MdControlPoint } from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BiCog } from 'react-icons/bi';

const Sidebar = () => {
    return (
        

                <div id="sidebar-container" style={{ background: '#479A79' }}>
                    <Link to='summary_business' style={{ textDecoration: 'none' }}><div class="logo nav-link active logo navbar-brand d-flex mr-5 mb-3 d-flex align-items-center">
                        <RiPlantLine size={40} style={{ color: "#fcf9f3" }} /> <div className='mt-2'><span style={{ color: "#fcf9f3", fontSize: '40px', fontWeight: 'bold' }}>BLOOM!</span></div>
                    </div></Link>
                    <div class="menu">
                        <Link to={'/summary_business'} style={{ textDecoration: 'none' }} class="d-block text-light p-3 border-0"><i class="icon ion-md-apps lead mr-2"></i>
                            <AiOutlineBarChart className='mb-1' style={{ fontSize: '26px' }} /> Resumen </Link>
                        <Link to={'/products_list_business'} style={{ textDecoration: 'none' }} class="d-block text-light p-3 border-0"><i class="icon ion-md-apps lead mr-2"></i>
                            <HiOutlineClipboardList className='mb-1' /> Lista de Productos</Link>
                        <Link to={'/add_product_business'} style={{ textDecoration: 'none' }} class="d-block text-light p-3 border-0"><i class="icon ion-md-people lead mr-2"></i>
                            <MdControlPoint className='mb-1' /> Agregar Producto</Link>
                        <Link to={'/profile_business'} style={{ textDecoration: 'none' }} class="d-block text-light p-3 border-0"><i class="icon ion-md-people lead mr-2"></i>
                            <BiCog /> Configuración</Link>
                    </div>
                </div>
    )
}

export default Sidebar
