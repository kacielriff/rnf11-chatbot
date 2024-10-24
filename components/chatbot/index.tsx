"use client";

import { useState } from "react";
import { MdChatBubble, MdClose, MdSend } from "react-icons/md";
import "./styles.css";

export interface ChatbotProps {}

export default function Chatbot({}: ChatbotProps) {
    const [isActive, setIsActive] = useState<boolean>(false);

    const toggleActive = () => setIsActive((prevValue) => !prevValue);

    return (
        <>
            {isActive && 
                <div className="dbc-chatbot-container">
                    <div className="dbc-chatbot-head">
                        <img
                            src="https://img.freepik.com/vetores-gratis/chatbot-mensagem-vectorart_78370-4104.jpg?semt=ais_hybrid"
                            alt="Ícone do Chatbot"
                            className="dbc-chatbot-head-icon"
                        />
                        <p className="dbc-chatbot-head-title">Title</p>
                    </div>
                    <div className="dbc-chatbot-body">
                        <div className="dbc-chatbot-body-message">
                            Olá! Eu sou o DBCBot, seu assistente virtual da DBC Company!
                        </div>
                        <div className="dbc-chatbot-body-message">
                            Pronto para começar? Digite algo e vamos lá! 🚀
                        </div>
                        <div className="dbc-chatbot-body-user">
                            Olá, meu nome é John Doe e estou testando a mensagem do lado do cliente.
                        </div>
                        <div className="dbc-chatbot-body-error">
                            Houve um erro ao processar sua solicitação. Tente novamente mais tarde!
                        </div>
                    </div>
                    <div className="dbc-chatbot-body-tf-container">
                        <input type="text" className="dbc-chatbot-body-tf" placeholder="Escreva algo..." required/>
                        <button type="submit" className="dbc-chatbot-body-button">
                            <MdSend className="dbc-chatbot-body-icon"/>
                        </button>
                    </div>
                </div>
            }
            
            {/* floating button */}
            <button
                className="dbc-chatbot-floating-button"
                onClick={toggleActive}
                aria-label="Botão de chatbot"
            >
                {isActive ? (
                    <MdClose className="dbc-chatbot-floating-button-icon" aria-label="Ícone de abrir chatbot"/>
                ) : (
                    <MdChatBubble className="dbc-chatbot-floating-button-icon" aria-label="Ícone de fechar chatbot"/>
                )}
            </button>
        </>
    );
}
