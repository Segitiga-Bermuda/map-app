import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    FormControl,
    FormText,
    Button,
    Image
} from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import TeamWork2 from '../assets/images/teamwork-2.png'
import NavBar from './NavBar'
import Background from '../assets/images/background-1.jpg'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.email == '' || this.state.password == '') {
            alert('Harap isi semua field!')

            return null
        }

        let user = JSON.parse(localStorage.getItem('user'))

        if (this.state.email == user.email && this.state.password == user.password) {
            localStorage.setItem('isVerified', JSON.stringify(true))

            this.props.history.replace('/home')
        } else {
            alert('Email atau password salah!')
        }
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
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
                    <Image roundedCircle src={TeamWork2} style={{
                        width: '150px',
                        height: 'auto'
                    }} />
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
                            <Link to="/sign-up">
                                Don't have an account, click this link and create one.
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
                            Sign In
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default withRouter(SignIn)