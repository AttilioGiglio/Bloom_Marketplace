import React from 'react'

const CardProduct = ({name, content, price}) => {
    return (
        <>
            <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src="https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p className='card-text'>{price}</p>
                        <a href="#" class="btn btn-primary">comprar</a>
                    </div>
                </div>
        </>
    )
}

export default CardProduct
