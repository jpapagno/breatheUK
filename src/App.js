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
import Twitter from "./Twitter";
import HistoricalDBDownload from "./HistoricalDBDownload";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <Router>
        <div className="App">
          <GuestNavbar />
          <div className="content">
            <Switch>
              <Route exact path={"/login"}>
                <LoginV3 setToken={setToken}></LoginV3>
              </Route>
              <Route path={"/register"}>
                <Register setToken={setToken} />
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
              <Route path={"/twitter"}>
                <Twitter></Twitter>
              </Route>

              <Route path={"/"}>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar setToken={setToken} />
        <div className="content">
          <Switch>
            <Route path={"/login"}>
              <Login></Login>
            </Route>
            <Route path={"/deploy"}>
              <DeploySensor />
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
            <Route path={"/"}>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
