import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/About Us";
import Homepage from "./components/Homepage";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

function App() {
  return (
    <Router>
      <Header />

      <Homepage>
        <AboutUs />
      </Homepage>

      HELLO/Test?
      <Footer />
    </Router>
  );
}

export default App;
