import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import './App.css';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Home from "./components/Home/Home";
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/country/:name">
              <CountryDetail/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch> 
       </Router>
    </div>
  );
}

export default App;
