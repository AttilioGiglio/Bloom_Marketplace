import React from 'react'
import {ChatContext} from './context/chat_provider' 
import Navbar from './components/navbar'
import Chat from './components/chat'

const ChatApp = () => {

    const {usuario} = React.useContext(ChatContext)

    return usuario !== null ? (
        <div>
            <Navbar />
            {
                usuario.estado ? (
                    <Chat />
                ) : (
                    <div 
                        className='lead text-center mt-5'
                    >
                        Debes iniciar sesión
                    </div>
                )
            }
        </div>
    ) : (
        <div>Cargando...</div>
    )
}

export default ChatApp
