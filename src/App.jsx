// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Temperature from "./components/Temperature";
import WaterLevel from "./Components/WaterLevel";

import FeedingTimes from "./Components/FeedingTimes";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Global header */}
        <Banner />
        <Navbar />

        {/* Page content */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/temperature" element={<Temperature />} />
            <Route path="/water" element={<WaterLevel />} />
            <Route path="/feeding" element={<FeedingTimes />} />
            
          </Routes>
        </div>
        {/* ✅ Footer always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
