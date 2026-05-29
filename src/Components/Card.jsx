export default function Card({ icon, title, value, color }) {
  return (
    <div className={`card ${color}`}>
      <span className="card-icon">{icon}</span>   {/* bigger icon on the left */}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-value">{value}</p>     {/* value below title */}
      </div>
    </div>
  );
}
