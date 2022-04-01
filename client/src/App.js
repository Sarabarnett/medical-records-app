import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Clinics from "./components/Clinics";
import Vaccines from "./components/Vaccines";
import "./Clinic.css"

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

function App() {
  return (
    <Router>
      <Header />
      HELLO/Test?
      <Footer />
      <Clinics />
      <Vaccines user={{
        userName: '',
        email: '',
        vaccine: {
          dob: '',
          patientNumber: '',
          firstName: '',
          lastName: '',
          firstDose: {
            productName: '',
            date: '',
            clinicSite: '',
          },
          secondDose: {
            productName: '',
            date: '',
            clinicSite: '',
          }
        }
      }} />
    </Router>
  );
}

export default App;
