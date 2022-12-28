import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import logo from './images/logo.jpg';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Social Media App</Typography>
        <img className={classes.image} src={logo} alt="icon" height="150" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
