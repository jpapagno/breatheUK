import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import esriRef from "./AboutUs";
import databaseRef from "./AboutUs";
import deviceRef from "./AboutUs";
import platformsRef from "./AboutUs";

const Footer = () => {

  return (
    <div className="footer">
      <h1>breatheUK, 2022</h1>
      <div className="links">
        <Link to="/aboutus">About Us</Link>
        <a href="https://twitter.com/tweetbreatheuk" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://github.com/AirPollutionLondon" target="_blank" rel="noreferrer">
          Source Code
        </a>
                <span id="smalllink">
            <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">
                All icons from Flaticon
            </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
