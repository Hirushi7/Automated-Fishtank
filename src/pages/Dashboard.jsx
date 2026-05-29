import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Card 
        icon="🌡️" 
        title="Temperature" 
        value="25°C" 
        color="orange" 
      />
      <Card 
        icon="💧" 
        title="Water Level" 
        value="85%" 
        color="blue" 
      />
      <Card 
        icon="⏰" 
        title="Feeding Times" 
        value="5.00 pm" 
        color="green" 
      />
    </div>
  );
}
