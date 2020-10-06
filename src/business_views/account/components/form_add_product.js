import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io'

const FormAddProduct = () => {
    return (
        <form className='card p-4' style={{ margin: '50px auto 0', width: '80%', minHeight: '50vh' }}>
            <div class="form-row">
                <div class="col-md-3 mb-3">
                    <label for="validationDefault01">Categoria</label>
                    <input type="text" class="form-control" id="validationDefault01" value="Mark" required />
                </div>
                <div class="col-md-3 mb-3">
                    <label for="validationDefault01">Nombre Producto</label>
                    <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                </div>
                <div class="col-md-3 mb-3">
                    <label for="validationDefault01">Cantidad</label>
                    <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                </div>
                <div class="col-md-3 mb-3">
                    <label for="validationDefault01">Precio</label>
                    <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                </div>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Decripción</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlFile1">Imagen de tu producto</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" required />
            </div>
            <button class="btn mt-3" style={{ width: '15%', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }} type="submit">Agregar <IoMdAddCircleOutline style={{ color: '#fcf9f3', fontSize: '20px' }} /></button>
        </form>
    )
}

export default FormAddProduct
