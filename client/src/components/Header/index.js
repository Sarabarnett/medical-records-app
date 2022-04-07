import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import '../../index.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
// import MenuItem from '@mui/material/MenuItem';
// import { Menu } from "@mui/material";

let theme = createTheme({
  palette: {
    // turquoise
    primary: {
      main: "#28D5CF",
    },
    // pink
    secondary: {
      main: "#F12B95",
    },
    // yellow
    tertiary: {
      main: "#F7EA34",
    },
    //orange
    quaternary: {
      main: "#F89514",
    },
  },
});

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, minheight: "145" }}>
        <AppBar position="static" color="quaternary">
          <Toolbar disableGutters>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography
                sx={{
                  p: 5,
                  fontWeight: "700",
                }}
                noWrap
                variant="h1"
                component="div"
                color="secondary"
              >
                EMR
              </Typography>
            </Link>

            {Auth.loggedIn() ? (
              <>
                <Link style={{ textDecoration: "none" }} to="/UserDashboard">
                  <Typography
                    sx={{
                      fontWeight: "500",
                      m: 2,
                    }}
                    variant="h4"
                    color="secondary"
                  >
                    Dashboard
                  </Typography>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={logout}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      m: 2,
                    }}
                    variant="h4"
                    color="secondary"
                  >
                    Logout
                  </Typography>
                </Link>
              </>
            ) : (
              <>
                <Link style={{ textDecoration: "none" }} to="/about">
                  <Typography
                    sx={{
                      fontWeight: "500",
                      m: 2,
                    }}
                    variant="h4"
                    color="secondary"
                  >
                    About Us
                  </Typography>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/login">
                  <Typography
                    sx={{
                      fontWeight: "500",
                      m: 2,
                    }}
                    variant="h4"
                    color="secondary"
                  >
                    Login
                  </Typography>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/signup">
                  <Typography
                    sx={{
                      fontWeight: "500",
                      m: 2,
                    }}
                    variant="h4"
                    color="secondary"
                  >
                    Signup
                  </Typography>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
