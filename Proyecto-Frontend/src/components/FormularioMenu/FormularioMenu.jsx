import React, { Component } from 'react';



class FormularioMenu extends Component {

    //Refs
    nombreMenu = React.createRef();
    cantidadGrasas = React.createRef();
    cantidadProteinas = React.createRef();
    cantidadCarbohidratos = React.createRef();
    cliente = React.createRef();
    fechaInicio = React.createRef();
    fechaFin = React.createRef();

    crearMenu = (e) => {
        //Prevenir el default       
        e.preventDefault();

        //Coger el token de localStorage y meterlo en el objeto menu
        const token = localStorage.getItem('token');

        //Crear el objeto
        const menu = {
            nombreMenu: this.nombreMenu.current.value,
            cantidadGrasas: this.cantidadGrasas.current.value,
            cantidadProteinas: this.cantidadProteinas.current.value,
            cantidadCarbohidratos: this.cantidadCarbohidratos.current.value,
            cliente: this.cliente.current.value,
            fechaInicio: this.fechaInicio.current.value,
            fechaFin: this.fechaFin.current.value,
            token: token
        } 
        
        //Agregarlo y enviarlo por props
        this.props.agregarMenu(menu)
        
        
        //Borrar el Formulario
        e.currentTarget.reset();

        console.log(menu)
        
    
    }

    
    render() { 
        return ( 
            <form onSubmit={this.crearMenu}>
                <h2>Calcula tu menú</h2>
                <div className="campo">
                    <label>Nombre de la Comida</label>
                    <input ref={this.nombreMenu} className="u-full-width" type="text" placeholder="Ej. Desayuno..." />
                </div>
                <div className="campo">
                    <label>Nombre del Cliente</label>
                    <input ref={this.cliente} className="u-full-width" type="text" placeholder="Ej. Nombre..." />
                </div>
                <div className="campo">
                    <label>Grasas</label>
                    <input ref={this.cantidadGrasas} className="u-full-width" type="text" placeholder="Grasas..." />
                </div>
                <div className="campo">
                    <label>Proteínas</label>
                    <input ref={this.cantidadProteinas} className="u-full-width" type="text" placeholder="Proteinas..." />
                </div>                
                <div className="campo">
                    <label>Carbohidratos</label>
                    <input ref={this.cantidadCarbohidratos} className="u-full-width" type="text" placeholder="Carbohidratos..." />
                </div>
                <div className="campo ">
                    <div className="campo one-half column">
                        <label>Fecha Inicio</label>
                        <input ref={this.fechaInicio} className="u-full-width" type="date" placeholder="Ej. Desayuno..." />
                    </div>
                    <div className="campo one-half column">
                        <label>Fecha Fin</label>
                        <input ref={this.fechaFin} className="u-full-width" type="date" placeholder="Ej. Desayuno..." />
                    </div>
                </div>
                
                <div className="row">
                    <div className="one-half column">
                    <input className="button-primary u-full-width" type="submit" value="Agregar" />
                    </div>
                    <div className="one-half column">
                    <a href="/Index"><input className="button u-full-width" type="button" value="Volver" /></a>
                    </div>
                </div>
            </form>
                
         );
    }
}
 
export default FormularioMenu;