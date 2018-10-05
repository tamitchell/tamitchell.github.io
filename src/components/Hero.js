import React from "react";
import {Link} from 'react-router-dom'
import {Row} from 'react-materialize'

export default function Hero() {
  return <Row className="hero-container">
      <div className="text-container">
        <h1>Tasha Mitchell</h1>
        <h5><Link to="/developer">
        Web Developer | 
        </Link>
        <Link to="/designer">
        Designer |
        </Link> 
        <Link to="/artist">
        Artist
        </Link></h5>
      </div>
    </Row>
  
}


