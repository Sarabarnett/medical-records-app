import React from "react";
import AboutUs from "./components/AboutUs";
// import Homepage from "./components/Homepage";
// import { makeStyles } from '@mui/styles';

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";
import Login from './components/Login';
import Signup from "./components/Signup";
import Vaccines from "./components/Vaccines";
import MedicalRecords from "./components/MedicalRecords";
import Clinics from "./components/Clinics";



function App() {
  return (
    <Router>
      <Header />
    
      {/* <AboutUs /> */}

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      
      <Route path="/UserDashboard">
        <UserDashboard />
      </Route>
      <Route exact path="/Vaccines" component={Vaccines} />
      <Route exact path="/MedicalRecords" component={MedicalRecords} />
      <Route exact path="/Clinics" component={Clinics} />
      <Footer />
    </Router>
  );
}

export default App;
