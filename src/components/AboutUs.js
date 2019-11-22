import React from 'react'
import image1 from '../assets/images/meiashari.jpg'
import image2 from '../assets/images/yazid.png'
import image3 from '../assets/images/yosua.png'
import image4 from '../assets/images/apriadi.jpeg'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'

export default function AboutUs() {
    return (
        <Container>

            <CardDeck>
                <Card style={{minwidth:"100%"}}>
                    <Card.Img style={{minwidth:"100%", height:"200px"}}variant="top" src={image1} />
                        <Card.Body >
                            <Card.Title style={{textAlign:"center"}}>@Meiashari</Card.Title>
                                <Card.Text>
                                    Github: 
                                </Card.Text>
                        </Card.Body>
                <Card.Footer>
                <small className="text-muted">Quote:</small>
                </Card.Footer>
                </Card>

                <Card style={{minwidth:"100%", height:"auto"}}>
                    <Card.Img style={{minwidth:"100%", height:"200px"}}variant="top" src={image2} />
                        <Card.Body >
                            <Card.Title style={{textAlign:"center"}}>@GodsEnWrath</Card.Title>
                                <Card.Text>
       
                                </Card.Text>
                        </Card.Body>
                <Card.Footer>
                <small className="text-muted">Quote:</small>
                </Card.Footer>
                </Card>

                <Card style={{minwidth:"100%", height:"auto"}}>
                    <Card.Img style={{minwidth:"100%", height:"200px"}} variant="top" src={image3} />
                        <Card.Body >
                            <Card.Title style={{textAlign:"center"}}>Atallabela Yosua</Card.Title>
                                <Card.Text>
       
                                </Card.Text>
                        </Card.Body>
                <Card.Footer>
                <small className="text-muted">Quote:</small>
                </Card.Footer>
                </Card>

                <Card style={{minwidth:"100%", height:"auto"}}>
                    <Card.Img style={{minwidth:"100%", height:"200px"}}variant="top" src={image4} />
                        <Card.Body >
                            <Card.Title style={{textAlign:"center"}}>Apriadi</Card.Title>
                                <Card.Text>
       
                                </Card.Text>
                        </Card.Body>
                <Card.Footer>
                <small className="text-muted">Quote:</small>
                </Card.Footer>
                </Card>

</CardDeck>

        </Container>
    )
}
