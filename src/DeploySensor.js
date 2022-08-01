import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const DeploySensor = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [isPending, setIsPending] = useState(false);



    const baseUrl = "http://localhost:8080/api";

    const handleSubmit = (e) => {
        e.preventDefault();
        const sensor = {serialNumber, latitude, longitude}
        setIsPending(true);
        fetch(baseUrl.concat("/sensor/register"), {
            method: "POST",
            headers: {"Content-Type": "application/json"},
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
          <form onSubmit={handleSubmit}>
            <label>Serial Number </label>
            <input
              type="text"
              required
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            ></input>
            <br></br>
            <a href="https://www.maps.ie/coordinates.html">
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
