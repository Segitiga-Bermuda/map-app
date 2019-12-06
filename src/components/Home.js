import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Body from "./Body";
import Bg from "../assets/images/2.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${Bg})`
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: "center",

        color: theme.palette.text.secondary
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <NavBar></NavBar>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Header></Header>
                    <Body></Body>
                </Grid>
                <Footer></Footer>
            </div>
        </div>
    );
}