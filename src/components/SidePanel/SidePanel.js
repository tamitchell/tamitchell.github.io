import React from "react";
import { Container } from 'reactstrap';
import Profile from './Profile';
import { Skills } from './Skills';
import SideTabNavigation from './SideTabNavigation'

function SidePanel(props) {
  if (props["viewState"]) {
    return ( <Container fluid="true" className="inner-container">
    <Profile />
    <Skills />  
    </Container>)
  } else {
    return (<Container fluid="true" className="inner-container">
      <SideTabNavigation/>
    </Container>)
  }
  
};

export default SidePanel;
