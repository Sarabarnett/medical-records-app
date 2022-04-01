import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";
import Clinics from "./components/Clinics";
import Vaccines from "./components/Vaccines";
import "./Clinic.css";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

function App() {
  return (
    <Router>
      <Header />
      HELLO/Test?
      <Footer />
      user=
      {{
        userName: "",
        email: "",
        vaccine: {
          dob: "",
          patientNumber: "",
          firstName: "",
          lastName: "",
          firstDose: {
            productName: "",
            date: "",
            clinicSite: "",
          },
          secondDose: {
            productName: "",
            date: "",
            clinicSite: "",
          },
        },
      }}
    </Router>
  );
}

export default App;
