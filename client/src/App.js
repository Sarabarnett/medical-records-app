import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";


function App() {
  return (
    <Router>
      <Header />
      HELLO/Test?
      <Route path="/UserDashboard">
        <Link to="/UserDashboard">UserDashboard</Link>
        <UserDashboard />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
