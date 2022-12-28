import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import logo from './images/logo.jpg';

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography  variant="h2" align="center">Social Media App</Typography>
        <img src={logo} alt="icon" height="60" />
      </AppBar>
    </Container>
  );
};

export default App;
