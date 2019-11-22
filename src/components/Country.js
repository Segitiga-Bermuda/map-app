import React, { Component } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class Country extends Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            country: {}
        }
    }

    componentDidMount() {
        const {
            match: {
                params: {
                    name
                }
            }
        } = this.props

        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                console.log(res.data)
                this.setState({
                    country: res.data.find(country => {
                        console.log(country.name.replace(/\s/g, '-').toLowerCase())
                        return country.name.replace(/\s/g, '-') == name
                    })
                })

                console.log(this.state.country)
            })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default withRouter(Country)