import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    FormControl,
    FormText,
    Button,
    Row,
    Col,
    Image
} from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import TeamWork from '../assets/images/teamwork.png'
import NavBar from './NavBar'
import Background from '../assets/images/background-2.jpg'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.props = props

        this.state = {
            lastName: '',
            firstName: '',
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    handleClick() {
        if (this.state.firstName === '' || this.state.lastName === '' ||
            this.state.email === '' || this.state.password === '') {
            alert('Harap isi semua field!')
            return null
        }

        localStorage.setItem('user', JSON.stringify(this.state))
        this.props.history.push('/sign-in')
    }

    render() {
        return (
            <div style={{
                backgroundImage: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: window.innerHeight - 56 + 'px'
            }}>
                <NavBar />
                <Form className="forms" style={{
                    backgroundColor: '#ffffff'
                }}>
                    <Image roundedCircle src={TeamWork} style={{
                        width: '150px',
                        height: 'auto'
                    }} />
                    <FormGroup>
                        <Row>
                            <Col>
                                <FormControl type="text" inline name="firstName" placeholder="First Name" value={this.state.firstName} onChange={e => this.handleChange(e)} />
                            </Col>
                            <Col>
                                <FormControl type="text" inline name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={e => this.handleChange(e)} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <FormControl type="text" name="email" placeholder="Email" value={this.state.email} onChange={e => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <FormControl type="password" name="password" placeholder="Password" value={this.state.password} onChange={e => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <FormText style={{
                            textAlign: 'left'
                        }}>
                            <Link to="/sign-in">
                                Already have an account, click this link.
                            </Link>
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Button
                            variant="success"
                            style={{
                                borderRadius: '5px',
                                fontWeight: 900
                            }}
                            onClick={this.handleClick}
                        >
                            Sign Up
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default withRouter(SignUp)