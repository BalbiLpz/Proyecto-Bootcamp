import React, { Component } from 'react';
import '../../css/App.css';
import Header from '../Header';
import FormularioMenu from './FormularioMenu';
import Chart from '../Chart';
import TituloMenu from './TituloMenu';
import axios from 'axios';

class IndexMenu extends Component {

  state = {
    chartData: {},
    mostrarChart: false
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    //Llamada Ajax
    this.setState({
      chartData: {
          title: '',      
          labels: ['Grasas', 'Proteinas', 'Carbohidratos'],
          datasets: [
              {
              label: 'Tiempo de quema',
              data:[
                12,
                15,
                12
              ],
              backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(245, 49, 192, 0.6)',
                  'rgba(29, 92, 172, 0.6)'
              ]
              }
          ]
      }
    })  
  }
  
  agregarMenu = menu => {
    //Copiar el state actual
    const chartData = {...this.state.chartData}
    chartData.datasets[0].data[0] = menu.cantidadGrasas
    chartData.datasets[0].data[1] = menu.cantidadProteinas
    chartData.datasets[0].data[2] = menu.cantidadCarbohidratos
    chartData.title = menu.nombreMenu

    // Make a request for a user with a given ID
    axios.post('http://localhost:3000/menu/add', menu)
    .then((response) => {
        console.log(response.data.menu)
        const nombre = response.data.menu;
        console.log(menu)
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

    //Agregar el menu al objeto del state
    chartData.datasets[`menu${Date.now()}`] = menu;
    console.log('cantidad proteinas: ' + menu.cantidadProteinas)
    console.log(menu.nombreMenu)
    //Ponerlo en el state
    this.setState({
      chartData: chartData,
      mostrarChart: true
    })
  }

  componentDidMount(){
    console.log('Montado!!!')
  }

  componentDidUpdate() {
    const data = {
      datos: this.state.chartData.datasets[0].data,
      nombre: this.state.chartData.title
  }

    localStorage.setItem(
      'chartData',
      JSON.stringify(data)
    )
  }


  render() {
    
    return (
      <div className="App container">
        <Header 
          titulo="Menú"
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="contenido one-half column">
              <FormularioMenu 
              agregarMenu = {this.agregarMenu}
              />
            </div>           
              {this.state.mostrarChart ? <div className="one-half column">
                <TituloMenu
                  nombreMenu = {this.state.chartData.title}
                /> 
                <Chart
                  chartData = {this.state.chartData}
                />
                                 
            </div> : null}

          </div>
        </div>
      </div>
    );
  }
}

export default IndexMenu;