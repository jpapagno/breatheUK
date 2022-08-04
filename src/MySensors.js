import React from "react";
const MySensors = () => {
  const baseUrl = "http://localhost:8080/api";

  fetch(baseUrl).then((response) => {
    data = response.json();
    return response.json();
  });

  const data = [
    {
      status: "true",
      lat: "76.062859",
      long: "-11.465919",
      serialNumber: "6598469430097599",
    },
    {
      status: "true",
      lat: "78.260118",
      long: "141.389225",
      serialNumber: "4435248183210749",
    },
    {
      status: "true",
      lat: "-29.822534",
      long: "38.651944",
      serialNumber: "5163760427996055",
    },
    {
      status: "false",
      lat: "72.330384",
      long: "103.921646",
      serialNumber: "5582715125109675",
    },
    {
      status: "true",
      lat: "88.565476",
      long: "-15.786374",
      serialNumber: "2284959857660601",
    },
    {
      status: "false",
      lat: "17.097169",
      long: "-99.957716",
      serialNumber: "6620186902882873",
    },
    {
      status: "false",
      lat: "-58.504881",
      long: "113.954486",
      serialNumber: "7730878468806617",
    },
    {
      status: "false",
      lat: "79.289109",
      long: "-52.525375",
      serialNumber: "6425325787842679",
    },
    {
      status: "false",
      lat: "22.365149",
      long: "-173.958095",
      serialNumber: "4061692350312817",
    },
    {
      status: "false",
      lat: "-11.214626",
      long: "139.3471",
      serialNumber: "9349947374611948",
    },
    {
      status: "true",
      lat: "57.857348",
      long: "174.504267",
      serialNumber: "5626465117122529",
    },
    {
      status: "true",
      lat: "57.857348",
      long: "174.504267",
      serialNumber: "5626465117122529",
    },
    {
      status: "false",
      lat: "21.913307",
      long: "134.096097",
      serialNumber: "7560930223962777",
    },
    {
      status: "true",
      lat: "29.871524",
      long: "87.350562",
      serialNumber: "7785734418992073",
    },
    {
      status: "false",
      lat: "1.220884",
      long: "16.689051",
      serialNumber: "1682156564683416",
    },
    {
      status: "true",
      lat: "-32.973232",
      long: "53.169229",
      serialNumber: "5456430153844637",
    },
    {
      status: "false",
      lat: "55.95914",
      long: "126.185269",
      serialNumber: "7318181617300243",
    },
    {
      status: "true",
      lat: "-46.942269",
      long: "155.524621",
      serialNumber: "9108850920211672",
    },
  ];

  return (
    <div className="mySensors">
      <table>
        <tr>
          <th>status</th>
          <th>lat</th>
          <th>long</th>
          <th>serialNumber</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.status}</td>
              <td>{val.lat}</td>
              <td>{val.long}</td>
              <td>{val.serialNumber}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default MySensors;
