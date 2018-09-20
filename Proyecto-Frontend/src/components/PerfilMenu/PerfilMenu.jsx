import React, { Component } from 'react';
import '../../css/App.css';
import axios from 'axios';
import Menu from './Menu';
import Header from '../Header';

class PerfilMenu extends Component {

    componentDidMount() {
        this.mostrarDatosMenu()
    }

    state = {
        menu: []
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(prevState.menu)
        if (prevState.menu === undefined) {
            return {
                menu: []
            };
        }   return null;
    }


    async mostrarDatosMenu() {

        const token = localStorage.getItem('token');
        console.log(token)

        await axios.get('http://localhost:3000/menu/get/data',
            {
                params:
                    { token: token }
            })
            .then((response) => {
                console.log('mostrar response', response)
                let menu = response.data
                this.setState({
                    menu: menu
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    borrarMenus = (id) => {
        axios.post('http://localhost:3000/menu/delete',
            { id: id }
        )
            .then((response) => {
                console.log(' borrar response', response)
                console.log(this.state.menu)
                this.mostrarDatosMenu()
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {

        return (
            <div className="App container">
                <Header
                    titulo="Tus menus"
                />
                <div className="container contenido-principal">
                    <Menu
                        menu={this.state.menu}
                        borrarMenus={this.borrarMenus}
                    />
                    <div className="row">
                        <div>
                            <a href="/Index"><input className="button-secondary u-full-width" type="submit" value="Volver" /></a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PerfilMenu;