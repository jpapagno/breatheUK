import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeploySensor from "./DeploySensor";
import Register from "./Register";
import Login from "./Login";
import LoginV3 from "./LoginV3";
import { useState } from "react";
import GuestNavbar from "./GuestNavbar";
import BrowseData from "./BrowseData";
import MySensors from "./MySensors";
import Esri from "./Esri";
import Database from "./Database";
import Device from "./Device";
import Platforms from "./Platforms";
import AboutUs from "./AboutUs";
import HistoricalDBDownload from "./HistoricalDBDownload";
import Footer from "./Footer";
import { HashRouter } from "react-router-dom";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <HashRouter>
        <div className="App">
          <GuestNavbar />
          <div className="content">
              <Route exact path={"/login"}>
                <LoginV3 setToken={setToken}></LoginV3>
              </Route>
              <Route path={"/register"}>
                <Register setToken={setToken} />
              </Route>
              <Route exact path={"/browse"}
              component={BrowseData}/>
              <Route path={"/aboutus"}
              component={AboutUs}/>
              <Route path={"/historical"}>
              <HistoricalDBDownload></HistoricalDBDownload>
            </Route>

              <Route path={"/esri"}>
                <Esri></Esri>
              </Route>
              <Route path={"/devices"}>
                <Device></Device>
              </Route>
              <Route path={"/platforms"}>
                <Platforms></Platforms>
              </Route>
              <Route path={"/database"}>
                <Database></Database>
              </Route>

              <Route exact path={"/"}>
                <Home />
              </Route>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }

  return (
    <HashRouter>
      <div className="App">
        <Navbar setToken={setToken} />
        <div className="content">
            <Route path={"/login"}>
              <Login></Login>
            </Route>
            <Route path={"/deploy"}>
              <DeploySensor token = {token}/>
            </Route>
            <Route path={"/mySensors"}>
              <MySensors />
            </Route>
            <Route path={"/register"}>
              <Register />
            </Route>
            <Route path={"/browse"}>
              <BrowseData></BrowseData>
            </Route>
            <Route path={"/aboutus"}>
              <AboutUs></AboutUs>
            </Route>
            <Route path={"/historical"}>
              <HistoricalDBDownload></HistoricalDBDownload>
            </Route>

            <Route path={"/esri"}>
              <Esri></Esri>
            </Route>
            <Route path={"/devices"}>
              <Device></Device>
            </Route>
            <Route path={"/platforms"}>
              <Platforms></Platforms>
            </Route>
            <Route path={"/database"}>
              <Database></Database>
            </Route>
            <Route exact path={"/"}>
              <Home />
            </Route>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
