import React, { Component } from 'react';
import './productos-carrusel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const photos = [
    {
        name: 'photo1',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61h7m34gVGL._SX466_.jpg'
    },
    {
        name: 'photo2',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61h7m34gVGL._SX466_.jpg'

    },
    {
        name: 'photo3',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61h7m34gVGL._SX466_.jpg'

    },
    {
        name: 'photo4',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61h7m34gVGL._SX466_.jpg'

    },
    {
        name: 'photo5',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61h7m34gVGL._SX466_.jpg'

    },
    {
        name: 'photo6',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61h7m34gVGL._SX466_.jpg'

    },
]

const ProductosCarrusel = () =>{
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2
        };
        return (

                <div className='categorias'>
                    <Slider {...settings}>
                    {photos.map((photo)=>{
                        return(
                        <div className='col'>    
                        <div className='card'>
                            <img width='100%' src={photo.url} />
                        </div>
                        </div>
                        )
                    })}
                    </Slider>
                </div>

        )
    }

export default ProductosCarrusel
