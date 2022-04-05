import React, { useState } from "react";
// import validateEmail from '../../utils/helpers.js';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from "../utils/mutations";
//import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import '../../login-signup.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Signup = () => {

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  // const { username, email, password} = formState;
  const [errorMessage, setErrorMessage] = useState('');
  // const [addUser, { error }] = useMutation(ADD_USER);

  //validate email function
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // // update state based on form input changes
  const handleChange = (e, value) => {

    if (e.target.name === 'email') {
      const validEmail = validateEmail(e.target.value);
      console.log(validEmail);
      if (!validEmail) {
       setErrorMessage("Please enter a valid email address.");
      } else {
        setErrorMessage('');
        } 
      } 
      else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`)
        } else {
          setErrorMessage('');
        } 
    }

      console.log(errorMessage);

    if (!errorMessage) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //clear form values
    setFormState({
      username: '',
      email: '',
      password: '',
    });
  };

  return(
    <main >
      {/* SIGNUP FORM */}
      <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
        >
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
          <Typography 
          sx={{ fontSize: 28,
          fontWeight: 'bold' }} 
          gutterBottom>
            SIGNUP
          </Typography>
          
            <div className='form-input'>
              <TextField
              sx={{
                mb: 3,
                bgcolor: 'white'
              }}
                id="outlined-basic"
                variant="outlined"
                label='Username'
                name='username'
                type='username'
                defaultValue={formState.username}
                onBlur={handleChange}
              />
              <TextField
              sx={{
                mb: 3,
                bgcolor: 'white'
              }}
                id="outlined-basic"
                variant="outlined"
                className='form-input'
                label='Email Address'
                name='email'
                type='email'
                defaultValue={formState.email}
                onBlur={handleChange}
              />
              <TextField
              sx={{
                mb: 3,
                bgcolor: 'white'
              }}
                id="outlined-basic"
                className='form-input'
                label='Password'
                name='password'
                type='password'
                variant="outlined"
                defaultValue={formState.password}
                onBlur={handleChange}
              />
              { errorMessage && (
              <Typography variant="button" display="block" gutterBottom>
                {errorMessage}
              </Typography>
            )}
              <CardActions
              sx={{
                justifyContent: 'center'
              }}>
              <Link style={{ textDecoration: 'none' }} to="/userDashboard">
                <Button sx={{ fontSize: 18, fontWeight: 'medium'}}
                variant="contained" size="medium"onSubmit={handleFormSubmit}>Submit</Button>
              </Link>
              </CardActions>
            </div>
         </CardContent>
        </Card>
      </Box>
      </div>
    </main>
  )
};

export default Signup;