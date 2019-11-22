import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Header() {
    return (
        <div>
            <Card bg="primary" text="white">
                <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>
                        <h1 style={{textAlign:"center"}}>Special Country</h1>
                        </Card.Title>
                            <Card.Text>
                            {/* mau isi apa, terserah */}
                            </Card.Text>
    
                    </Card.Body>
            </Card>
        </div>
    )
}
