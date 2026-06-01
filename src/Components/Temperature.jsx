// src/components/Temperature.jsx
import "../styles/globals.css";

export default function TemperatureSection({ currentTemp = 25, min = 24, max = 27 }) {
  const isSafe = currentTemp >= min && currentTemp <= max;
  const indicatorWidth = ((currentTemp - min) / (max - min)) * 100;

  return (
    <div className="temperature-section">
      <div className="temperature-left">
        <h2 className="temperature-title">Temperature Sensor</h2>
        <p className="temperature-value">{currentTemp}°C</p>

        <div
          className="temperature-range"
          style={{ width: `${Math.min(indicatorWidth + 10, 100)}%` }}
        >
          Temperature range is: {min}°C - {max}°C
        </div>

        <div
          className={`temperature-status ${isSafe ? "safe" : "unsafe"}`}
          style={{ width: `${indicatorWidth}%` }}
        >
          <span className="temperature-icon">🌡️</span>
          <span>
            {isSafe ? "Temperature is within the safe range." : "Warning: Unsafe temperature!"}
          </span>
        </div>
      </div>

      <div className="temperature-right">
        <div className="temperature-bar">
          <div
            className="temperature-indicator"
            style={{ width: `${indicatorWidth}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
