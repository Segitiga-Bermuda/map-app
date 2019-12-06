import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Button,
  Pagination,
  PageItem,
  Form,
  FormControl,
  FormGroup,
  Row,
  Col
} from "react-bootstrap";
import { withRouter } from 'react-router-dom'
import WebWorker from '../WebWorker'
import worker from '../worker.js'
import NavBar from './NavBar'

class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      data2: [],
      maxLength: 0,
      page: 1,
      pageItem: [],
      offset: 0,
      keywords: '',
      isVisible: true,
      isFullscreen: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
    this.reload = this.reload.bind(this)
    this.exitSearch = this.exitSearch.bind(this)
    this.makeWindowFullscreen = this.makeWindowFullscreen.bind(this)

    if (!JSON.parse(localStorage.getItem('isVerified'))) {
      this.props.history.replace('/sign-up')
    }
  }

  exitSearch() {
    this.setState({
      keywords: '',
      isVisible: true
    })

    this.reload()
  }

  handleChange(e) {
    let val = e.target.value

    this.setState({
      keywords: val
    })

    if (val === '') {
      this.setState({
        isVisible: true
      })

      return null
    }

    this.search(val)
  }

  search(val) {
    this.worker.postMessage({
      countries: this.state.data2,
      keywords: val
    })
  }

  reload(page = this.state.page) {
    --page

    let newdata = [],
      offset = page * 10,
      x = offset,
      y = offset + 10

    this.setState({
      offset: offset
    })

    while (x < y) {
      if (x >= this.state.maxLength) {
        break
      }

      newdata.push(this.state.data2[x])

      ++x
    }

    this.setState({
      data: newdata
    })
  }

  refresh(val) {
    let path = `/countries/pages/${val}`

    this.props.history.replace(path)
    this.reload(val)
  }

  componentDidMount = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        this.setState({
          data: response.data,
          data2: response.data
        })

        this.setState({
          maxLength: this.state.data2.length,
          page: this.props.match.params.page
        })

        this.reload()

        let z = 1,
          pageItem = []

        while (z <= Math.ceil(this.state.maxLength / 10)) {
          pageItem.push(z)

          ++z
        }

        this.setState({
          pageItem: pageItem
        })

        this.worker = new WebWorker(worker)

        this.worker.addEventListener('message', event => {
          this.setState({
            data: event.data,
            isVisible: false
          })
        })
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentWillUnmount() {
    this.worker = null
  }

  makeWindowFullscreen() {
    if (!this.state.isFullscreen) {
      document.body.requestFullscreen()
    } else {
      document.exitFullscreen()
    }

    this.setState({
      isFullscreen: !this.state.isFullscreen
    })
  }

  render() {
    return (
      <div style={{
        backgroundColor: 'white'
      }}>
        <NavBar />
        <Row>
          <Col md={{ span: 1, order: 1 }} xs={{ span: 12, order: 1 }}>
          </Col>
          <Col md={{ span: 4, order: 2 }} xs={{ span: 12, order: 2 }} style={{
            backgroundColor: 'purple',
            height: window.innerHeight + 'px',
            overflow: 'auto'
          }}>
            <Row style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Col xs={{ span: 8, order: 1 }} style={{
                overflow: 'auto',
                margin: '25px 0'
              }}>
                <Form>
                  <FormGroup>
                    <Button variant="success" block onClick={this.makeWindowFullscreen}>
                      {
                        this.state.isFullscreen ?
                          'Exit Fullscreen' :
                          'Go To Fullscreen'
                      }
                    </Button>
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="text" value={this.state.keywords} onChange={e => this.handleChange(e)} placeholder="Type keywords here..." />
                  </FormGroup>
                  <FormGroup>
                    <Button block variant="danger" onClick={this.exitSearch} style={{
                      display: this.state.isVisible ? 'none' : 'block'
                    }}>
                      Exit Search
                    </Button>
                  </FormGroup>
                </Form>
                <h2 className="text-light" style={{
                  display: this.state.isVisible ? 'block' : 'none',
                }}>
                  Pagination
                </h2>
                <div className="d-flex justify-content-center" style={{
                  visibility: this.state.isVisible ? 'visible' : 'hidden',
                }}>
                  <Pagination style={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '80%',
                    margin: '0 auto'
                  }}>
                    {
                      this.state.pageItem.map(item => {
                        return (
                          <PageItem
                            onClick={() => this.refresh(item)}
                            style={{
                              margin: '5px'
                            }}>
                            {
                              item
                            }
                          </PageItem>
                        )
                      })
                    }
                  </Pagination>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 6, order: 3 }} xs={{ span: 11, order: 3 }} style={{
            padding: '25px',
            overflow: 'auto',
            height: window.innerHeight + 'px'
          }}>
            <div
              style={{
                boxSizing: 'border-box',
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
                        <Button variant="outline-primary" onClick={() => {
                          this.props.history.push(`/country/${name
                            .replace(/\s/g, "-")
                            .toLowerCase()}`)
                        }}>
                          More Details
                    </Button>
                      </Card.Body>
                    </Card>
                  );
                })}
            </div>
          </Col>
        </Row >
      </div >
    );
  }
}

export default withRouter(Countries)