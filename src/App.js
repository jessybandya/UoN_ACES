import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import { Grid, makeStyles } from "@material-ui/core";
import { useState,useEffect } from 'react';
import {auth} from "./components/firebase"


//Components
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Blog from './components/Blog';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        setUser(authUser)
      }else{
        setUser(false);
      }
    })
  }, [])
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={Blog}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/register" component={Register}/>

       </Switch>
     </Router>
    </div>
  );
}

export default App;
