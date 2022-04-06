import React from 'react';
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import Signup from '../components/Signup'
// import Vaccines from '../components/Vaccines'
// import MedicalRecords from '../components/MedicalRecords'
// import Clinics from '../components/Clinics'

// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

import Auth from '../utils/auth';

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
    <div>
      <Login /> <Signup />
    </div>

    <div>
      {loggedIn && userData ? (
        <div className="col-12 col-lg-3 mb-3">
         <Dashboard 
         
         />
        </div>
      ) : null}
    </div>


    <AboutUs />

    <div> <Footer /> </div>
  </main>
)

}





export default Homepage;




// const Home = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
//   const thoughts = data?.thoughts || [];

//   const loggedIn = Auth.loggedIn();

  // return (
  //   <main>
  //     <div className="flex-row justify-space-between">
  //       {loggedIn && (
  //         <div className="col-12 mb-3">
  //           <ThoughtForm />
  //         </div>
  //       )}
  //       <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
  //         {loading ? (
  //           <div>Loading...</div>
  //         ) : (
  //           <ThoughtList
  //             thoughts={thoughts}
  //             title="Some Feed for Thought(s)..."
  //           />
  //         )}
  //       </div>
  //       {loggedIn && userData ? (
  //         <div className="col-12 col-lg-3 mb-3">
  //           <FriendList
  //             username={userData.me.username}
  //             friendCount={userData.me.friendCount}
  //             friends={userData.me.friends}
  //           />
  //         </div>
  //       ) : null}
  //     </div>
  //   </main>
  // );
// };
