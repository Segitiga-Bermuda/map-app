import React from 'react'
//import Jumbotron from 'react-bootstrap/Jumbotron'
import map from '../assets/images/map.jpg'
import Image from 'react-bootstrap/Image'

export default function Home() {
    
    return (
        <div>
            {/* <Jumbotron> */}
                <h1 style={{textAlign:"center"}}>M A P</h1>

                    <Image style={{backgroundSize:"cover"}} src={map} fluid />

                    
  
            {/* </Jumbotron> */}
        </div>
    )
}
