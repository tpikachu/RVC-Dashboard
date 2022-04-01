import React, { useState, useEffect } from "react";
import Card from "#components/Card/Card";
import Chart from "react-apexcharts";
import { barChartData, barChartOptions } from "#variables/charts";

export default function BarChart(props) {
  const [state, setState] = useState({
    chartData: [],
    chartOptions: {},
  });

  useEffect(() => {
    setState({
      chartData: barChartData,
      chartOptions: barChartOptions,
    });
  }, []);

  return (
    <Card
      py="1rem"
      height={{ sm: "200px" }}
      width="100%"
      bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
      position="relative"
    >
      <Chart
        options={state.chartOptions}
        series={state.chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    </Card>
  );
}
