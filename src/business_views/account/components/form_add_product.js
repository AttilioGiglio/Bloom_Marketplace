import React, { useState, useContext } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Context } from '../../../store/context';
import AlertContext from '../../../context/alert/alert_context';
import '../../../client_views/alert.scss'

const FormAddProduct = () => {

    const {store, actions} = useContext(Context)

    const { alert, showAlert } = useContext(AlertContext);

    const [product, setProduct] = useState({
        name: '',
        quantity: '',
        price: '',
        description: '',
        // img: '',
    })

    const { name, quantity, price, description } = product

    const onChange = (e) => {
        let value = e.target.value;
        setProduct({ ...product, [e.target.name]: value })
    }


    const addProduct = (e) => {
        e.preventDefault();
        // validacion de campos vacios
        if (name.trim() === '' || quantity.trim() === '' || price.trim() === '' || description.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alert-error')
        }
        // validacion password min 6 caracteres
        if (description.length < 30) {
            showAlert('La descripción debe ser al menos de 30 caracteres', 'alert-error')
            return;
        }

        // pasarlo al action del context
        actions.createProduct(product);

        setProduct({
            name: '',
            quantity: '',
            price: '',
            description: '',
        })
    }
    return (
        <form
            className='card p-4'
            style={{ margin: '50px auto 0', width: '80%', minHeight: '50vh' }}
            onSubmit={addProduct}
        >
            <div className="form-row">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
                {/* <div className="col-md-3 mb-3">
                    <label>Categoria</label>
                    <select
                        className="custom-select"
                        required
                        name='category'
                        value={category}
                        onChange={onChange}
                    >
                        <option value="selected" disabled>Selecciona</option>
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                    </select>
                </div> */}
                <div className="col-md-3 mb-3">
                    <label>Nombre Producto</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <label>Cantidad</label>
                    <input
                        type="number"
                        className="form-control"
                        min="1" max="100"
                        required
                        name='quantity'
                        value={quantity}
                        onChange={onChange}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <label>Precio</label>
                    <input
                        type="text"
                        className="form-control"
                        name='price'
                        value={price}
                        onChange={onChange}
                        required />
                </div>
            </div>
            <div className="form-group">
                <label>Decripción</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name='description'
                    value={description}
                    onChange={onChange}
                ></textarea>
            </div>
            {/* <div className="form-group">
                <label>Imagen de tu producto</label>
                <input
                    type="file"
                    className="form-control-file"
                    name='img'
                    value={img}
                    onChange={onChange}
                    required
                />
            </div> */}
            <button type="submit" className="btn mt-3" style={{ width: '15%', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }} >Agregar <IoMdAddCircleOutline style={{ color: '#fcf9f3', fontSize: '20px' }} /></button>
        </form>
    )
}

export default FormAddProduct
