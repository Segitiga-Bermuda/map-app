import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Git from '../assets/images/github-logo-white.png'
import map from "../assets/images/map2.jpg"
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: "center",
        backgroundImage: `url(${map})`,
        color: 'white',
    }

}));
const paper1 = {
    height: "95%"
};

export default function Header() {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12}>
            <Paper className={classes.paper} style={paper1}>
                <div >
                    <h1 className="display-1" style={{
                        fontFamily: 'Lobster'
                    }}> Countries In The World </h1>
                    <Link to={`/countries/pages/1`}  >

                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}

                        >
                            Our Country List
            </Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <div>
                        <h5>Visit Our Repository If You Interested With Our Works</h5>
                        <a href="https://github.com/Segitiga-Bermuda/map-app">

                            <img alt="Github" height="100px" className="logo" src={Git} />
                        </a>

                    </div>
                </div>
            </Paper>
        </Grid>
    );
}
