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
                            <Link to="/sign-up" className="nav-link">
                                Sign Up
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/sign-in" className="nav-link">
                                Sign In
                            </Link>
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
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/about-us" className="nav-link">
                        About Us
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/countries/pages/1" className="nav-link">
                        Countries
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/sign-out" className="nav-link">
                        Sign Out
                    </Link>
                </Nav.Item>
            </Navbar>
        )
    }
}
