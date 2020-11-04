import React, {useState, useContext} from 'react';
import './checkout_item.scss';
import {Context} from '../../store/context' 
import { BsCreditCard } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CheckoutItem = ({ cart, setState, state, uid, total }) => {

    const {actions} = useContext(Context)

    const [check, setCheck] = useState([]);

    const {quantity_out} = check;
    
    const deleteItem = (item) => {
        console.log(item)
        setState(!state)
        let checkout= cart.filter(itemtwo => itemtwo.id !== item.id)
        sessionStorage.setItem('cartlist', JSON.stringify(checkout))
    }

    const onChange = (e, id) => {
        const item = cart.find(item => item.id ===id);
        setCheck([...check, {'id':item.id, 'name':item.name, 'price':item.price, 'quantity_in':item.quantity_in, [e.target.name]:e.target.value}])
        // var a = JSON.parse(cart)
        // a.map(item => item['quantity_out']=e.target.value)
        // localStorage.setItem('carlist',JSON.stringify( e.target.value));
    }
    console.log(quantity_out)
    const onClick = () => {
        // const newCart = cart.map(item => item['quantity_out'] = quantity_out)
        // sessionStorage.setItem('cartlist', JSON.stringify(newCart))
        console.log(quantity_out)
        actions.createOrder(total, uid)
    }
    
    return (
        <div className='checkout-item d-block'>
        <tbody>
            {
                cart.length === 0
                    ? <tr style={{ width: '100%', paddingTop: '15px' }}><th>No hay tareas...</th></tr>
                    :
                    cart.map((item) => (
                        <tr>
                            <th className='image-container'><img style={{width:'50%'}} src={'https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG'} alt="card cap" /></th>
                            <th className='name'>{item.name}</th>
                            <th className='quantity'> 
                            <input
                            type="number"
                            min="1" max="100"
                            name='quantity_out'
                            value={quantity_out}
                            onChange={(e) => onChange(e, item.id)}
                            required
                    />
                    </th>
                            <th className='price'>${item.price}</th>
                            <th className='remove-button'> <button onClick={() => deleteItem(item)}>&#10005;</button></th>
                        </tr>
                    ))
            }
        </tbody>
        <div>
        <div className='total'>
                    <span>Total: ${total}</span>
                </div>
                <div className='total'>
                    <Link to='/checkout_step_two'>
                        <button className='btn text-center' 
                        style={{ background: '#2D624D', border: 'solid #2D624D', borderRadius: '5px 5px 5px 5px', 
                        color: '#fcf9f3', fontSize: '20px' }} 
                        onClick={onClick}>
                        <span className='mr-1'>Pagar con</span> 
                        <BsCreditCard style={{ fontSize: '28px', marginBottom: '2px' }} />
                        </button>
                    </Link>
                </div>
                </div>
</div>

    )
}

export default CheckoutItem;
