import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  gogo: {
    margin: "5px",
    padding: "2.5px",
    textAlign: "center",
    color: "white",
    backgroundColor: "#d32f2f",
    fontFamily: "Berkshire Swash"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.gogo}>
      <p> &copy; Copyright by Team 1 Countries API </p>
    </div>
  );
}
