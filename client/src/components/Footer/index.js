import React from "react";

//import {createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


// let theme = createTheme({
//   palette: {
//     primary: {
//       main: "#28D5CF",
//     },
//     secondary: {
//       main: "#F12B95",
//     },
//     tertiary: {
//       main: "#F7EA34",
//     },
//     quaternary: {
//       main: "#F89514",
//     },
//     quinary: {
//       main: "#607D8B",
//     },
//   },
//   typography: {
//     fontFamily: ["Permanent Marker", "cursive", "Acme", "sans-serif"],
//   },
// });

const Footer = () => {
  return (
      
        <Box
              className="form"
                component="form"
                sx={{position: 'fixed', bottom: 0, left: 0, right: 0,
                  fontFamily: "Acme",
                  fontSize: [34, "!important"],
                }}
                autoComplete="off">
          <Card
              sx={{ 
                boxShadow: 6,
                minWidth: 350,
                border: 3,
                borderColor: 'primary.main',
                bgcolor: '#B3E5FC' 
                }}>
            <CardContent
                sx={{
                  p: 5,
                  textAlign: 'center'
                }}>
              
                  <div className="container">&copy;2022 By O'CSS</div>
              
            </CardContent>
          </Card>
        </Box>
  );
};

export default Footer;
