// src/pages/Dashboard.jsx

import Card from "../components/Card";
import TemperatureSection from "../components/Temperature";

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
      
    </div>
  );
}
