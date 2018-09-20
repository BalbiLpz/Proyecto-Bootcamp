import React, { Component } from 'react';
import '../../css/App.css';
import axios from 'axios';
import Usuario from './Usuario';
import Header from '../Header';

class PerfilUsuario extends Component {

    componentDidMount() {
        this.mostrarDatos()
    }

    state = {
        usuario: {}
    }

    async mostrarDatos() {

        const token = localStorage.getItem('token');
        console.log(token)


        await axios.get('http://localhost:3000/usuario/add/data',
            {
                params:
                    { token: token }
            })
            .then((response) => {
                let usuario = response.data[0]
                this.setState({
                    usuario: usuario
                })
                console.log(this.state.usuario)
            })
            .catch(function (error) {
                // handle error
                console.log('error al cargar usuario' + error);
            })
    }


    borrarDatos = () => {
        const token = localStorage.getItem('token');
        console.log(token)
        axios.post('http://localhost:3000/usuario/delete',
            { token: token })
            .then((response) => {
                let usuario = response.data[0]
                this.setState({
                    usuario: usuario
                })
                console.log(this.state.usuario)
            })
            .catch(function (error) {
                // handle error
                console.log('error al borrar usuario' + error);
            })
    }

    actualizarDatos = () => {
        axios.post('http://localhost:3000/usuario/modificar')
            .then((response) => {
                console.log(response.data.nombre)
                const nombre = response.data.nombre;
                console.log(nombre)
                this.setState({
                    usuario: { nombre: nombre }
                })
                localStorage.clear('token');
                console.log('nombre de usuario' + this.state.usuario.nombre)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    render() {
        return (
            <div className="App container">
                <Header
                    titulo="Tus datos"
                />
                <div className="container contenido-principal">

                    <Usuario
                        usuario={this.state.usuario}
                    />
                    <div className="row">
                        <div className="one-half column">
                            <a href="/FormularioInicio"><input onClick={this.actualizarDatos} className="button-primary u-full-width" type="submit" value="Eliminar Cuenta" /></a>
                        </div>

                        <div className="one-half column">
                            <a href="/Index"><input className="button u-full-width" type="submit" value="Volver" /></a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default PerfilUsuario;