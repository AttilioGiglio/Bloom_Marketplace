import React, { useState, useContext } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Context } from '../../../store/context';
import AlertContext from '../../../context/alert/alert_context';
import '../../../client_views/alert.scss'
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const FormAddProduct = () => {
    
    const {id} = useParams()
    console.log(id)
    const { store, actions } = useContext(Context)

    const { alert, showAlert } = useContext(AlertContext);

    const [product, setProduct] = useState({
        sku_id:'',
        name: '',
        quantity: '',
        price: '',
        description: '',
        category:'',
        img: '',
    })

    const { sku_id, name, quantity, price, description, category, img } = product

    const onChange = (e) => {
        let value = e.target.value;
        setProduct({ ...product, [e.target.name]: value })
    }

    // const names = store.productlist.map(i => i.name == name ? i.name : name)

    const addProduct = (e) => {
        e.preventDefault();
        // validacion de campos vacios
        if (sku_id.trim() === '' || name.trim() === '' || quantity.trim() === '' || price.trim() === '' || description.trim() === '' || category.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alert-error')
        }
        // validacion password min 6 caracteres
        if (description.length < 30) {
            showAlert('La descripción debe ser al menos de 30 caracteres', 'alert-error')
            return;
        }

        // pasarlo al action del context
        actions.createProduct(sku_id, name, quantity, price, description, category, id)

        setProduct({
            sku_id:'',
            name: '',
            quantity: '',
            price: '',
            description: '',
            category:'',
            img: '',
        })
    }

    const onClick = () => {
        const id = uuidv4()
        setProduct({ ...product, ['sku_id']:id})
    }

    return (
        <form
            className='card p-4'
            style={{ margin: '50px auto 0', width: '80%', minHeight: '45vh' }}
            onSubmit={addProduct}
        >
        {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="form-row">
            
                <div className="col-md-3 mb-3">
                    <label>Categoria</label>
                    <select
                        className="custom-select"
                        required
                        name='category'
                        value={category}
                        onChange={onChange}
                    >
                        <option  defaultValue={'DEFAULT'}>Selecciona...</option>
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                    </select>
                </div>
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
            <div className="col-md-5 p-0 mb-3">
            <label>SKU</label>
            <div className='d-flex'>
                    <input
                        type="text"
                        className="form-control"
                        required
                        name='sku_id'
                        value={sku_id}
                        onChange={onChange}
                    />
            <button type="button" className='ml-3' onClick={onClick} style={{ width:'180px', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '14px' }} >Generar SKU AT</button>
                    </div>
                </div>
            <div className="form-group">
            <div className="form-group ">
                <label>Imagen de tu producto</label>
                <input
                    type="file"
                    className="form-control-file"
                    name='img'
                    value={img}
                    onChange={onChange}
                    required
                />
            </div>
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
            <button type="submit" className="btn mt-3" style={{ width: '15%', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }} >Agregar <IoMdAddCircleOutline style={{ color: '#fcf9f3', fontSize: '20px' }} /></button>
        </form>
    )
}

export default FormAddProduct
