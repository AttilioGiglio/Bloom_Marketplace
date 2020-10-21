import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const FormProfile = () => {
    return (
        <div>
            <form className='card p-4' style={{ margin: '50px auto 0', width: '80%', minHeight: '40vh' }}>
                <fieldset>
                    <legend>Datos de cuenta</legend>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="validationDefault01">Nombre de usuario</label>
                            <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="validationDefault01">Correo</label>
                            <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Datos de facturación</legend>
                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                            <label for="validationDefault03">Razon Social</label>
                            <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationDefault03">Rut empresa</label>
                            <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationDefault03">Domicilio</label>
                            <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Tarjeta de pago</legend>
                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                            <label for="validationDefault04">Nombre titular</label>
                            <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationDefault04">Numero de tarjeta</label>
                            <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationDefault04">CVV</label>
                            <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationDefault04">Fecha de expiración</label>
                            <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
                        </div>
                    </div>
                </fieldset>
                <button className="btn mt-3" style={{ width: '15%', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }} type="submit">Editar <AiOutlineEdit className='mb-1' style={{fontSize: '21px'}}/></button>
            </form>
        </div>
    )
}

export default FormProfile
