import React, { Component } from "react";
import Chart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
      <div className="pie">
        <Chart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="pie"
          width="100%"
          //   height="55%"
        />
      </div>
    );
  }
}

export default PieChart;
