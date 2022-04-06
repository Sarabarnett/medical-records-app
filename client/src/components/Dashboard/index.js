import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Vaccines from "../Vaccines";
import Clinics from "../Clinics";
import MedicalRecords from "../MedicalRecords";


const Dashboard = () => {
  return (
    <>
      <Router>
        <Switch>
          <div>
            <h1>Welcome "GENERIC NAME HERE"</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/Vaccines">Vaccines</Link>
                  <Route path="/Vaccines" component={Vaccines} />
                </li>
                <li>
                  <Link to="/Clinics">Clinics</Link>
                  <Route path="/Clinics" component={Clinics} />
                </li>
                <li>
                  <Link to="/MedicalRecords">Medical Records</Link>
                  <Route path="/MedicalRecords" component={MedicalRecords} />
                </li>
              </ul>
            </nav>
          </div>
          );
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
