import React from "react";

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
