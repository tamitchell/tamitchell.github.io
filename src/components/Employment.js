import React from 'react'
import {Row, Col} from 'react-materialize'

const Employment = () => (
    <Row className="employment-component">
        <h1>Employment</h1>
        <Row>
            <Col s={12} m={4} l={4}>
            <a href="http://happytail-dev.surge.sh"> 
            <img src={require('../img/happytail.png')} alt="Happy Tail Logo" title="Happy Tail VA LLC" />
            </a>
            </Col>
            <Col s={12} m={8} l={8}>
                <h5>
                    Happy Tail VA LLC
                </h5>
                <h6>
                    Web Developer | UX Designer
                </h6>
                <p>
                Happy Tail VA LLC is a animal care company that provides services such as dog walking, animal boarding, and vaccination administration.
                I redesigned their website with an attractive color scheme and flexible layout optimal for mobile, tablet, and desktop view.
                </p>
                <p>Technologies Used: Javascript(ES6), HTML + SASS, Bootstrap, Surge (for deployment)</p>
            </Col>
        </Row>
    </Row>
)

export default Employment