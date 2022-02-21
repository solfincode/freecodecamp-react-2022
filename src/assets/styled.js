import styled from "styled-components";

export const Header = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin: 20px;
  border-radius: 15px;
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
`;
export const BrandTitle = styled.div`
  margin-top: 7px;
`;
export const BrandImage = styled.img`
  width: 30px;
`;

export const ListStyle = styled.li`
  list-style: none;
  margin-right: 15px;
  cursor: pointer;
`;

export const NavbarEl = styled.ul`
  display: flex;
`;

export const ULContainer = styled.ul``;

export const LIEl = styled.li`
  text-align: left;
  list-style-type: disc;
  margin-bottom: 10px;
  line-height: 1.5rem;
`;

export const BoxCon = styled.div`
  width: 500px;
  margin: 0 auto;
  background-color: ${(props) => (props.white ? "white" : "#fbbf24")};
  border-radius: 15px;
  margin-top: 100px;
`;

export const Nav = styled.div`
  display: flex;
  flex-dirction: row;
  justify-content: space-between;
  background-color: ${(props) => (props.red ? "rgb(255, 56, 92)" : "#3b82f6")};
  padding: 20px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const Container = styled.div`
  padding: 20px;
  color: black;
  ${(props) =>
    props.rows ? "display:flex;flex-direction:row;justify-content:center" : ""}
`;

export const CardCon = styled.div`
  width: 200px;
  height: 100%;
  background-color: black;
  border-radius: 15px;
  color: white;
  ${(props) => (props.marginRight ? "margin-right:20px" : "")}
`;

export const ImageCon = styled.img`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const ContentCon = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const Body = styled.p`
  font-size: 13px;
`;

export const PriceTag = styled.div`
  z-index: 100;
  position: absolute;
  padding: 3px 10px 5px 10px;
  background-color: black;
  border-radius: 10px;
  margin: 10px;
  font-size: 0.8rem;
`;
