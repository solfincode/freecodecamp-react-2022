import React from "react";
import { CardCon, ImageCon, ContentCon, Title, Body } from "../assets/styled";

const Card = ({ imgurl, title, mile, type }) => {
  return (
    <>
      {type == "marginRight" ? (
        <CardCon marginRight>
          <ImageCon src={imgurl} alt="image" style={{ width: "100%" }} />
          <ContentCon>
            <Title>{title}</Title>
            <Body>{mile} miles away</Body>
          </ContentCon>
        </CardCon>
      ) : (
        <CardCon>
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
