// src/components/Footer.jsx
import "../styles/globals.css";
import waveFooter from "../assets/footer.png";  // ✅ import from src/assets

export default function Footer() {
  return (
    <footer className="footer">
      

      <img 
        src={waveFooter}   // ✅ use imported variable
        alt="Footer waves"
        className="footer-image"
      />
      <div className="footer-text">
        <hr className="footer-divider" />
        <h4>Powered by Smart Fish Tank</h4>
      </div>
    </footer>
  );
}
