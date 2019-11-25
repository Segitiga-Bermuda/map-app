import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../assets/images/mei.jpg";
import image2 from "../assets/images/yazid.png";
import image3 from "../assets/images/yosua.png";
import image4 from "../assets/images/apriadi.jpeg";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import github from "../assets/images/github-sign.png";
import linkedin from "../assets/images/linkedin-logo.png";
import Header from "./Header";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { fontFamily } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  gogo: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    backgroundColor: "#3a9539",
    fontFamily: "Berkshire Swash"
  }
}));

export default function AboutUs() {
  const classes = useStyles();
  return (
    <div>
      <NavBar></NavBar>
      <div style={{ padding: "1px", margin: "1px" }}>
        <Header></Header>

        <Grid item xs={12} sm={12}>
          <Paper className={classes.gogo}>
            <h1 className="display-4">About Us</h1>
          </Paper>
        </Grid>

        <CardDeck>
          <Card style={{ minwidth: "100%", height: "auto" }}>
            <Card.Img
              style={{
                height: "auto",
                width: "100%",
                justifyContent: "space-around"
              }}
              variant="top"
              src={image1}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Mei Ashari
              </Card.Title>
              <Card.Text>@meiashari</Card.Text>
              <Card.Text>
                <a href="https://github.com/meiashari">
                  {" "}
                  <img width="20px" src={github} alt="ss" />
                </a>
                <a href="https://www.linkedin.com/">
                  {" "}
                  <img width="20px" src={linkedin} alt="ss" />
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                "semua akan mati pada waktunya pada waktunya maka hidup mesti
                have fun, apapun terjadinya~"
              </small>
            </Card.Footer>
          </Card>

          <Card style={{ minwidth: "100%", height: "auto" }}>
            <Card.Img
              style={{
                height: "auto",
                width: "100%",
                justifyContent: "space-around"
              }}
              variant="top"
              src={image2}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                M Yazid Alfarisi
              </Card.Title>
              <Card.Text>@GodsEnWrath</Card.Text>
              <Card.Text>
                <a href="https://github.com/GodsEnWrath">
                  {" "}
                  <img width="20px" src={github} alt="ss" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-yazid-alfarisi-8a1461197/">
                  {" "}
                  <img width="20px" src={linkedin} alt="ss" />
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                "Just Ordinary People who Like To Observe"
              </small>
            </Card.Footer>
          </Card>

          <Card style={{ minwidth: "100%", height: "auto" }}>
            <Card.Img
              style={{
                height: "auto",
                width: "100%",
                justifyContent: "space-around"
              }}
              variant="top"
              src={image3}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Atallabela Yosua
              </Card.Title>
              <Card.Text>@A-Naive-Dreamer</Card.Text>
              <Card.Text>
                <a href="https://github.com/A-Naive-Dreamer">
                  {" "}
                  <img width="20px" src={github} alt="ss" />
                </a>
                <a href="https://www.linkedin.com/in/atallabela-yosua-a77998188/">
                  {" "}
                  <img width="20px" src={linkedin} alt="ss" />
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                "Just usually human who like coding, drawing, writing and
                photography."
              </small>
            </Card.Footer>
          </Card>

          <Card style={{ minwidth: "100%", height: "auto" }}>
            <Card.Img
              style={{
                height: "auto",
                width: "100%",
                justifyContent: "space-around"
              }}
              variant="top"
              src={image4}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Apriadi</Card.Title>
              <Card.Text>@ApriadiM</Card.Text>
              <Card.Text>
                <a href="https://github.com/ApriadiM">
                  {" "}
                  <img width="20px" src={github} alt="ss" />
                </a>
                <a href="https://www.linkedin.com/in/apriadi11/">
                  {" "}
                  <img width="20px" src={linkedin} alt="ss" />
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">"Apriadi is Apriadi"</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <Footer></Footer>
      </div>
    </div>
  );
}
