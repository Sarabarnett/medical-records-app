import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Vaccines from "../Vaccines";
import Clinics from "../Clinics";
import MedicalRecords from "../MedicalRecords";
import "../../index.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

let theme = createTheme({
  palette: {
    primary: {
      main: '#28D5CF',
    },
    secondary: {
      main: '#F12B95',
    },
    tertiary: {
      main: '#F7EA34',
    },
    quaternary: {
      main: '#F89514'
    },
    quinary: {
      main: '#607D8B',
    },
  },

});

const Dashboard = () => {
  return (
  <main>
    <>
      <Router>
        <Switch>
          <ThemeProvider theme={theme}>
          <div>
          <Box></Box>
            <h1>Welcome "GENERIC NAME HERE"</h1>
            <nav>
              <ul>
                <li>
                  <Link style={{ textDecoration: 'none' }} to="/Vaccines">Vaccines</Link>
                  <Route path="/Vaccines" component={Vaccines} />
                </li>
                <li>
                  <Link style={{ textDecoration: 'none' }} to="/Clinics">Clinics</Link>
                  <Route path="/Clinics" component={Clinics} />
                </li>
                <li>
                  <Link style={{ textDecoration: 'none' }} to="/MedicalRecords">Medical Records</Link>
                  <Route path="/MedicalRecords" component={MedicalRecords} />
                </li>
              </ul>
            </nav>
          </div>
          </ThemeProvider>
        </Switch>
      </Router>
    </>
  </main>
  );
};

export default Dashboard;
