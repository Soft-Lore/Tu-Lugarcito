import React from 'react'

export default function FormContact () {
    return (
        <div className="container-form">
            <h4 className="title-form">CONTACTANOS</h4>
            <h5 className="subtitle-form">TE RESPONDEREMOS CON GUSTO</h5>
            <form className="form">
                <div className="form-item">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-input"/>
                </div>
                <div className="form-item">
                    <label className="form-label">Correo electrónico</label>
                    <input type="text" className="form-input"/>
                </div>
                <div className="form-item">
                    <label className="form-label">País</label>
                    <input type="text" className="form-input"/>
                </div>
                <div className="form-item">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-input"/>
                </div>
                <label className="form-label__message">Mensaje</label>
                <textarea className="form-input__message"></textarea>
                <button className="form-button__send">Enviar</button>
            </form>
        </div>
    )
}