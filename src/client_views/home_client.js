import React from 'react';
import NavBar from '../components/navbar';
import Slider from '../components/slider';
import CategoriasPrincipales from '../components/categorias-principales';
import MisionVision from '../components/mision-vision';
import ProductosCarrusel from '../components/productos-carrusel';
import Footer from '../components/footer';

const HomeClient = () => {
    return (
        <div>
            <NavBar />
            <Slider />
            <CategoriasPrincipales />
            <MisionVision />
            <ProductosCarrusel />
            <Footer />
        </div>
    )
}

export default HomeClient
