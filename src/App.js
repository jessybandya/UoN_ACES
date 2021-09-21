import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { Grid, makeStyles } from "@material-ui/core";

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/login" component={Login}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
