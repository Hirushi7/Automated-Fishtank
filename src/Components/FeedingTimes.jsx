// src/components/FeedingTimes.jsx
import "../styles/globals.css";
import { useEffect, useState } from "react";

export default function FeedingTimesSection({
  schedule = ["8:00 AM", "2:00 PM", "8:00 PM"],
  lastFeeding = { time: "4:00 AM", amount: "15g" },
  nextFeeding = "8:00 AM"
}) {
  const [countdown, setCountdown] = useState("00:00:00");

  // Simple countdown simulation (to nextFeeding at today’s time)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const [hour, minute] = nextFeeding.replace(/[^0-9:]/g, "").split(":");
      const ampm = nextFeeding.includes("PM") ? "PM" : "AM";
      let targetHour = parseInt(hour, 10);
      if (ampm === "PM" && targetHour < 12) targetHour += 12;
      if (ampm === "AM" && targetHour === 12) targetHour = 0;

      const target = new Date();
      target.setHours(targetHour, parseInt(minute, 10), 0, 0);

      const diff = target - now;
      if (diff > 0) {
        const h = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
        const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
        const s = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
        setCountdown(`${h}:${m}:${s}`);
      } else {
        setCountdown("00:00:00");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextFeeding]);

  return (
    <div className="feeding-section">
      <h2 className="feeding-title">Feeding Times</h2>
      {/* ✅ Line after feeding items */}
          <hr className="feeding-divider" />
      <div className="feeding-grid">
        <div className="feeding-card">
          <h3>Feeding Schedule</h3>
          <ul>
            {schedule.map((time, i) => (
              <li key={i}>{time}</li>
            ))}
          </ul>
        </div>

        <div className="feeding-card">
          <h3>Last Feeding</h3>
          <p>Time: {lastFeeding.time}</p>
          <p>Amount: {lastFeeding.amount}</p>
        </div>

        <div className="feeding-card">
          <h3>Next Feeding</h3>
          <p>Scheduled: {nextFeeding}</p>
          <p>Countdown: {countdown}</p>
        </div>
      </div>
    </div>
  );
}
