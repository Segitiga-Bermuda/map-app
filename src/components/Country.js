import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, Jumbotron, Carousel, Table } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import Map from '../assets/images/map.jpg'
import Badge from 'react-bootstrap/Badge'

class Country extends Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            country: {},
            area: 0,
            population: 0,
            translations: []
        }

        this.formatNumber = this.formatNumber.bind(this)
        this.formatObject = this.formatObject.bind(this)
    }

    formatNumber(integer) {
        let num = integer.toString().split('').reverse(),
            x = 0,
            y = 0,
            returnVal = []

        while (x < num.length) {
            returnVal.push(num[x])

            ++x
            ++y
            if (y === 3) {
                if (x === num.length) continue

                returnVal.push('.')
                y = 0
            }
        }

        return returnVal.reverse().join('')
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
                this.setState({
                    country: res.data.find(country => {
                        return country.name.replace(/\s/g, '-').toLowerCase() == name
                    }),
                })

                this.setState({
                    area: this.formatNumber(this.state.country.area),
                    population: this.formatNumber(this.state.country.population),
                    translations: this.formatObject(this.state.country.translations)
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    formatObject(object) {
        let returnVal = [],
            key = []

        for (key in object) {
            returnVal.push({
                language: key,
                translation: object[key]
            })
        }

        return returnVal
    }

    render() {
        return (
            <div>
                <Carousel interval={0} indicators={false}>
                    <Carousel.Item>
                        <Jumbotron fluid={true} className="d-flex align-items-center justify-content-center" style={{
                            backgroundImage: `url(${this.state.country.flag})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            height: window.innerHeight + 'px'
                        }}>
                            <h1 className="text-primary display-1 effect-a" style={{
                                backgroundColor: 'rgba(80, 80, 80, 0.75)',
                                fontFamily: 'Merienda',
                                padding: '25px 0',
                                width: '100%'
                            }}>
                                {
                                    this.state.country.name
                                }
                            </h1>
                        </Jumbotron>
                    </Carousel.Item>
                    <Carousel.Item style={{
                    }}>
                        <Jumbotron style={{
                            backgroundImage: `url(${Map})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            height: window.innerHeight + 'px'
                        }}>
                            <div className="mx-auto effect-b" style={{
                                backgroundImage: `url(${this.state.country.flag})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                borderRadius: '50%',
                                height: '100px',
                                margin: '25px',
                                width: '100px'
                            }} />
                            <h1 className="text-danger effect-a" style={{
                                backgroundColor: 'rgba(80, 80, 80, 0.75)',
                                fontFamily: '"Pacifico"',
                                marginBottom: '50px',
                                padding: '25px 0'
                            }}>
                                {
                                    this.state.country.name
                                }
                                <small className="text-info" style={{
                                    padding: '25px 0'
                                }}>
                                    {
                                        ' (' + this.state.country.nativeName + ')'
                                    }
                                </small>
                            </h1>
                            <Row noGutters={true} style={{
                                margin: '0 auto',
                                width: '80%',
                            }}>
                                <Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 1 }} style={{
                                    maxHeight: '400px',
                                    overflow: 'auto'
                                }}>
                                    <details style={{
                                        maxHeight: '300px'
                                    }}>
                                        <summary>
                                            <h1 className="text-danger" style={{
                                                fontFamily: '"Patrick Hand"'
                                            }}>
                                                Geography
                                            </h1>
                                        </summary>
                                        <Table striped borderless hover variant="dark" style={{
                                            width: '80%',
                                            margin: '0 auto',
                                            padding: '0 25px'
                                        }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Capital
                                                </td>
                                                    <td>
                                                        :
                                                </td>
                                                    <td>
                                                        {
                                                            this.state.country.capital
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Size
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        {
                                                            this.state.area
                                                        }
                                                        &nbsp;km<sup>2</sup>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Time Zones
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        <details>
                                                            <summary>
                                                                Time Zones&nbsp;&nbsp;
                                                                <Badge pill={true} variant="success">
                                                                    {
                                                                        this.state.country.timezones &&
                                                                        this.state.country.timezones.length
                                                                    }
                                                                </Badge>
                                                            </summary>
                                                            <ul style={{
                                                                listStyleType: 'disc'
                                                            }}>
                                                                {
                                                                    this.state.country.timezones &&
                                                                    this.state.country.timezones.map(timezone => <li>{timezone}</li>)
                                                                }
                                                            </ul>
                                                        </details>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Region
                                                </td>
                                                    <td>
                                                        :
                                                </td>
                                                    <td>
                                                        {
                                                            this.state.country.region
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Subregion
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        {
                                                            this.state.country.subregion
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Regional Blocs
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        <details>
                                                            <summary>
                                                                Regional Blocs&nbsp;&nbsp;
                                                                <Badge pill={true} variant="success">
                                                                    {
                                                                        this.state.country.regionalBlocs &&
                                                                        this.state.country.regionalBlocs.length
                                                                    }
                                                                </Badge>
                                                            </summary>
                                                            <ul style={{
                                                                listStyleType: 'disc'
                                                            }}>
                                                                {
                                                                    this.state.country.regionalBlocs &&
                                                                    this.state.country.regionalBlocs.map(regionalBloc => <li>{regionalBloc.name} <small className="text-secondary">({regionalBloc.acronym})</small></li>)
                                                                }
                                                            </ul>
                                                        </details>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </details>
                                </Col>
                                <Col md={{ span: 6, order: 2 }} xs={{ span: 12, order: 2 }}>
                                    <details style={{
                                        maxHeight: '300px',
                                        overflow: 'auto'
                                    }}>
                                        <summary>
                                            <h1 className="text-danger" style={{
                                                fontFamily: '"Patrick Hand"'
                                            }}>
                                                Others
                                            </h1>
                                        </summary>
                                        <Table striped hover borderless variant="dark" style={{
                                            width: '80%',
                                            margin: '0 auto',
                                            padding: '0 25px'
                                        }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Native Name
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        {
                                                            this.state.country.nativeName
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Name Translations
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        <details>
                                                            <summary>
                                                                Name Translations&nbsp;&nbsp;
                                                            <Badge pill={true} variant="success">
                                                                    {
                                                                        this.state.country.translations &&
                                                                        Object.keys(this.state.country.translations).length
                                                                    }
                                                                </Badge>
                                                            </summary>
                                                            <ul type="disc">
                                                                {
                                                                    this.state.translations.map(({ language, translation }) => (<li>{language + ': ' + translation}</li>))
                                                                }
                                                            </ul>
                                                        </details>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Demonym
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        {
                                                            this.state.country.demonym
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Population
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        {
                                                            this.state.population
                                                        }
                                                        &nbsp;Lives
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Gini
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        {
                                                            this.state.country.gini
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Languages
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        <details>
                                                            <summary>
                                                                Languages&nbsp;&nbsp;
                                                                <Badge pill={true} variant="success">
                                                                    {
                                                                        this.state.country.languages &&
                                                                        this.state.country.languages.length
                                                                    }
                                                                </Badge>
                                                            </summary>
                                                            <ul style={{
                                                                listStyleType: 'disc'
                                                            }}>
                                                                {
                                                                    this.state.country.languages &&
                                                                    this.state.country.languages.map(language => <li>{language.name}</li>)
                                                                }
                                                            </ul>
                                                        </details>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Calling Codes
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        <details>
                                                            <summary>
                                                                Calling Codes&nbsp;&nbsp;
                                                                <Badge pill={true} variant="success">
                                                                    {
                                                                        this.state.country.callingCodes &&
                                                                        this.state.country.callingCodes.length
                                                                    }
                                                                </Badge>
                                                            </summary>
                                                            <ul style={{
                                                                listStyleType: 'disc'
                                                            }}>
                                                                {
                                                                    this.state.country.callingCodes &&
                                                                    this.state.country.callingCodes.map(callingCode => <li>{callingCode}</li>)
                                                                }
                                                            </ul>
                                                        </details>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Currencies
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        <details>
                                                            <summary>
                                                                Currencies&nbsp;&nbsp;
                                                                <Badge pill={true} variant="success">
                                                                    {
                                                                        this.state.country.currencies &&
                                                                        this.state.country.currencies.length
                                                                    }
                                                                </Badge>
                                                            </summary>
                                                            <ul style={{
                                                                listStyleType: 'disc'
                                                            }}>
                                                                {
                                                                    this.state.country.currencies &&
                                                                    this.state.country.currencies.map(currency => <li>{currency.name} <small className="text-secondary">{currency.code}/{currency.symbol}</small></li>)
                                                                }
                                                            </ul>
                                                        </details>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Top Level Domain
                                                    </td>
                                                    <td>
                                                        :
                                                    </td>
                                                    <td>
                                                        <details>
                                                            <summary>
                                                                Top Level Domain&nbsp;&nbsp;
                                                                <Badge pill={true} variant="success">
                                                                    {
                                                                        this.state.country.topLevelDomain &&
                                                                        this.state.country.topLevelDomain.length
                                                                    }
                                                                </Badge>
                                                            </summary>
                                                            <ul style={{
                                                                listStyleType: 'disc'
                                                            }}>
                                                                {
                                                                    this.state.country.topLevelDomain &&
                                                                    this.state.country.topLevelDomain.map(topLevelDomain => <li>{topLevelDomain}</li>)
                                                                }
                                                            </ul>
                                                        </details>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </details>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Carousel.Item>
                </Carousel>
            </div >
        )
    }
}

export default withRouter(Country)