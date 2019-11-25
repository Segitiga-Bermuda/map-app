import React, { Component } from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        let isVerified = JSON.parse(localStorage.getItem('isVerified'))

        if (!isVerified) {
            return (
                <Navbar expand="md" className="bg-primary justify-content-between" style={{
                    color: '#ffffff',
                    fontWeight: 900
                }}>
                    <Navbar.Brand>
                        Bermuda &#9650; Triangle
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/sign-up">
                                    Sign Up
                        </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/sign-in">
                                    Sign In
                            </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            )
        }

        return (
            <Navbar expand="md" className="bg-primary justify-content-between" style={{
                color: '#ffffff',
                fontWeight: 900
            }}>
                <Navbar.Brand>
                    Bermuda &#9650; Triangle
                </Navbar.Brand>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/home">
                            Home
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/about-us">
                            About Us
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/countries/pages/1">
                            Countries
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/sign-out">
                            Sign Out
                        </Link>
                    </Nav.Link>
                </Nav.Item>
            </Navbar>
        )
    }
}
