import React from "react";
import styled from "react-emotion";
import Image from "gatsby-image";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 3.5rem;
  grid-template-areas: "Left Right";
  text-align: center;
  h1 {
    letter-spacing: 0.2rem;
    line-height: 4.5rem;
  }
  h3 {
    font-size: 1.85rem;
    font-weight: 400;
  }
  h4 {
    font-size: 1.25rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    grid-template-columns: 1fr;
    grid-template-areas: "Left" "Right";
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    grid-template-areas: "Left" "Right";
    h1 {
      line-height: 2.5rem;
    }
  }
`;

const Picture = styled.div`
  grid-area: Left;
  width: calc(100% - 3.5rem);
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    width: 100%;
  }
`;
const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  grid-area: Right;
  text-align: left;
  padding-left: 3.5rem;
`;

const Hero = ({ uid, preheader, title, subheader, bio, sizes }) => (
  <Content>
    <Copy>
      <h4>{preheader}</h4>
      <h1>{title}</h1>
      <h3>{subheader}</h3>
      <p dangerouslySetInnerHTML={{ __html: bio }} />
    </Copy>
    <Picture>
      <Image sizes={sizes} />
    </Picture>
  </Content>
);

export default Hero;
