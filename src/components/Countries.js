import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div>
        {this.state.data.length > 0 &&
          this.state.data.map(({ name, flag }, key) => {
            return (
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Button variant="primary"><Link to={`/countries/${name.replace(/\s/g, '-').toLowerCase()}`}>Go somewhere</Link></Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    );
  }
}
