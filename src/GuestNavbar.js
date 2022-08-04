import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import esriRef from "./AboutUs";
import databaseRef from "./AboutUs";
import deviceRef from "./AboutUs";
import platformsRef from "./AboutUs";

const GuestNavbar = () => {
  let history = useHistory();

  function goAboutUs() {
    history.push("/aboutus");
  }

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    console.log("i be scrollin");
}

  return (
    <nav className="navbar">
      <Link to="/"><div className="logo"></div></Link>
      <div className="links">
        <Link to="/browse">Browse Sensor Data</Link>
        <Link to="/historical">Historical Data</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/login">Login</Link>
        <a href="https://github.com/AirPollutionLondon" target="_blank" rel="noreferrer">
          Source Code
        </a>
      </div>
    </nav>
  );
};

export default GuestNavbar;
