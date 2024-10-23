"use client";

import { useState } from "react";
import { MdChatBubble, MdClose } from "react-icons/md";
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

                    </div>
                </div>
            }
            
            {/* floating button */}
            {/* <div className="dbc-chatbot-floating-container"> */}
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
            {/* </div> */}
        </>
    );
}
