import React from "react";
import AboutUs from "./components/AboutUs";
// import Homepage from "./components/Homepage";
// import { makeStyles } from '@mui/styles';

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
    
      <AboutUs />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      
      <Route path="/UserDashboard">
        <Link to="/UserDashboard">UserDashboard</Link>
        <UserDashboard />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
