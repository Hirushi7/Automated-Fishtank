import "../styles/globals.css";

export default function Temperature() {
  return (
    <div className="container">
      <h1>Temperature Sensor</h1>
      <div className="card">
        {/* Current reading */}
        <p>Current: 25℃</p>
        {/* Safe range info */}
        <p style={{ color: "green" }}>Safe Range: 24 - 27℃</p>
      </div>
    </div>
  );
}
