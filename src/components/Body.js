import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ReactLogo from '../assets/images/react.png'
import AxiosLogo from '../assets/images/axios.png'
import BootstrapLogo from '../assets/images/bootstrap.png'
import MaterialUILogo from '../assets/images/material-ui.png'
import Image from 'react-bootstrap/Image'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  h1: {
    fontFamily: 'Fredoka One'
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",

    color: theme.palette.text.secondary
  },
  gogo: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    color: 'white',
    backgroundColor: '#5a626e',
  }
}));


export default function Body() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.gogo}>
            {" "}
            <h1>What Is This Website?</h1>
          </Paper>
          <Paper className={classes.paper}>
            <h4>
              This is website that tell you all countries around the world with
              their detailed information without any description using API that
              we fetch at https://restcountries.eu/rest/v2/all
            </h4>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.gogo}>
            <h1>Why This Website?</h1>
          </Paper>
          <Paper className={classes.paper}>
            <h4>
              This website help you who wanna know more
              about country without any useless description information and
              while at it you can learn how we make this website too if you
              visit our repository in github
            </h4>
          </Paper>

        </Grid>


        <Grid item xs={12} sm={12}>
          <Paper className={classes.gogo}>
            <h1>
              What We Use In This Website?
          </h1>
          </Paper>
          <Paper className={classes.paper}>
            <div className="d-flex justify-content-center" style={{flexWrap:'wrap'}}>
              <Image thumbnail alt="React Logo" src={ReactLogo} style={{
                height: '100px',
                width: 'auto'
              }} />
              <Image thumbnail alt="Bootstrap Logo" src={BootstrapLogo} style={{
                height: '100px',
                width: 'auto'
              }} />
              <Image thumbnail alt="Material UI Logo" src={MaterialUILogo} style={{
                height: '100px',
                width: 'auto'
              }} />
              <Image thumbnail alt="Axios Logo" src={AxiosLogo} style={{
                height: '100px',
                width: 'auto'
              }} />
            </div>
            <h4>
              We are using react.js with Material Ui,React Bootstrap, Axios, and React Router Dom.<br></br>
              We fetch our data for country list at https://restcountries.eu/rest/v2/all <br></br>
              So you can expect data in Countries menu is fetched using API <br></br>
              We using local storage for saving your data when sign up and sign in <br></br>
              For one reason and another we try to make this website simple as possible<br></br>
              Visit our repository if you wanna know the details
          </h4>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}
