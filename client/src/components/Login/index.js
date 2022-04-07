import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

import "../../login-signup.css";
import { Form, Alert } from "react-bootstrap";

// Material UI imports
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

let theme = createTheme({
  palette: {
    primary: {
      main: "#28D5CF",
    },
    secondary: {
      main: "#F12B95",
    },
    tertiary: {
      main: "#F7EA34",
    },
    quaternary: {
      main: "#F89514",
    },
    quinary: {
      main: "#607D8B",
    },
  },
  typography: {
    fontFamily: ["Permanent Marker", "cursive", "Acme", "sans-serif"],
  },
});

function Login() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // update state based on form input changes
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      console.log("token", data);
      Auth.login(data.login.token);

      setUserFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  // // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log("ffffffff")
  //   try {
  //     const { data } = await login({ variables: { ...formState } })

  //     // clear form values
  //     setFormState({
  //       email: "",
  //       password: "",
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
  return (
    <ThemeProvider theme={theme}>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <div>
          <Box
            className="form"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            autoComplete="off"
          >
            <Card
              sx={{
                bgcolor: "#28D5CF",
                minWidth: 350,
                boxShadow: 6,
                border: 5,
                borderColor: "#F12B95",
              }}
            >
              <CardContent
                sx={{
                  p: 5,
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 40,
                    fontWeight: "400",
                    fontFamily: "Permanent Marker",
                  }}
                  color="secondary"
                  gutterBottom
                >
                  LOGIN
                </Typography>
                <div className="form-input">
                  <TextField
                    sx={{
                      mb: 3,
                      bgcolor: "white",
                    }}
                    id="outlined-basic"
                    className="form-input"
                    label="Email Address"
                    type="email"
                    name="email"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                  />
                  <TextField
                    sx={{
                      mb: 3,
                      bgcolor: "white",
                    }}
                    id="outlined-basic"
                    className="form-input"
                    label="Password"
                    type="password"
                    name="password"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                  />

                  <CardActions
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      sx={{ fontSize: 22, fontWeight: "600" }}
                      color="secondary"
                      variant="contained"
                      size="medium"
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </Button>
                  </CardActions>
                  {error && <div>Login failed</div>}
                </div>
              </CardContent>
            </Card>
          </Box>
        </div>
      </Form>
    </ThemeProvider>
  );
}

export default Login;
