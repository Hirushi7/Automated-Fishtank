import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Temperature from "./pages/Temperature";
import WaterLevel from "./pages/WaterLevel";
import FeedingTimes from "./pages/FeedingTimes";
import Oxygen from "./pages/Oxygen";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Banner />
       <Navbar />

<Dashboard/>

        <Routes>
           
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/water" element={<WaterLevel />} />
          <Route path="/feeding" element={<FeedingTimes />} />
          <Route path="/oxygen" element={<Oxygen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
