import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from './components/Login';
import Signup from "./components/Signup";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

function App() {
  return (
    <Router>
      <Header />
      HELLO/Test?
      
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      
      <Footer />
    </Router>
  );
}

export default App;
