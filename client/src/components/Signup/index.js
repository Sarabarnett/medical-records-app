import React, { useState } from "react";
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from "../utils/mutations";
//import Auth from '../utils/auth';

const Signup = () => {

  // const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  // const [addUser, { error }] = useMutation(ADD_USER);

  // // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   //use try to handle errors
  //   try {
  //     //execute addUser mutation and pass in variable data from form
  //     const { data } = await addUser({
  //       variables: {...formState}
  //     });

  //     // Auth.login(data.addUser.token);
     
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };


  return(
    <main className='flex-row justify-center mb-4'>
      {/* SIGNUP FORM */}
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Sign Up</h4>
          <div className='card-body'>
            <form >
              <input
                className='form-input'
                placeholder='Username'
                name='username'
                type='username'
                id='username'
                // value={formState.username}
                // onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Email'
                name='email'
                type='email'
                id='email'
                // value={formState.email}
                // onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Password'
                name='password'
                type='password'
                id='password'
                // value={formState.password}
                // onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
            {/* {error && <div>Sign up failed.</div>} */}
          </div>
        </div>
      </div>
    </main>
  )
};

export default Signup;