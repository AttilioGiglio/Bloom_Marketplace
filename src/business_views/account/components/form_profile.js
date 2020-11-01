import React, {useState, useContext} from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import AlertContext from '../../../context/alert/alert_context';
import RegionYComunas from './regionycomunas'
import {Context} from '../../../store/context'
import { useParams } from 'react-router-dom';

const FormProfile = () => {
    const {id} = useParams();

    const { alert, showAlert } = useContext(AlertContext);

    const { actions } = useContext(Context)

    const [formProfile, setFormProfile] = useState({
        // username:'',
        // email:'',
        business_legal_name: '', 
        business_id: '',
        card_name: '',
        card_number: 0,
        cvv: 0,
        date: '',
        address: '', 
        comuna: '',
        region: ''
    })

    const { /*username, email,*/ business_legal_name, business_id, 
        card_name, card_number, cvv, date, address, comuna, region} = formProfile;

    const onChange = (e) => { 
        setFormProfile({ ...formProfile, [e.target.name]: e.target.value })
    }

 
    const onSubmit = (e) => {
        e.preventDefault();
        // validacion de campos vacios
        if (business_legal_name.trim() === '' || business_id.trim() === '' || card_name.trim() === ''|| card_number.trim() === '' 
        || cvv.trim() === '' || date.trim() === '' || address.trim() === '' || region.trim() === '' || comuna.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alert-error')
        }

        // pasarlo al action del context
        actions.postPutFullInfoSupplier(formProfile,id);
        
        setFormProfile({
            // username:'',
            // email:'',
            business_legal_name: '', 
            business_id: '',
            card_name: 0,
            card_number: 0,
            cvv: '',
            date: '',
            address: '', 
            region:'',
            comuna:''
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit} className='card p-4' style={{ margin: '50px auto 0', width: '80%', minHeight: '40vh' }}>
            {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
                {/* <fieldset>
                    <legend>Datos de cuenta</legend>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Nombre de usuario</label>
                            <input 
                            type="text"
                            className="form-control" 
                            id="username"
                            name='username'
                            value={username}
                            onChange={onChange}
                            required
                             />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Correo</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="email"
                            name='email'
                            value={email}
                            onChange={onChange}
                            required 
                            />
                        </div>
                    </div>
                </fieldset> */}
                <fieldset>
                    <legend>Datos de facturación</legend>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label>Razon Social</label>
                            <input
                            type="text" 
                            className="form-control" 
                            id="business_legal_name"
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
                            id="business_id"
                            name='business_id'
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
                            id="address"
                            name='address'
                            value={address}
                            onChange={onChange}
                            required
                            />
                            </div>
                            <RegionYComunas onchange={onchange}/>

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
                            id="card_name"
                            name='card_name'
                            value={card_name}
                            onChange={onChange} 
                            required 
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Numero de tarjeta</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="card_number"
                            name='card_number'
                            value={card_number}
                            onChange={onChange} 
                            required 
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault04">CVV</label>
                            <input
                            type="text" 
                            className="form-control" 
                            id="cvv"
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
                            id="date"
                            name='date'
                            value={date}
                            onChange={onChange} 
                            required    
                            />
                        </div>
                    </div>
                </fieldset>
                <button className="btn mt-3" style={{ width: '15%', background: '#479A79', border: 'solid 1px #479A79', borderRadius: '5px 5px 5px 5px', color: '#fcf9f3', fontSize: '20px' }} type="submit">Editar <AiOutlineEdit className='mb-1' style={{fontSize: '21px'}}/></button>
            </form>
        </div>
    )
}

export default FormProfile
