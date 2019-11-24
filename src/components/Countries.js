import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import {withRouter} from 'react-router-dom'

class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      data2: [],
      length: 10,
      maxLength: 0,
      page: 1,
      isClicked: false
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let val = e.target.value

    this.props.history.replace(`/countries/pages/${this.state.page}/items/${val}`)
  }

  componentDidMount = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        this.setState({ data: response.data, data2: response.data });
        this.setState({
          maxLength: this.state.data.length, 
          length: this.props.match.params.items,
          page: this.props.match.params.page
        })

        let newdata = [],
            page = this.state.page - 1,
            offset = page * this.state.length,
            x = offset,
            y = offset + this.state.length

        while (this.state.data.length > x) {
            if ((this.state.data.length - x) >= this.state.length) {
                newdata.push(this.state.data.slice(x, y))
            } else {
                newdata.push(this.state.data.slice(x, y + (this.state.data.length - x)))
            }

            x += this.state.length
            y += this.state.length
        }

        console.log(newdata)

        this.setState({
            data: newdata[0]
        })





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
        <input type="number" onChange={e => this.handleChange(e)} value={this.state.length} min="1" max={this.state.data.maxLength} step="1" />
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

export default withRouter(Countries)