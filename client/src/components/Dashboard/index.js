import React from "react";
import { Link } from "react-router-dom";


const Dashboard = () => {
  return (
    <div>
      <h1>Welcome "GENERIC NAME HERE"</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Vaccines">Vaccines</Link>
          </li>
          <li>
            <Link to="/Clinics">Clinics</Link>
          </li>
          <li>
            <Link to="/MedicalRecords">Medical Records</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
