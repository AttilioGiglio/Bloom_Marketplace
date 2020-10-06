import React from 'react';
import './products_list.scss';
import { Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';
import { MdControlPoint } from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BiCog } from 'react-icons/bi';
import { AiFillTag } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { ReactComponent as ReactLogo } from '../../assets/images/programador.svg';


const Sidebar = () => {
    return (
        <div>
            <div class="d-flex" id="content-wrapper">

                <div id="sidebar-container" style={{ background: '#479A79' }}>
                    <div class="logo nav-link active logo navbar-brand d-flex mr-5 mb-3 d-flex align-items-center">
                        <RiPlantLine size={40} style={{ color: "#fcf9f3" }} /> <div className='mt-2'><span style={{ color: "#fcf9f3", fontSize: '40px', fontWeight: 'bold' }}>BLOOM!</span></div>
                    </div>
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

                <div className='w-100'>
                    <nav class="navbar navbar-expand-lg" style={{ borderBottom: 'solid 2px #479A79' }}>
                        <div className='container-fluid'>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse mr-5" id="navbarSupportedContent">
                                <form class="form-inline position-relative my-2 d-inline-block ml-2">
                                    <input class="buscar form-control mr-sm-2" aria-label="Search" style={{ border: 'solid 2px #479A79', background: '#fcf9f3', color: '#479A79' }} />
                                    <button class="btn btn-search position-absolute my-sm-0" type="submit">
                                        <div>
                                            <GoSearch style={{ fontSize: '20px', color: '#479A79' }} />
                                        </div>
                                    </button>
                                </form>
                                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <ReactLogo className='mr-2 rounded-circle avatar' />
                                            <span style={{ color: '#479A79' }}>Attilio Giglio</span>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                            <Link to='/profile_business' class="dropdown-item" href="#"><span style={{ color: '#479A79' }}>Mi Perfil</span></Link>
                                            <div class="dropdown-divider"></div>
                                            <Link to='/business' class="dropdown-item" href="#"><span style={{ color: '#479A79' }}>Cerrar Sesión</span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div id="content" class="w-100">

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

                        <section>
                            <div class="container">
                                <div class="row">
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
                                                <button class="btn w-100" style={{ background: '#479A79', border: 'solid #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3' }}>Ver todas</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Sidebar
