import React, { Component } from 'react';
import '../../css/App.css';
import Header from '../Header';
import FormularioInicio from './FormularioInicio';
import axios from 'axios';
import TituloUsuario from './TituloUsuario';


class IndexUsuario extends Component {

    state = {
        usuario: {
            nombre: ''
        }
    }

    agregarUsuario = usuario => {

        // Make a request for a user with a given ID
        axios.post('http://localhost:3000/usuario/add', usuario)
            .then((response) => {
                console.log(response.data.nombre)
                const nombre = response.data.nombre;
                console.log(nombre)
                this.setState({
                    usuario: { nombre: nombre }
                })
                console.log('nombre de usuario' + this.state.usuario.nombre)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    componentDidMount() {
        console.log('Montado!!!')
    }

    render() {

        return (
            <div className="App container">

                {this.state.usuario.nombre ?
                    <div>
                        <TituloUsuario
                            nombreUsuario={this.state.usuario.nombre}
                            loginUsuario={this.loginUsuario}
                        />
                    </div>
                    : <FormularioInicio
                        agregarUsuario={this.agregarUsuario}
                        login={true}
                    />}

            </div>
        );
    }

}

export default IndexUsuario;