// src/pages/Dashboard.jsx

import Card from "../components/Card";
import TemperatureSection from "../components/Temperature";
import WaterLevelSection from "../components/WaterLevel";
import FeedingTimesSection from "../components/FeedingTimes";

export default function Dashboard() {
 

  return (
    <div className="p-6 space-y-6">
      <div className="dashboard grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon="🌡️"
          title="Temperature"
          value="25°C"
          color="orange"
          
        />
        <Card icon="💧" title="Water Level" value="85%" color="blue" />
        <Card icon="⏰" title="Feeding Times" value="5.00 pm" color="green" />
      </div>

       <TemperatureSection />
       <WaterLevelSection
  currentLevel={85}
  history={[
    { time: "1am", value: 70 },
    { time: "2am", value: 85 },
    { time: "3am", value: 91 },
    { time: "4am", value: 80 },
    { time: "5am", value: 75 },
    { time: "6am", value: 85 },
    { time: "12pm", value: 82 },
  ]}
/>
      <FeedingTimesSection
  schedule={["8:00 AM", "2:00 PM", "8:00 PM"]}
  lastFeeding={{ time: "4:00 AM", amount: "15g" }}
  nextFeeding="8:00 AM"
/>
    </div>
  );
}
