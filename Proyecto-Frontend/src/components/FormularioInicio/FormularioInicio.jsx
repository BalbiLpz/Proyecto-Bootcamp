import React, { Component } from 'react';
import '../../css/App.css';
import Header from '../Header';
import './CardOne.css';
import Inicio from './Inicio';

class FormularioInicio extends Component {

    
    //Refs
    
    nombreUsuario = React.createRef();
    apellidosUsuario = React.createRef();
    contraseniaUsuario = React.createRef();
    emailUsuario = React.createRef();


    crearUsuario = (e) => {
        e.preventDefault();

        //Crear el objeto
        const usuario = {
            nombreUsuario: this.nombreUsuario.current.value,
            apellidosUsuario: this.apellidosUsuario.current.value,
            contraseniaUsuario: this.contraseniaUsuario.current.value,
            emailUsuario: this.emailUsuario.current.value,
        }
        
        console.log(usuario)


        //Agregarlo por props
        this.props.agregarUsuario(usuario)

        //Resetear el formulario
        e.currentTarget.reset();

    }


    render() {
        return (
            <div className="App container">
                <Header
                    titulo="Crea tu Cuenta"
                />
                <Inicio 
                />
                <div className=" contenido-principal contenido">
                    <div className="row">
                        <div className="one-half column">
                            <form onSubmit={this.crearUsuario}>
                                <h2>Crea tu Cuenta</h2>
                                <div className="campo">
                                    <label>Nombre</label>
                                    <input ref={this.nombreUsuario} className="u-full-width" type="text" placeholder="Nombre..." />
                                </div>
                                <div className="campo">
                                    <label>Apellidos</label>
                                    <input ref={this.apellidosUsuario} className="u-full-width" type="text" placeholder="Apellidos..." />
                                </div>

                                <div className="campo">
                                    <label>Email</label>
                                    <input ref={this.emailUsuario} className="u-full-width" type="text" placeholder="Email..." />
                                </div>
                                <div className="campo">
                                    <label>Contraseña</label>
                                    <input ref={this.contraseniaUsuario} className="u-full-width" type="password" placeholder="Contraseña..." />
                                </div>
                                <input className="button-primary u-full-width" type="submit" value="Agregar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormularioInicio;