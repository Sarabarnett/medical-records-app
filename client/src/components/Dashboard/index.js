import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Vaccines from "../Vaccines";
import Clinics from "../Clinics";
import MedicalRecords from "../MedicalRecords";
import "../../index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
//import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import PopArtImage from "../../assets/images/popart-transparent.png";
import { useHistory } from "react-router-dom";

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
    fontFamily: ["Permanent Marker", "cursive", "Acme", "sans-serif"],
  },
});

const Dashboard = () => {
  const history = useHistory();

  return (
    <main>
      <Router>
        <Switch>
          <Route path="/Vaccines" component={Vaccines} />
          <Route path="/Clinics" component={Clinics} />
          <Route path="/MedicalRecords" component={MedicalRecords} />

          <ThemeProvider theme={theme}>
            <div>
              <Typography
                sx={{
                  p: 5,
                  fontWeight: "400",
                  fontSize: 70,
                  fontFamily: "Permanent Marker"
                }}
                noWrap
                variant="h2"
                component="div"
                color="#F7EA34"
              >
                Welcome back!
              </Typography>

              <Box>
                <Card
                  sx={{
                    minWidth: 400,
                    minHeight: 300,
                    boxShadow: 6,
                    border: 5,
                    borderColor: "#28D5CF",
                    backgroundImage: `url(${PopArtImage})`,
                  }}
                >
                  <CardHeader
                    sx={{
                      minHeight: 100,
                      bgcolor: "#F12B95",
                      color: "#28D5CF",
                      textAlign: "center",
                      
                    }}
                    titleTypographyProps={{ variant: "h4", fontFamily: "Acme", fontSize: 46 }}
                    title="Add To Your Records"
                  />
                  <CardContent
                    sx={{
                      p: 5,
                      textAlign: "center",
                    }}
                  >
                    <ul className="formLinks">
                      <li>
                        <Link style={{ textDecoration: "none" }} to="/Vaccines">
                          <Button
                            sx={{
                              m: 2,
                              color: "white",
                              fontSize: 28,
                              fontWeight: "400",
                              minWidth: "100px",
                              fontFamily: "Acme"
                            }}
                            variant="contained"
                            color="primary"
                            size="large"
                          >
                            Vaccines
                          </Button>
                        </Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: "none" }} to="/Clinics">
                          <Button
                            sx={{
                              m: 2,
                              color: "white",
                              fontSize: 28,
                              fontWeight: "400",
                              minWidth: "100px",
                              fontFamily: "Acme"
                            }}
                            variant="contained"
                            color="primary"
                            size="large"
                          >
                            Clinics
                          </Button>
                        </Link>
                      </li>
                      <li>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/MedicalRecords"
                        >
                          <Button
                            sx={{
                              m: 2,
                              color: "white",
                              fontSize: 28,
                              fontWeight: "400",
                              minWidth: "100px",
                              fontFamily: "Acme"
                            }}
                            variant="contained"
                            color="primary"
                            size="large"
                          >
                            Medical Records
                          </Button>
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Box>
            </div>
          </ThemeProvider>
        </Switch>

        <Button
          onClick={() => history.goBack()}
          sx={{
            m: 2,
            color: "white",
            fontSize: 22,
            fontWeight: "600",
            minWidth: "100px",
          }}
          variant="contained"
          color="primary"
          size="large"
        >
          Go back
        </Button>
      </Router>
    </main>
  );
};

export default Dashboard;
