import React from 'react'
import {Row, Col} from 'react-materialize'

const Employment = () => (
    <Row className="employment-component">
        <h1>Employment</h1>
        <Row>
            <Col s={12} m={4} l={4}>
            <a href="http://srtlabs.com/"> 
            <img src={require('../img/srt.png')} alt="Science Robotics and Technologies logo" title="Science Robotics and Technologies logo" />
            </a>
            </Col>
            <Col s={12} m={8} l={8}>
                <h5>
                Service Robotics &amp; Technologies
                </h5>
                <h6>
                    Front End Web Developer
                    <br />
                    October 2018 - Present
                </h6>
                <p>
                Service Robotics  Technologies, Inc. (SRT) is a Virginia-based service robotics integration company bringing smart building systems to service industry businesses and commercial facilities. 
                I was asked to redesign their website with an attractive color scheme and flexible layout optimal for mobile, tablet, and desktop view.
                </p>
                <p>Technologies Used: ReactJS, PHP, Symphony, Javascript(ES6), CSS3 </p>
            </Col>
        </Row>
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
                    <br />
                    March 2018 - April 2018
                </h6>
                <p>
                Happy Tail VA LLC is a animal care company that provides services such as dog walking, animal boarding, and vaccination administration.
                I was asked to redesign their website with an attractive color scheme and flexible layout optimal for mobile, tablet, and desktop view.
                </p>
                <p>Technologies Used: Javascript(ES6), HTML + SASS, Bootstrap, Surge (for deployment)</p>
            </Col>
        </Row>
    </Row>
)

export default Employment