import React from "react";
import * as d3 from "d3";

class LineChart extends React.Component {
  state = {};

  componentDidMount() {
    this.lineGenerator();
  }

  lineGenerator() {
    const line = d3.line().curve(d3.curveCatmullRom.alpha(0.5));
    const points = [[10, 80], [100, 100], [200, 30], [300, 40], [400, 10]];
    const data = [0, 2000, 4000, 6000, 8000];
    const pathData = line(points);

    d3.select("path").attr("d", pathData);

    var x = d3
      .scaleLinear()
      .domain([0, 100])
      .range([100, 800]);

    // Also draw points for reference
    const graph = d3
      .select("svg")
      .selectAll("circle")
      .data(points)
      .enter()
      .append("circle")
      .call(d3.axisBottom(x))
      .attr("cx", d => {
        return d[0];
      })
      .attr("cy", d => {
        return d[1];
      })
      .attr("r", 3);
  }

  render() {
    const width = 450;
    const height = 150;
    return (
      <svg width={width} height={height}>
        <path className="line-chart" />
      </svg>
    );
  }
}

export default LineChart;
