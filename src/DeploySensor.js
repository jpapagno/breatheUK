import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import pdf from "./imgs/sensorsTutorial.pdf"

const DeploySensor = (token) => {
  const [serialNumber, setSerialNumber] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [isPending, setIsPending] = useState(false);

  

    const baseUrl = "http://localhost:8080/api";

    const handleSubmit = (e) => {
      console.log(token);
        e.preventDefault();
        const sensor = {serialNumber, latitude, longitude}
        setIsPending(true);
        fetch(baseUrl.concat("/sensor/register"), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token.token
            },
            body: JSON.stringify(sensor),
        }) .then ((response) => {
            if (response.ok) {
            console.log({sensor});
            console.log("registered");
            setIsPending(false);
            } else {
                console.log('failed');
                setIsPending(false);
            }
        })

    }

    return (  
        <div className="imgs background" id="view">
            <div className="whiteBox">
        <div className="deploy">
          <h2>Deploy a Sensor</h2>
          <a href={pdf} target="_blank" rel = "noreferrer">How do I set up a sensor?</a>
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <label>Serial Number </label>
            <input
              type="text"
              required
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            ></input>
            <br></br>
            <a href="https://www.maps.ie/coordinates.html" target="_blank">
              Find My Latitude and Longitude
            </a>
            <br></br>
            <label>Latitude </label>
            <input
              type="text"
              required
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            ></input>
            <br></br>
            <label>Longitude </label>
            <input
              type="text"
              required
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            ></input>
            <br></br>
            {!isPending && <button>Add Sensor</button>}
            {isPending && <button disabled>Loading...</button>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeploySensor;
