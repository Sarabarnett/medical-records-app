import React from "react";
// import AboutUs from "./components/AboutUs";
import Homepage from "./pages/home";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <Router>
      HELLO/Test?
      <Route path="/UserDashboard">
        <UserDashboard />
      </Route>
      <Header />
      <Homepage />
      <Route path="/UserDashboard">
        <Link to="/UserDashboard">UserDashboard</Link>
        <UserDashboard />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
