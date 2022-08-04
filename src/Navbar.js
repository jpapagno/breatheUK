import { Link } from "react-router-dom";

const Navbar = ({ setToken }) => {
  const handleSubmit = (e) => {
    setToken("");
  };

  return (
    <nav className="navbar">

      <Link to="/"><div className="logo"></div></Link>

      <div className="links">
        <Link to="/deploy">Deploy Sensor</Link>
        <Link to="/mySensors">My Sensors</Link>
        <Link to="/browse">Browse Sensor Data</Link>
        <Link to={"/historical"}>Historical</Link>
        <Link to="/aboutus">About Us</Link>
        <a href="https://github.com/AirPollutionLondon" target="_blank" rel="noreferrer">
          Source Code
        </a>
        <Link to="/" onClick={handleSubmit}>Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
