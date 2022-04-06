import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
// import Homepage from "./components/Homepage";
// import { makeStyles } from '@mui/styles';
=======
>>>>>>> d13e6e2cc6196933988e70996bce81a6c9a76cdc

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";
import Login from './components/Login';
import Signup from "./components/Signup";


function App() {
  return (
    <Router>
      <Header />
    
      HELLO/Test?
<<<<<<< HEAD
      <AboutUs />

=======
      
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      
      <Route path="/UserDashboard">
        <Link to="/UserDashboard">UserDashboard</Link>
        <UserDashboard />
      </Route>
>>>>>>> d13e6e2cc6196933988e70996bce81a6c9a76cdc
      <Footer />
    </Router>
  );
}

export default App;
