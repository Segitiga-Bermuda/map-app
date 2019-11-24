import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {this.state.data.length > 0 &&
          this.state.data.map(({ name, flag }, key) => {
            return (
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img
                  style={{
                    height: "200px",
                    justifyContent: "space-around"
                  }}
                  variant="top"
                  src={flag}
                />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Button variant="outline-primary">
                    <Link
                      to={`/countries/${name
                        .replace(/\s/g, "-")
                        .toLowerCase()}`}
                    >
                      More Details
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            );
          })}

      </div>
    );
  }
}
