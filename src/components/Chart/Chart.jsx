import "./Chart.css"
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
    const valueArray = dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...valueArray);

    return (
        <div className="chart">
            {dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                />
            )}
        </div>
    )
}

export default Chart;