import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DeploySensor from './DeploySensor';
import Register from './Register';
import Login from './Login';

function App() {
  
  return (
    <Router> 
    <div className="App">
      <Navbar />
    <div className='content'>
      <Switch>
        <Route exact path={"/"}> 
          <Home/>
        </Route>
        <Route exact path={"/login"}> 
          <Login></Login>
        </Route>
        <Route path={"/deploy"}> 
          <DeploySensor/>
        </Route>
        <Route path={"/register"}> 
        <Register/>
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;