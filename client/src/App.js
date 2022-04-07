import React from "react";
// import AboutUs from "./components/AboutUs";
import Homepage from "./pages/home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

<<<<<<< HEAD
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}>
          <Homepage />
        </Route>

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Route path="/UserDashboard">
          <UserDashboard />
        </Route>
      </Switch>
      <Footer />
=======
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";
 import Login from './components/Login';
// import Signup from "./components/Signup";



function App() {
  return (
     <Router>
    
    
     
      
       <Route path="/UserDashboard" component={UserDashboard}/>
         
         
     <Route path="/login" component={Login}/> 
     <Route path="/" component={Homepage}/> 
     
    
      
>>>>>>> 44fb10aa02aaff49972079fdd0056d7eb17b039b
    </Router>
  );
}

export default App;
