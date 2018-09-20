import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../index';


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
            
        }
    }

    render() { 
        return ( 
            <div className="chart">
                <Pie
                    data={this.state.chartData}
                    />
                <Line 
                    data={this.state.chartData}
                />   
                <Bar  
                    data={this.state.chartData}
                /> 
            </div>
         );
    }
}
 
export default Chart;