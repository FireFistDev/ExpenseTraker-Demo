import "./Chart.css";
import ChartBar from "./ChartBarf";
import react  from "react";

const Chart = function (props) {
    const dataPointValues = props.dataPoints.map(datePoint => datePoint.value)
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={totalMaximum}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
