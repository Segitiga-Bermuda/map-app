import React from 'react'
import Card from 'react-bootstrap/Card'
//import Footer from 'react-bootstrap/ModalFooter'

export default function Footer() {
    return (
        <div>
            <Card className="text-center" bg="info" text="white">
                <Card.Header>FOOTER</Card.Header>
                    <Card.Body>
                        <Card.Title>Special Country</Card.Title>
                            <Card.Text>
                            We create this Country web with react bootstrap
                            </Card.Text>
    
                        </Card.Body>
                <Card.Footer className="text-muted">Copy-right by Team Country</Card.Footer>
            </Card>
        </div>
    )
}
