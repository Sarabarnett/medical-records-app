import React from 'react';
// import { Link } from 'react-router-dom';
import './index.js';

const AboutUs = () => {
  return (
    <div id="AboutSection">
      <h1 class="AboutHeader">Our Cool Super Story</h1>

      <p id="AboutP">
        Blah, blah, blah 
        we came together for Project #3 despite crippling odds
        <br></br>
        Blah, blah, blah
        and settled on this medical related app.
        <br></br>
        Blah, blah, blah
        Here is how it works:
      </p>

      <div id="AboutExDiv">

        <h3 id="AboutEx">Save your existing medical information
          <div> <img src=""></img> </div>
        </h3>

        <h3 id="AboutEx">Upload your vaccines
          <div> <img src=""></img> </div>
        </h3>

        <h3 id="AboutEx">List your previous clinics
          <div> <img src=""></img> </div>
        </h3>

      </div>

    </div>
  );
};


export default AboutUs;