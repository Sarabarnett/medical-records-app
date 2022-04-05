import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
// import Homepage from "./components/Homepage";
// import { makeStyles } from '@mui/styles';

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

function App() {
  return (
    <Router>
      <Header />
    
      HELLO/Test?
      <AboutUs />

      <Footer />
    </Router>
  );
}

export default App;
