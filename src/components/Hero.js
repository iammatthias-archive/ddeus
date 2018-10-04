import React from "react";
import styled from "react-emotion";
import Image from "gatsby-image";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 7rem;
  grid-template-areas: "Left Right";
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    grid-gap: 3.5rem;
    grid-template-columns: 1fr;
    grid-template-areas: "Left" "Right";
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    grid-template-areas: "Left" "Right";
  }
`;

const Picture = styled.div`
  grid-area: Left;
  width: 100%;
`;
const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  grid-area: Right;
  text-align: left;
`;

const Hero = ({ uid, preheader, title, subheader, bio, sizes }) => (
  <Content>
    <Copy>
      <h2>{preheader}</h2>
      <h1>{title}</h1>
      <h2>{subheader}</h2>
      <p dangerouslySetInnerHTML={{ __html: bio }} />
    </Copy>
    <Picture>
      <Image sizes={sizes} />
    </Picture>
  </Content>
);

export default Hero;
