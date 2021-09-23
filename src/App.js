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
import Navbar from './components/grid/Navbar';

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

            <Route exact path="/">
              <Home user={user}/>
             </Route> 
             <Route exact path="/home/:uid">
              <Home user={user}/>
             </Route> 
         <Route exact path="/blog" component={Blog}/>
         <Route exact path="/login">
              <Login user={user}/>
             </Route> 
             <Route exact path="/register">
              <Register user={user}/>
             </Route>    
       </Switch>
     </Router>
    </div>
  );
}

export default App;
