import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const FormProfile = () => {
    return (
        <div>
            <form className='card p-4' style={{ margin: '50px auto 0', width: '80%', minHeight: '50vh' }}>
                <fieldset>
                    <legend>Datos de cuenta</legend>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validationDefault01">Nombre de usuario</label>
                            <input type="text" class="form-control" id="validationDefault01" value="Mark" required />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="validationDefault01">Correo</label>
                            <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Datos personales</legend>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validationDefault02">Nombre y apellido</label>
                            <input type="text" class="form-control" id="validationDefault01" value="Mark" required />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="validationDefault02">Rut</label>
                            <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validationDefault02">Telefono</label>
                            <input type="text" class="form-control" id="validationDefault01" value="Mark" required />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="validationDefault02">Domicilio</label>
                            <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Datos de facturación</legend>
                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                            <label for="validationDefault03">Razon Social</label>
                            <input type="text" class="form-control" id="validationDefault01" value="Mark" required />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationDefault03">Rut empresa</label>
                            <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationDefault03">Domicilio</label>
                            <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Tarjeta de pago</legend>
                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                            <label for="validationDefault04">Nombre titular</label>
                            <input type="text" class="form-control" id="validationDefault01" value="Mark" required />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationDefault04">Numero de tarjeta</label>
                            <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationDefault04">CVV</label>
                            <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationDefault04">Fecha de expiración</label>
                            <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                    </div>
                </fieldset>
                <button class="btn mt-3" style={{ width: '15%', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }} type="submit">Editar <AiOutlineEdit className='mb-1' style={{fontSize: '21px'}}/></button>
            </form>
        </div>
    )
}

export default FormProfile
