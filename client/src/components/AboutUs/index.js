import React from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import {createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import NineteenNinetySeven from '../../assets'

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
  // typography:{
  //   fontFamily: 'NineteenNinetySeven, Comic Sans',
  // },
});

const AboutUs = () => {
  

  return (
    <ThemeProvider theme={theme}>
        <div>
          <h1 >Our Cool Super Story</h1>

          <p>
            Blah, blah, blah 
            we came together for Project #3 despite crippling odds
            <br></br>
            Blah, blah, blah
            and settled on this medical related app.
            <br></br>
            Blah, blah, blah
            Here is how it works:
          </p>

          <div>

            <h3>Save your existing medical information
              <div> <img src=""></img> </div>
            </h3>

            <h3>Upload your vaccines
              <div> <img src=""></img> </div>
            </h3>

            <h3>List your previous clinics
              <div> <img src=""></img> </div>
            </h3>

          </div>

        </div>
    </ThemeProvider>

    
  );
};


export default AboutUs;