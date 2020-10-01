import React, {useState} from 'react';
import{ SiMinutemailer } from 'react-icons/si';
import {db} from '../assets/other/firebase';

const ContactForm = () => {

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[message,setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    db.collection('contacts').add({
      name:name,
      email:email,
      message:message
    })
    .then(() => {
      alert(`Mensaje ya fue enviado. Te contactaremos lo antes posible.`);
    })
    .catch((err) => {
      alert(err.message);
    });
    setName("");
    setEmail("");
    setMessage("");
  }

    return (
    <form onSubmit={submitForm}>
  <div className="form-group">
    <h4 className='pb-1'>Contactanos</h4> 
    <SiMinutemailer/> <label>Nombre:</label>
    <input 
    type="text" 
    value={name}
    className="form-control" 
    placeholder="Ingresa tu nombre"
    onChange = {(e) => setName(e.target.value)}
    />
  </div>
  <div className="form-group">
  <SiMinutemailer/> <label>Correo:</label>
    <input 
    value={email}
    type="email" 
    className="form-control" 
    placeholder="Ingresa tu correo" 
    onChange = {(e) => setEmail(e.target.value)}
    />
  </div>
  <button 
  type="submit" 
  value={message}
  className="btn btn-primary" 
  style={{background:"#fcf9f3", borderColor: '#224229', color:'#224229'}}
  onChange = {(e) => setMessage(e.target.value)}
  >Enviar</button>
</form>

    )
}

export default ContactForm
