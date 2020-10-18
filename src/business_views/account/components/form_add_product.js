import React, { useContext } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io'
import {Context} from '../../../store/context'

const FormAddProduct = () => {

    const {store, actions} = useContext(Context)
   
    return (
        <form 
        className='card p-4' 
        style={{ margin: '50px auto 0', width: '80%', minHeight: '50vh' }}
        onSubmit={(e) => actions.addProduct(e)}
        >
            <div className="form-row">
                <div className="col-md-3 mb-3">
                    <label>Categoria</label>
                    <select 
                    className="custom-select" 
                    required
                    name={store.category}
                    value={store.category} 
                    onChange={(e) => actions.handleChange_AddProduct(e)}
                    >
                        <option value="selected" disabled>Selecciona</option>
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
                        name={store.name}
                        value={store.name} 
                        onChange={(e) => actions.handleChange_AddProduct(e)}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <label>Cantidad</label>
                    <input
                        type="number"
                        className="form-control"
                        min="1" max="100"
                        required
                        name={store.quantity}
                        value={store.quantity} 
                        onChange={(e) => actions.handleChange_AddProduct(e)}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <label>Precio</label>
                    <input
                        type="text"
                        className="form-control"
                        name={store.price}
                        value={store.price} 
                        onChange={(e) => actions.handleChange_AddProduct(e)}
                        required />
                </div>
            </div>
            <div className="form-group">
                <label>Decripción</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name={store.description}
                    value={store.description} 
                    onChange={(e) => actions.handleChange_AddProduct(e)}
                ></textarea>
            </div>
            <div className="form-group">
                <label>Imagen de tu producto</label>
                <input
                    type="file"
                    className="form-control-file"
                    name={store.img}
                    value={store.img}
                    onChange={(e) => actions.handleChange_AddProduct(e)}
                    required
                />
            </div>
            <button type="submit" className="btn mt-3" style={{ width: '15%', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }} >Agregar <IoMdAddCircleOutline style={{ color: '#fcf9f3', fontSize: '20px' }} /></button>
        </form>
    )
}

export default FormAddProduct
