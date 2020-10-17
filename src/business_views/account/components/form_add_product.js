import React, { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io'

const FormAddProduct = () => {

    const [product, setProduct] = useState({
        category: '',
        name: '',
        quantity: 0,
        price: 0,
        description: '',
        image: ''
    } )

    const { name, quantity, price, description, image} = product;

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }

    return (
        <form className='card p-4' style={{ margin: '50px auto 0', width: '80%', minHeight: '50vh' }}>
            <div className="form-row">
                <div className="col-md-3 mb-3">
                    <label>Categoria</label>
                    <input 
                    type="text" 
                    className="form-control"
                    onChange={handleChange}
                    required />
                </div>
                <div className="col-md-3 mb-3">
                    <label>Nombre Producto</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    required
                    onChange={handleChange}
                     />
                </div>
                <div className="col-md-3 mb-3">
                    <label>Cantidad</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    required 
                    onChange={handleChange}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <label>Precio</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    onChange={handleChange}
                    required />
                </div>
            </div>
            <div className="form-group">
                <label>Decripción</label>
                <textarea 
                className="form-control"
                id="exampleFormControlTextarea1" 
                rows="3"
                onChange={handleChange}
                ></textarea>
            </div>
            <div className="form-group">
                <label>Imagen de tu producto</label>
                <input 
                type="file" 
                className="form-control-file"
                value={image}
                onChange={handleChange}
                required 
                />
            </div>
            <button className="btn mt-3" style={{ width: '15%', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }} type="submit">Agregar <IoMdAddCircleOutline style={{ color: '#fcf9f3', fontSize: '20px' }} /></button>
        </form>
    )
}

export default FormAddProduct
