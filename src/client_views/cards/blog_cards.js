import React from 'react';

const BlogCards = ({ common_name, image_url }) => {
    console.log(image_url)
    return (
        <div className='row d-flex justify-content-around'>
            <div className='d-inline-flex m-5'>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={image_url} alt="Card" />
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
