import React from "react";
// import AboutUs from "./components/AboutUs";
import Homepage from "./pages/home";


import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";
import Login from './components/Login';
import Signup from "./components/Signup";


function App() {
  return (

    <Router>
      <Header />
      
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      
      <Homepage />

      <Route path="/UserDashboard">
        <UserDashboard />
      </Route>
      <Footer />
    </Router>

  );
}

export default App;
