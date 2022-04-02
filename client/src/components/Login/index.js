import React, { useState } from "react";
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from "../utils/mutations";
//import Auth from '../utils/auth';
import '../../login-signup.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const Login = () => {

//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error }] = useMutation(LOGIN_USER);

//   // // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await login({
//         variables: {...formState }
//       });

//       // Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }

//     // clear form values
//     setFormState({
//       email: '',
//       password: '',
//     });
//   };

// <Box
//   component="span"
//   sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//   </Box>

return (
  <main >
    {/* LOGIN FORM */}
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
            Login
          </Typography>
          
            <div>
              <TextField
                id="outlined-basic" 
                label="Email Address" 
                type="email" 
                variant="outlined"
                // value={formState.email}
                // onChange={handleChange}
              />
              <TextField
                id="outlined-basic" 
                label="Password" 
                type="password" 
                variant="outlined"
                // value={formState.password}
                // onChange={handleChange}
              />
              <CardActions>
                <Button variant="contained" size="medium">Submit</Button>
              </CardActions>
              
            </div>
            {/* {error && <div>Login failed</div>} */}
          </CardContent>
        </Card>
      </Box>
      </div>
    </main>

)

};

export default Login;