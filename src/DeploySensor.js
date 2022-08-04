import { useState } from "react";

const DeploySensor = () => {

    const [serialNumber, setSerialNumber] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const sensor = {serialNumber, latitude, longitude}
        console.log({sensor})
    }

    return (  
        <div className="deploy">
            <h2>Deploy a Sensor</h2>
            <form onSubmit={handleSubmit}>
                <label>Serial Number </label>
                <input 
                type="text"
                required
                value={serialNumber}
                onChange = {(e) => setSerialNumber(e.target.value)}> 
                </input>
                <br></br>
                <label>Latitude </label>
                <input 
                type="text"
                required
                value={latitude}
                onChange = {(e) => setLatitude(e.target.value)}> 
                </input>
                <br></br>
                <label>Longitude </label>
                <input 
                type="text"
                required
                value={longitude}
                onChange = {(e) => setLongitude(e.target.value)}> 
                </input>
                <br></br>
                <button>Add Sensor</button>
            </form>
        </div>
    );
}

export default DeploySensor;