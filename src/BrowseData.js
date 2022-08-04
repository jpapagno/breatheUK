const BrowseData = () => {
  return (
    <div className="imgs background scrollable" id="view">
    <div className="browseData">
      <div class="embed-container">
        <iframe
          width="500"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          title="multi_location_sensor_data"
          src="https://nu.maps.arcgis.com/apps/dashboards/6187043fabb5425c884b694333ca444e"
        ></iframe>
      </div>
      <a className="whiteBox tiny" href="https://nu.maps.arcgis.com/apps/dashboards/6187043fabb5425c884b694333ca444e" target="_blank">Visit Dashboard</a>
      <div className="data">
        <div className="data-table" id="pollution-type"></div>
        <div className="data-table" id="gas-pollutants"></div>
        <div className="data-table" id="pm-pollutants"></div>
        <div className="whiteBox">
          <p><strong>Standard particulate matter mass concentration value:</strong> the  mass concentration value obtained by density 
            conversion of industrial metal particles as equivalent particles, and is suitable for use in industrial 
            production workshops and the like.<br></br><strong>Concentration of particulate matter in the atmospheric environment</strong>
            is converted by the density of the main pollutants in the air as equivalent particles, and is suitable for 
            ordinary indoor and outdoor atmospheric environments.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BrowseData;
