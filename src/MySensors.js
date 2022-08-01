import React from "react";
const MySensors = () => {
  const baseUrl = "http://localhost:8080/api";

    let data;

    fetch(baseUrl)
    .then((response) => {
        data = response.json();
        return response.json();
    })

  const [sortConfig, setSortConfig] = React.useState(null);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  function mySort(props) {
    const { products } = props;
    let sortedProducts = [...products];
    if (sortConfig !== null) {
      sortedProducts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      })
      return sortedProducts;
    }
  }

  return (
    <div className="mySensors">
      <table>
        <tr>
          <th>
            <button type="button" onClick={() => requestSort("name")}>
              id
            </button>
          </th>

          <th>status</th>
          <th>lat</th>
          <th>long</th>
          <th>serialNumber</th>
        </tr>
        {data.mySort.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
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
