import React from 'react'

const FormProfile = () => {
    return (
        <div>
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
                <div class="form-row">
                    <div class="col-md-12 mb-3">
                        <label for="validationDefault03">Descripción</label>
                        <input type="text" class="form-control" id="validationDefault03" required />
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Imagen de tu producto</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" required />
                    </div>
                </div>
                <button class="btn" style={{ width: '15%', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }} type="submit">Submit form</button>
            </form>
        </div>
    )
}

export default FormProfile
