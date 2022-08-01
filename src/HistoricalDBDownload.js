import { end } from "@popperjs/core";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AWS from 'aws-sdk';

const HistoricalDBDownload = () => {
  const baseUrl = "";

  const bucketName = "test-data452e1421"
  const serviceName = "s3";
  const regionName = "eu-west-2";
  const access_key = "AKIAV24QNYP3I4BALQ7A";
  const secret_key = "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";

  var AWS = require("aws-sdk");
  var s3 = new AWS.S3({
    accessKeyId: access_key,
    secretAccessKey: secret_key,
    region: regionName,
  });

  var params = {
    Bucket: bucketName,
    Key: "images/myimage.jpg",
    ContentType: "csv",
  };
  s3.getSignedUrl("getObject", params, function (err, url) {
    console.log("Your generated pre-signed URL is", url);
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = () => {
    console.log(startDate);
    console.log(endDate);

    fetch(baseUrl).then((response) => {
      console.log(response.json());
    });
  };

  return (
    <div className="historical">
      <h2 className="centered">
        Select Date Range
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        ></DatePicker>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        ></DatePicker>
        <button onClick={handleSubmit}>Submit Date Range</button>
      </h2>
    </div>
  );
};

export default HistoricalDBDownload;
