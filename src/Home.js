import { useState } from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="imgs" id="view">
        <h4 className="homepageText" id="viewText">
          Monitoring air pollution across the United Kingdom
        </h4>
      </div>
      <div className="imgs" id="arduino">
        <h4 className="homepageText" id="deviceText">
          With backing from the Dyson Foundation.
        </h4>
      </div>
      <div className="imgs" id="people">
        <h4 className="homepageText" id="peopleText">
          Built and maintained by students.
        </h4>
      </div>
    </div>
  );
};

export default Home;
