import { end } from "@popperjs/core";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

const HistoricalDBDownload = () => {
  const baseUrl = "https://test-data452e1421.s3.eu-west-2.amazonaws.com/"
  const endUrl = "-sensor_readings.csv"
  const midUrlExample = '08-2022'
  let midUrl = '';
  let url = '';


  function goLink() {
    window.location.href = url;
  } 


  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = () => {
    console.log(startDate);

    let month = startDate.getMonth() + 1;
    let year = startDate.getFullYear();
    if (month < 10) {
      midUrl = midUrl.concat("0")
    }

    midUrl = midUrl.concat(month.toString().concat("-").concat(year));

    url = baseUrl.concat(midUrl).concat(endUrl);

    console.log(month);
    console.log(year);
    console.log(midUrl);
    console.log(url);

    goLink();

    midUrl = '';
    url = ''
  };

  return (
    <div className="imgs background" id="view">
            <div className="whiteBox">
    <div className="historical">
      <h2 className="centered">
        Select Month
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        ></DatePicker>
        <button onClick={handleSubmit}>Get Historical Data</button>
      </h2>
    </div>
    </div>
    </div>
  );
};

export default HistoricalDBDownload;
