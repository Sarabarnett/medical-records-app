import React, { useState } from "react";
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from "../utils/mutations";
//import Auth from '../utils/auth';
import '../../login-signup.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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
    <main >
      {/* SIGNUP FORM */}
      <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <Card sx={{ minWidth: 400 }}>
          <CardContent>
          <Typography sx={{ fontSize: 24 }} gutterBottom>
            Signup
          </Typography>
          
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className='form-input'
                label='Username'
                name='username'
                type='username'
                // value={formState.username}
                // onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                label='Email Address'
                name='email'
                type='email'
                // value={formState.email}
                // onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label='Password'
                name='password'
                type='password'
                variant="outlined"
                // value={formState.password}
                // onChange={handleChange}
              />
              <CardActions>
                <Button variant="contained" size="medium">Submit</Button>
              </CardActions>
            </div>
            {/* {error && <div>Sign up failed.</div>} */}
         </CardContent>
        </Card>
      </Box>
      </div>
    </main>
  )
};

export default Signup;