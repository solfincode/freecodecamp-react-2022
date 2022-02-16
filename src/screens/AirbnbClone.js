import React from "react";
import { ULContainer, LIEl, BoxCon, Nav, Container } from "../assets/styled";
import Card from "../components/Card";

const AirbnbClone = () => {
  return (
    <>
      <BoxCon white>
        <Nav red>
          <div>Airbnb Travel Card</div>
          <div>react course - project2</div>
        </Nav>
        <Container rows>
          <Card
            type="marginRight"
            mile="88"
            title="Big Bear Lake"
            imgurl="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=480"
          />

          <Card
            mile="260"
            title="Mammoth Lakes"
            imgurl="https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg?im_w=480"
          />
        </Container>
      </BoxCon>
    </>
  );
};

export default AirbnbClone;