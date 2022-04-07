import React from "react";
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
// import TextField from '@mui/material/TextField';

import buffKitty from "../../assets/images/buffy-kitty.jpeg";

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

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="form" component="form" autoComplete="off">
        <Card
          sx={{
            boxShadow: 6,
            minWidth: 350,
            border: 3,
            borderColor: "secondary.main",
            bgcolor: "#B3E5FC",
          }}
        >
          <CardContent
            sx={{
              p: 5,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Permanent Marker",
                fontSize: [64, "!important"],
              }}
            >
              <div>Our Cool Super Story</div>
            </Typography>

            <Typography
              sx={{
                fontFamily: "Acme",
                fontSize: [34, "!important"],
              }}
            >
              <p>
                We at O'CSS believe that patient ease should be at the forefront of the medical experience.
                <br></br>
                That is why we created EMR:
                <br></br>
                A Full-Stack MERN storage app specifically designed to house all of the confidential health information that you have cumulated over your many years as a patient.
              </p>
            </Typography>

            <Typography
              sx={{
                fontFamily: "Permanent Marker",
                fontSize: [44, "!important"],
              }}
            >
              <div>
                <h3>
                  Save your existing medical information!
                  <div>
                    {" "}
                    <img src={buffKitty} alt="buffKitty" />
                  </div>
                </h3>

                <h3>
                  Upload your vaccines!
                  <div>
                    {" "}
                    <img src={buffKitty} alt="buffKitty" />
                  </div>
                </h3>

                <h3>
                  Log your previous clinics!
                  <div>
                    {" "}
                    <img src={buffKitty} alt="buffKitty" />
                  </div>
                </h3>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;
