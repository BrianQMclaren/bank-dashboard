import React from "react";
import * as d3 from "d3";
import data from "../../data/scale";

class LineChart extends React.Component {
  state = {};

  componentDidMount() {
    this.lineGenerator();
  }

  lineGenerator() {
    const line = d3.line().curve(d3.curveCatmullRom.alpha(0.5));
    const points = [
      [40, 80],
      [100, 100],
      [200, 30],
      [300, 40],
      [400, 10],
      [450, 5]
    ];

    const pathData = line(points);

    d3.select("path").attr("d", pathData);

    const canvas = d3
      .select(".canvas")
      .append("svg")
      .attr("width", 450)
      .attr("height", 450);

    const margin = {
      top: 10,
      right: 40,
      bottom: 0,
      left: 40
    };
    const graphWidth = 180 - margin.left - margin.right;
    const graphHeight = 180 - margin.top - margin.bottom;

    const graph = canvas
      .append("g")
      .attr("width", graphWidth)
      .attr("height", graphHeight)
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const xAxisGroup = graph
      .append("g")
      .attr("transform", `translate(0, ${graphHeight})`);
    const yAxisGroup = graph.append("g");
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.graph)])
      .range([graphHeight, 0]);
    const x = d3
      .scaleBand()
      .domain(data.map(item => item.month))
      .range([0, 400])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3
      .axisLeft(y)
      .ticks(5)
      .tickFormat(d => d);

    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

    // Also draw points for reference
    d3.select("svg")
      .selectAll("circle")
      .data(points)
      .enter()
      .append("circle")
      .attr("x", d => x(d.month))
      .attr("y", graphHeight)
      .attr("height", graphHeight - y(data.map(d => d.graph)))
      .attr("cx", d => {
        return d[0];
      })
      .attr("cy", d => {
        return d[1];
      })
      .attr("r", 3);
  }

  render() {
    const width = 475;
    const height = 200;
    return (
      <svg className="canvas" width={width} height={height}>
        <path className="line-chart" />
      </svg>
    );
  }
}

export default LineChart;
