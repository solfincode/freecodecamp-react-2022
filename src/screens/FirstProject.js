import React from "react";
import Navbar from "../components/Navbar";
import { ULContainer, LIEl, BoxCon, Nav, Container } from "../assets/styled";

const FirstProject = () => {
  return (
    <>
      <BoxCon>
        <Nav>
          <div>React Facts</div>
          <div>react course - project1</div>
        </Nav>
        <Container>
          <h3>Fun Facts about React</h3>
          <ULContainer>
            <LIEl>was first released in 2013</LIEl>
            <LIEl>was originally created by jordan walke</LIEl>
            <LIEl>has well over 100k stars on github</LIEl>
            <LIEl>is maintained by facebook</LIEl>
            <LIEl>
              powers thousands of enterprise apps including mobile app
            </LIEl>
          </ULContainer>
        </Container>
      </BoxCon>
    </>
  );
};

export default FirstProject;
