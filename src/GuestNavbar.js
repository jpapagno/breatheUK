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
      <h1>
        <Link to="/">breatheUK</Link>
      </h1>
      <div className="links">
        <Link to="/browse">Browse Sensor Data</Link>
        <Link to="/historical">Historical Data</Link>
        <Link to="/aboutus">About Us</Link>
        {/* <Link to="/twitter">Twitter</Link> */}
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default GuestNavbar;
