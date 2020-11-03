import React, { useState, useContext } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import AlertContext from '../../../context/alert/alert_context';
import {RegionYComunas} from './regionycomunas'
import { Context } from '../../../store/context'
import { useParams } from 'react-router-dom';

const FormProfile = () => {
    const { id } = useParams();

    const data = RegionYComunas
    
    const { alert, showAlert } = useContext(AlertContext);

    const { actions } = useContext(Context)

    const [formProfile, setFormProfile] = useState({
        business_legal_name: '',
        business_id: '',
        card_name: '',
        card_number: '',
        cvv: '',
        date: '',
        address: '',
        comuna: '',
        region: ''
    })

    const { /*username, email,*/ business_legal_name, business_id,
        card_name, card_number, cvv, date, address, comuna, region } = formProfile;

    const onChange = (e) => {
        let value = e.target.value;
        (e.target.name === 'cvv' || e.target.name === 'card_number' )&&(value = parseInt(value))
        setFormProfile({ ...formProfile, [e.target.name]: value })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        // validacion de campos vacios
        if (business_legal_name.trim() === '' || business_id.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alert-error')
        }
        // pasarlo al action del context
        actions.postPutFullInfoSupplier(id, formProfile);

        actions.getAllinfo(id);

        setFormProfile({
            business_legal_name: "",
            business_id: "",
            card_name: "",
            card_number: "",
            cvv: "",
            date: "",
            address: "",
            comuna: "",
            region: ""
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='card p-4' style={{ margin: '50px auto 0', width: '80%', minHeight: '40vh' }} autoComplete='off'>
                {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
                <fieldset>
                    <legend>Datos de facturación</legend>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Razon Social</label>
                            <input
                                type="text"
                                className="form-control"
                                name='business_legal_name'
                                value={business_legal_name}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Rut empresa</label>
                            <input
                                type="text"
                                className="form-control"
                                name='business_id'
                                autoComplete='off'
                                value={business_id}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label>Domicilio</label>
                            <input
                                type="text"
                                className="form-control"
                                name='address'
                                value={address}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Region</label>
                            <select 
                            className="custom-select" 
                            onChange={onChange} 
                            name='region' 
                            value={region} 
                            required
                            >
                                <option defaultValue={'DEFAULT'} >Selecciona...</option>
                                {data.map(region => <option key={region.id}>{region.NombreRegion}</option>)}
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Comuna</label>
                            <select 
                            className="custom-select" 
                            onChange={onChange} 
                            name='comuna' 
                            value={comuna}
                            required
                            >
                                <option defaultValue={'DEFAULT'} >Selecciona...</option>
                                {data.map((item) => (item.NombreRegion === region) ? item.comunas.map((element, index) => <option key={index} value={element} id={element}>{element}</option>) : null)}
                                <option>...</option>
                            </select>
                        </div>

                    </div>
                </fieldset>
                <fieldset>
                    <legend>Tarjeta de pago</legend>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Nombre titular</label>
                            <input
                                type="text"
                                className="form-control"
                                name='card_name'
                                value={card_name}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Numero de tarjeta</label>
                            <input
                                type="password"
                                className="form-control"
                                name='card_number'
                                value={card_number}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault04">CVV</label>
                            <input
                                type="password"
                                className="form-control"
                                name='cvv'
                                value={cvv}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Fecha de expiración</label>
                            <input
                                type="date"
                                className="form-control"
                                name='date'
                                value={date}
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>
                </fieldset>
                <button className="btn mt-3" style={{ width: '15%', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }} type="submit">Editar <AiOutlineEdit className='mb-1' style={{ fontSize: '21px' }} /></button>
            </form>
        </div>
    )
}

export default FormProfile
