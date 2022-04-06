import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const AboutUs = () => {
  // const classes = useStyles()

  return (
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
  );
};


export default AboutUs;