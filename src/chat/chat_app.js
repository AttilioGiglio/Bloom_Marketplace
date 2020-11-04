import React from 'react'
import {ChatContext} from './context/chat_provider' 
import Navbar from './components/navbar'
import Chat from './components/chat'
import { RiEmotionHappyLine } from 'react-icons/ri'

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
                        Debes iniciar sesión con gmail ! <div className='mb-5' style={{fontSize:'35px'}}> <RiEmotionHappyLine /> </div>
                    </div>
                )
            }
        </div>
    ) : (
        <div>Cargando...</div>
    )
}

export default ChatApp
