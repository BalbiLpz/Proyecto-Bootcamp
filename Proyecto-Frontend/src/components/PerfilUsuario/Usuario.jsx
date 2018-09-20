import React from 'react';

const Usuario = (props) => {

    const { nombre, apellidos, email } = props.usuario;

    return (
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <div className="contenido">
                        <h2>Nombre:</h2>
                        <h2>Apellidos:</h2>
                        <h2>Correo:</h2>
                    </div>
                </div>
                <div className="one-half column">
                    <div className="contenido">
                        <h2>{nombre}</h2>
                        <h2>{apellidos}</h2>
                        <h2>{email}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usuario;