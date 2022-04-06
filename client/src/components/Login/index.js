import React, { useState } from "react";
// import validateEmail from '../../utils/helpers.js';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from "../../utils/mutations";
//import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import '../../login-signup.css';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// import NineteenNinetySeven from '../../assets/fonts/NineteenNinetySeven.ttf';

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
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'Raleway';
  //         font-style: normal;
  //         src: local('NineteenNinetySeven'), url(${NineteenNinetySeven}) format('tff');
  //       }`,
  //     },
  //   },
});


function Login() {

  const [formState, setFormState] = useState({ email: '', password: '' });
  // const { email, password } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  // const [login, { error }] = useMutation(LOGIN_USER);

  //validate email function
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  // update state based on form input changes
  const handleChange = (e) => {
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
          setErrorMessage(`Password is required.`)
        } else {
          setErrorMessage('');
        } 
    }
    
    // if (!errorMessage) {
      setFormState({
        ...formState, 
        [e.target.name]: e.target.value 
      });
    //}
    };  
  

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


return (
  <ThemeProvider>
  <main>
    {/* LOGIN FORM */}
      <div>
      <Box
        className="form"
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
        >
        <Card 
        sx={{ 
          bgcolor: '#A3EEEB',
          minWidth: 350,
          boxShadow: 6,
          border: 3,
          borderColor: 'secondary'
          }}>
          <CardContent
          sx={{
            p: 5,
            textAlign: 'center'
          }}>
          <Typography 
          sx={{ 
            // fontFamily: 'NineteenNinetySeven',
            color: 'secondary',
            fontSize: 28,
            fontWeight: 'bold'}} 
            gutterBottom>
            LOGIN
          </Typography>
            <div className='form-input' >
              <TextField
              sx={{
                mb: 3,
                bgcolor: 'white'
              }}
                id="outlined-basic" 
                className='form-input'
                label="Email Address" 
                type="email" 
                name="email"
                variant="outlined"
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
                label="Password" 
                type="password"
                name="password"
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
                color="secondary" variant="contained" size="medium" onSubmit={handleFormSubmit}>Submit</Button>
              </Link>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </Box>
      </div>
    </main>
 </ThemeProvider>
)
};

export default Login;