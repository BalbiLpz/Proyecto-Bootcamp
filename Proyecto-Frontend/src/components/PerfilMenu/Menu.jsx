import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Pie from 'react-chartjs-2';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';

class Menu extends Component {

    state = {
        chartData: {}
    }


    getChartData = (grasas, proteinas, carbohidratos) => {
        this.setState({
            chartData: {
                title: '',
                labels: ['Grasas', 'Proteinas', 'Carbohidratos'],
                datasets: [
                    {
                        label: 'Tiempo de quema',
                        data: [
                            grasas,
                            proteinas,
                            carbohidratos
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(245, 49, 192, 0.6)',
                            'rgba(29, 92, 172, 0.6)'
                        ]
                    }
                ]
            }
        })
    }
    


    render() {

        const { menu, borrarMenus } = this.props;

        const styles = {
            textAlign: "center"

        }
        return (
            <div>
                <div className="contenido-principal">
                    <Table striped responsive hover>
                        <thead style={styles}>
                            <tr>
                                <th>Nombre</th>
                                <th>Comida</th>
                                <th>Inicio</th>
                                <th>Final</th>
                                <th>Proteínas</th>
                                <th>Grasas</th>
                                <th>Carbohidratos</th>
                            </tr>
                        </thead>
                        <tbody >
                            {menu.map((menu, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={styles}>{menu.cliente}</td>
                                        <td style={styles}>{menu.nombre_menu}</td>
                                        <td style={styles}>{new Date(menu.fecha_inicio).toLocaleDateString('es-ES')}</td>
                                        <td style={styles}>{new Date(menu.fecha_fin).toLocaleDateString('es-ES')}</td>
                                        <td style={styles}>{menu.proteinas}</td>
                                        <td style={styles}>{menu.grasas}</td>
                                        <td style={styles}>{menu.carbohidratos}</td>
                                        <td onClick={() => { this.getChartData(menu.proteinas, menu.carbohidratos, menu.grasas) }}><FontAwesome name="chart-pie" /></td>
                                        <td onClick={() => { borrarMenus(menu.id_menu) }}><FontAwesome name="trash-alt" /></td>
                                    </tr>)
                            })}
                        </tbody>
                    </Table>
                </div>
                <div className="contenido-principal container">
                    <Pie
                        data={this.state.chartData}
                    />
                </div>
            </div>

        )

    }
}


export default Menu;