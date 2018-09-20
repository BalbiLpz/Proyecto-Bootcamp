import React, { Component } from 'react';
import Header from '../Header';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class TituloUsuario extends Component {

    state = {
        token: ""
    }

    contraseniaUsuario = React.createRef();
    emailUsuario = React.createRef();


    login = (e) => {

        let email = this.emailUsuario.current.value;
        let password = this.contraseniaUsuario.current.value
        axios.post('http://localhost:3000/Login/user', {
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response.data)
                localStorage.setItem(
                    'token',
                    JSON.stringify(response.data.token)
                )
            })
            .then(() => {
                this.setState({
                    token: token
                })
                console.log(token)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


        const token = localStorage.getItem('token');
        console.log(token)




    }


    render() {
        return (
            <div className="App container">
                {this.state.token ? (<Redirect to="/Index" />) : (
                    <div>
                        <Header
                            titulo="Accede a tu cuenta"
                        />
                        <div className="contenido-principal contenido">
                            <div className="row">
                                <div>
                                    <h2 className="border">
                                        Bienvenido {this.props.nombreUsuario}
                                    </h2>
                                    <br></br>
                                    <form>
                                        <div className="campo">
                                            <label>Email</label>
                                            <input ref={this.emailUsuario} className="u-full-width" type="text" placeholder="Email..." />
                                        </div>
                                        <div className="campo">
                                            <label>Contraseña</label>
                                            <input ref={this.contraseniaUsuario} className="u-full-width" type="password" placeholder="Contraseña..." />
                                        </div>
                                        <input onClick={this.login} className="button-danger u-full-width" type="button" value="Entrar" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
export default TituloUsuario;