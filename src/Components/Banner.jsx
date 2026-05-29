import "../styles/globals.css"; // shared styles
import bellIcon from "../assets/bell.png";

export default function Banner() {
  return (
    <div className="banner">
      

      {/* Main title */}
      <h1 className="banner-title">Automated Fish Tank System</h1>

      {/* Description */}
      <p className="banner-description">
        A system for remotely monitoring and controlling fish tank conditions to ensure a healthy aquatic environment.
      </p>

      {/* Bell icon top-right */}
      <img src={bellIcon} alt="Notification Icon" className="banner-icon" />
    </div>
  );
}
