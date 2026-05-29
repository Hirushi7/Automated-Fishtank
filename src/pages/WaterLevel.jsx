import "../styles/globals.css";

export default function WaterLevel() {
  return (
    <div className="container">
      <h1>Water Level Sensor</h1>
      <div className="card">
        {/* Current water level */}
        <p>Current: 85% Full</p>
        {/* Alert message */}
        <p style={{ color: "red" }}>⚠ Low water level detected!</p>
      </div>
    </div>
  );
}
