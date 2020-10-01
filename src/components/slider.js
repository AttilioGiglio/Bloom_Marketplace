import React from 'react';
import './slider.scss';

const Slider = () => {
    return (
        <div className='slider'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/plants1-1551895073.png?crop=1.00xw:1.00xh;0,0&resize=1200:*' className="d-block w-100 h-30" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/plants-index-1558561755.png?crop=0.945xw:0.707xh;0,0.190xh&resize=1200:*" className="d-block w-100 h-30" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/plants-in-pots-royalty-free-image-1574464255.jpg?crop=1.00xw:0.752xh;0,0.0649xh&resize=1200:*" className="d-block w-100 h-30" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Slider
