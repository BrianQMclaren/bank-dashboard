import React from "react";
import * as d3 from "d3";

const width = 300;
const height = 200;

class DonutChart extends React.Component {
  state = {};

  componentDidMount() {
    this.donutChart();
  }

  donutChart() {
    const data = [4, 4, 6, 10];
    let formatPercent = d3.format(".0%"),
      progress = 0,
      allocated = 200000,
      total = 420000;

    const svg = d3.selectAll(".svg"),
      width = svg.attr("width"),
      height = svg.attr("height"),
      radius = Math.min(width, height) / 2,
      g = svg
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const color = d3.scaleOrdinal(["#6AD2E6", "#5de61e", "#eb4888", "#922786"]);
    const pie = d3.pie();
    const arc = d3
      .arc()
      .innerRadius(95)
      .outerRadius(radius);

    const arcs = g
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    const i = d3.interpolate(progress, allocated / total);

    const percentage = arcs
      .append("text")
      .attr("text-anchor", "middle")
      .attr("class", "percentage-complete")
      .attr("dy", ".3em");

    d3.transition()
      .duration(1000)
      .tween("progress", () => {
        return t => {
          progress = i(t);
          percentage.text(formatPercent(progress));
        };
      });

    arcs
      .append("path")
      .attr("fill", (d, i) => {
        return color(i);
      })
      .attr("d", arc);
  }

  render() {
    return <svg className="svg" width={width} height={height} />;
  }
}

export default DonutChart;
