// src/components/WaterLevel.jsx
import "../styles/globals.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function WaterLevelSection({ currentLevel = 85, history = [] }) {
  const isLow = currentLevel < 30;
  const graphData = {
    labels: history.map(h => h.time),
    datasets: [
      {
        label: "Water Level (%)",
        data: history.map(h => h.value),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="water-section">
      <div className="water-top">
        <div className="water-left">
          <h2 className="water-title">Water Level Sensor</h2>
          {/* Divider line */}
  <hr className="water-divider" />
          <p className="water-value">{currentLevel}% Full</p>
        </div>

        <div className="water-right">
          <Line data={graphData} />
        </div>
      </div>

      {/* ✅ Status bar now spans full width below both columns */}
      <div
        className={`water-status ${isLow ? "low" : "safe"}`}
      >
        <span className="water-icon">💧</span>
        <span>{isLow ? "Low water level detected!" : "Water level is stable."}</span>
      </div>
    </div>
  );
}
