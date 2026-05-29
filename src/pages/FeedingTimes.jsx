import "../styles/globals.css";

export default function FeedingTimes() {
  return (
    <div className="container">
      <h1>Feeding Schedule</h1>
      <div className="card">
        {/* Feeding details */}
        <p>Last Feeding: 8:00 AM</p>
        <p>Next Feeding: 2:00 PM</p>
        <p>Amount: 15 grams</p>

        {/* Buttons for auto feeding */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button style={{ backgroundColor: "green", color: "white", padding: "8px 12px", border: "none", borderRadius: "4px" }}>
            Auto Feeding ON
          </button>
          <button style={{ backgroundColor: "red", color: "white", padding: "8px 12px", border: "none", borderRadius: "4px" }}>
            Auto Feeding OFF
          </button>
        </div>
      </div>
    </div>
  );
}
