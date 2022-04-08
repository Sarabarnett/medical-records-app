import React from "react";
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';

import AboutUs from "../components/AboutUs";
//import Footer from "../components/Footer";
// import Header from '../components/Header'
//import Dashboard from "../components/Dashboard";
// import Login from '../components/Login'
// import Signup from '../components/Signup'
// import Vaccines from '../components/Vaccines'
// import MedicalRecords from '../components/MedicalRecords'
// import Clinics from '../components/Clinics'

import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';

// import { Link } from 'react-router-dom';

//Pages -> Home.js in DeepThoughts
//add components
//log in/log out renders when clicked in nav bar
//footer and nav bar on each

let theme = createTheme({
  palette: {
    primary: {
      main: "#28D5CF",
    },
    secondary: {
      main: "#F12B95",
    },
    tertiary: {
      main: "#F7EA34",
    },
    quaternary: {
      main: "#F89514",
    },
    quinary: {
      main: "#607D8B",
    },
  },
  typography: {
    fontFamily: "NineteenNinetySeven, Comic Sans",
  },
});

const Homepage = () => {
  // const loggedIn = Auth.loggedIn();
  // const { data: userData } = useQuery(QUERY_USER);

  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* header section
              <div> 
                <Box className="form"
                      component="form"
                      sx={{
                      }}
                      autoComplete="off">
                  <Card sx={{ 
                        bgcolor: '#E1BEE7',
                        minWidth: 350,
                        boxShadow: 6,
                        border: 3,
                        borderColor: 'secondary.main'
                        }}>
                      <CardContent
                            sx={{
                              p: 5,
                              textAlign: 'center'
                            }}>
                          <Header />
                      </CardContent>
                  </Card>
                </Box> 
              </div> */}

        {/* <div>
          {loggedIn && userData ? (
            <div>
              <Box>
                <Card>
                  <CardContent>
                    <Dashboard />
                  </CardContent>
                </Card>
              </Box>
            </div>
          ) : null}
        </div> */}

        <div>
          <AboutUs />
        </div>

        {/* <div>
          <Footer />
        </div> */}
      </main>
    </ThemeProvider>
  );
};

export default Homepage;
