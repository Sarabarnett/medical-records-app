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
          dob: '02/22/1990',
          patientNumber: '23222',
          firstName: 'Steven',
          lastName: 'Cruz',
          firstDose: {
            productName: 'pfizer',
            date: '01/22/2002',
            clinicSite: 'valley',
          },
          secondDose: {
            productName: 'pfizer',
            date: '11/22/2022',
            clinicSite: 'valley',
          }
        }
      }} />
    </Router>
  );
}

export default App;
