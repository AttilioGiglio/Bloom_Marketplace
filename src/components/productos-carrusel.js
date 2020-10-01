import React from 'react';
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

const ProductosCarrusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className='categorias'>
            <Slider {...settings}>
                {photos.map((photo) => {
                    return (
                        <div className='col'>
                            <div className='card'>
                                <img width='100%' src={photo.url} alt='' />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>

    )
}

export default ProductosCarrusel
