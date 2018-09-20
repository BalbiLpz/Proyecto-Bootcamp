import React, { Component } from 'react'
import '../../css/App.css';
import './IndexPag.css'
import Header from '../Header';

class IndexPag extends Component {

    LogOut(){
        localStorage.clear('token');
    }



    render() {
        return (
            <div className="container">
                <Header
                    titulo="Tu espacio de trabajo"
                /><br></br><br></br>
                <div className=" contenido-principal contenido element-animation">
                    <div className="row">
                        <div className="one-half column">
                        <a href="/PerfilUsuario"><div className="contenido cajas">
                                <h2>Tus Datos</h2>
                            </div></a>
                        </div>
                        <div className="one-half column">
                            <a href="/PerfilMenu"><div className="contenido cajas">
                                <h2>Tus Menús</h2>
                            </div></a>
                        </div>
                    </div>
                </div>
                
                <div className=" contenido-principal contenido element-animation">
                    <div className="row">
                        <div className="one-half column">
                        <a href="/IndexMenu"><div className="contenido cajas">
                                <h2>Crear Menú</h2>
                            </div></a>
                        </div>
                        <div className="one-half column">
                        <a onClick={this.LogOut} href="/Login"><div className="contenido cajas">
                                <h2>Logout</h2>
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPag;