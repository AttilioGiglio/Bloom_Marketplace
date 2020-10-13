import React, {useContext} from 'react';
import './cart_dropdown.scss';
import { Link } from 'react-router-dom';
import ProductContext from '../../context/products/product_context';

const CartDropdown = () => {

    const { cart } = useContext(ProductContext);

    return (
                <div className='cart-dropdown'>
                    <div className='cart-items'>
                    <div className='row' style={{listStyleType:'none', paddingLeft:'0'}}>
                    {
                    cart.length === 0
                        ? <div className='col-12'><p>Selecciona un producto</p></div>
                        :
                        cart.map(item => (
                         <div className='col-12 d-flex'>
                        <img className='pb-3' style={{width:'20%'}} src={item.img} alt="Card image cap" />
                        <p className='mb-0 mr-2 align-self-center'>{item.name}</p>
                        <p className='mb-0 mr-2 align-self-center'>${item.price}</p>
                        <p className='mb-0 align-self-center'>&#10005;</p>
                        </div>
                        ))
                    }
                    </div>
                    <div style={{borderTop:'solid 1px black'}}>
                    <p style={{fontSize:'20px', paddingTop:'10px'}}>Total: ${cart.reduce((acc, product) => acc + product.price, 0)}</p>
                    </div>
                    </div>
                    <button style={{
                            background: '#2D624D',
                            border: 'solid #2D624D',
                            borderRadius: '5px 5px 5px 5px',
                            color: '#fcf9f3',
                            fontSize: '20px'
                        }}
                        >
                            <Link to='/checkout_step_one'>
                                Comprar</Link>
                        </button>
                </div>
    )
}

export default CartDropdown
