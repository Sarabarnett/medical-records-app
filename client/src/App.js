import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

function App() {
  return (
    <Router>
      <Header />
      HELLO/Test?
      <Footer />
    </Router>
  );
}

export default App;
