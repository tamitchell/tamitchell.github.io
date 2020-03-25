import React, {useState} from "react";
import { Container, Row, Collapse, Button,} from "reactstrap";
import {
  frontEnd,
  backEnd,
  dataBases,
  design,
  methodologies,
  softSkills
} from "./data";


export const Skills = () => {
  return (
  <Container className="skills-content">
    <Row>
    <h2>Skills/Tools</h2>
    </Row>
    <div className="skill-list-container">
      <Row className="skill-list">
     <h4>Front End</h4>
        <ul>
          {frontEnd.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </Row>
      <Row className="skill-list">
        <h4>Back End</h4>
        <ul>
          {backEnd.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </Row>
      <Row className="skill-list">
        <h4>Databases</h4>
        <ul>
          {dataBases.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </Row>
      <Row className="skill-list">
        <h4>Methodologies</h4>
        <ul>
          {methodologies.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </Row>
      <Row className="skill-list">
        <h4>Design</h4>
        <ul>
          {design.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </Row>
      <Row className="skill-list">
        <h4>Soft Skills</h4>
        <ul>
          {softSkills.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
      </Row>
    </div>
  </Container>
  )};

