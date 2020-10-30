import React from 'react';

const BlogCards = ({ common_name, image_url }) => {

    return (
        <div className='col-3 d-flex justify-content-center'>
            <div className='d-inline-flex m-5'>
                <div className="card" style={{ width: '23rem' }}>
                    <img className="card-img-top" style={{ height: '30rem' }} src={image_url} alt="Card" />
                    <div className="card-body">

                        <h5 className="card-title">{common_name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="..." className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCards
