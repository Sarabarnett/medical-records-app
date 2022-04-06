import React from 'react';
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import { Link } from 'react-router-dom';

//Pages -> Home.js in DeepThoughts
//add components
//log in/log out renders when clicked in nav bar
//footer and nav bar on each

const Homepage = () => {
  // const medRecords = vaccine, clinics, records

  const loggedIn = Auth.loggedIn();

return(
  <main>
    <div> <Header /> </div>
    {/*login | logout */}
    {/* <clinics, vaccines, medical records /> */}


    <AboutUs />

    <div> <Footer /> </div>
  </main>
)

}





export default Homepage;