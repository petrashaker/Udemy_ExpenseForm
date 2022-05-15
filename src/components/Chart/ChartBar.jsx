import "./ChartBar.css"

const ChartBar = ({ label, value, maxValue }) => {
    let barFillHeigt;
    if(maxValue > 0) {
        barFillHeigt = Math.round(value / maxValue * 100) + "%";
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFillHeigt }}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    )
}

export default ChartBar;