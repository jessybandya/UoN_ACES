import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import { Grid, makeStyles } from "@material-ui/core";
import { useState,useEffect } from 'react';
import {auth} from "./components/firebase"


//Components
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Blog from './components/Blog1';
import Postview from './components/Postview1';
import Navbar from './components/grid/Navbar';
import MainMessagesPage1 from './components/MainMessagesPage1';
import ChatDm from './components/ChatDm1';
import Notificationspage from './components/Notificationspage1';
import Profileview from './components/Profileview1';
import Profileedit from './components/Profileedit1';
import Addpost from './components/Addpost1';
import Test from './components/Test';




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
              <Blog user={user}/>
             </Route> 
 
            <Route exact path="/test" component={Test} />

             
            <Route exact path="/addpost">
              <Addpost user={user}/>
             </Route> 

             <Route exact path="/profileedit">
              <Profileedit user={user}/>
             </Route> 

             <Route exact path="/profileview">
              <Profileview user={user}/>
             </Route> 
             <Route exact path="/notifications">
              <Notificationspage user={user}/>
             </Route> 

             <Route exact path="/messages">
              <ChatDm user={user}/>
             </Route> 
             <Route exact path="/mainmessagespage">
              <MainMessagesPage1 user={user}/>
             </Route> 


         <Route exact path="/home">
              <Home user={user}/>
             </Route> 
             <Route exact path="/postview">
              <Postview user={user}/>
             </Route> 
         <Route exact path="/login">
              <Login/>
             </Route> 
             <Route exact path="/register">
              <Register/>
             </Route>    
       </Switch>
     </Router>
    </div>
  );
}

export default App;
