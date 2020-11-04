import React from 'react'

import {ChatContext} from '../context/chat_provider'

const Agregar = () => {

    const {agregarMensajes, usuario} = React.useContext(ChatContext)
    const [mensaje, setMensaje] = React.useState('')

    const agregar = (e) => {
        e.preventDefault()
        if(!mensaje.trim()){
            console.log('viene vacio')
            return
        }
        agregarMensajes(usuario.uid, mensaje)
        setMensaje('')
    }

    return (
        <form 
            className='fixed-bottom input-group p-3'
            style={{background:'#2D624D'}}
            onSubmit={agregar}
        >
            <input 
                type="text"
                className='form-control'
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
            />
            <div className='input-group-append'>
                <button
                    style={{background:'#6c63ff', border:'solid #6c63ff', borderRadius: '5px 5px 5px 5px', color:'#fcf9f3', fontSize:'15px' }}
                    type='submit'
                >
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default Agregar
