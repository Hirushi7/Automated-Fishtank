// src/components/Card.jsx
export default function Card({ icon, title, value, color }) {
  return (
    <div className={`card ${color}`}>
      <span className="card-icon">{icon}</span>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-value">{value}</p>
      </div>
    </div>
  );
}
