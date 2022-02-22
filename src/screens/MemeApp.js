import React, { useState, useRef } from "react";
import {
  BoxCon,
  Nav,
  Container,
  InputCon,
  Input,
  Button,
} from "../assets/styled";

//import image data
import MemeImg from "../lib/imgData";

const MemeApp = () => {
  const [url, setUrl] = useState("");
  const [topTitle, setTopTitle] = useState("");
  const [bottomTitle, setBottomTitle] = useState("");

  const topRef = useRef();
  const bottomRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * MemeImg.length);
    const url = MemeImg[randomNumber].url;
    setUrl(url);
    setBottomTitle(bottomRef.current.value);
    setTopTitle(topRef.current.value);
  };

  //   const handleChangeTop = () => {
  //     setTopTitle(topRef.current.value);
  //   };

  //   const handleChangeBottom = () => {
  //     setBottomTitle(bottomRef.current.value);
  //   };
  console.log(bottomTitle, topTitle);
  return (
    <BoxCon>
      <Nav>
        <div>Meme Generator App</div>
        <div>react course - project3</div>
      </Nav>
      <Container>
        <InputCon>
          <Input type="text" placeholder="top message" ref={topRef} />
          <Input type="text" placeholder="bottom message" ref={bottomRef} />
        </InputCon>
        <Button onClick={(e) => handleClick(e)}>get new meme image</Button>
        <img style={{ width: "458px", marginTop: "20px" }} src={url} />
        <div
          style={{
            position: "relative",
            fontSize: "50px",
            color: "black",
          }}
        >
          {topTitle}
        </div>
        <div
          style={{
            position: "relative",
            fontSize: "50px",
            color: "white",
          }}
        >
          {bottomTitle}
        </div>
      </Container>
    </BoxCon>
  );
};

export default MemeApp;
