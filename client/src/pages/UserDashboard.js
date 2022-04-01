import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Vaccines from "../components/Vaccines";
import MedicalRecords from "../components/MedicalRecords";
import Clinics from "../components/Clinics";
import Dashboard from "../components/Dashboard";

const UserDashboard = () => {
  return (
    <>
      <Dashboard />
      <Router>
        <Switch>
          <Route path="/Vaccines" component={Vaccines} />
          <Route path="/Clinics" component={Clinics} />
          <Route path="/MedicalRecords" component={MedicalRecords} />
        </Switch>
      </Router>
    </>
  );
};

export default UserDashboard;
