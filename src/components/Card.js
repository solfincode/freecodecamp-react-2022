import React from "react";
import {
  CardCon,
  ImageCon,
  ContentCon,
  Title,
  Body,
  PriceTag,
} from "../assets/styled";

const Card = ({ imgurl, title, mile, type, isOpen }) => {
  return (
    <>
      {type == "marginRight" ? (
        <CardCon marginRight>
          {isOpen ? <PriceTag>sold out</PriceTag> : <PriceTag>Online</PriceTag>}
          <ImageCon src={imgurl} alt="image" style={{ width: "100%" }} />
          <ContentCon>
            <Title>{title}</Title>
            <Body>{mile} miles away</Body>
          </ContentCon>
        </CardCon>
      ) : (
        <CardCon>
          {isOpen ? <PriceTag>sold out</PriceTag> : <PriceTag>Online</PriceTag>}
          <ImageCon src={imgurl} alt="image" style={{ width: "100%" }} />
          <ContentCon>
            <Title>{title}</Title>
            <Body>{mile} miles away</Body>
          </ContentCon>
        </CardCon>
      )}
    </>
  );
};

export default Card;
