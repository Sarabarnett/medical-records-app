import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from "../../utils/mutations";
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";
import '../../login-signup.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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

}); 


function Signup() {

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [addUser, { error }] = useMutation(ADD_USER);

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

    try {
      const { data } = await addUser({
        variables: {...formState}
      });

      Auth.login(data.addUser.token);
     
    } catch (e) {
      console.error(e);
    }

    //clear form values
    setFormState({
      username: '',
      email: '',
      password: '',
    });
  };

  return(
    <ThemeProvider theme={theme}>
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
          bgcolor: '#F12B95',
          boxShadow: 6,
          minWidth: 350,
          border: 5,
          borderColor: '#28D5CF',
          }}>
          <CardContent
            sx={{
              p: 5,
              textAlign: 'center'
            }}>
          <Typography 
          sx={{ fontSize: 36,
          fontWeight: '800' }} 
          gutterBottom
          color="primary">
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
                <Button sx={{ color: 'white', fontSize: 22, fontWeight: '600',}}
                color="primary" variant="contained" size="medium"onSubmit={handleFormSubmit}>Submit</Button>
              </Link>
              </CardActions>
            </div>
         </CardContent>
         {error && <div>Sign up failed</div>}
        </Card>
      </Box>
      </div>
    </main>
  </ThemeProvider>
  )
};

export default Signup;