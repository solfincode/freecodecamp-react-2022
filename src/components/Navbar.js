import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  BrandContainer,
  BrandImage,
  BrandTitle,
  ListStyle,
  NavbarEl,
} from "../assets/styled";
//image
import logo from "../assets/logo.svg";

const Navbar = ({ title }) => {
  return (
    <>
      <Header>
        <BrandContainer>
          <BrandImage src={logo} style={{ width: "50px" }} />
          <BrandTitle>{title}</BrandTitle>
        </BrandContainer>
        <NavbarEl>
          <Link to="/">
            <ListStyle>main</ListStyle>
          </Link>
          <Link to="/first-project">
            <ListStyle>React Fun Facts</ListStyle>
          </Link>
          <Link to="/airbnb-clone">
            <ListStyle>airbnb clone</ListStyle>
          </Link>
          <Link to="/memeapp">
            <ListStyle>meme app</ListStyle>
          </Link>
        </NavbarEl>
      </Header>
    </>
  );
};

export default Navbar;
