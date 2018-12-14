import React from 'react';
import styled from 'react-emotion';
import Image from 'gatsby-image';
import { randomNumber } from '../utils/randomNumber';

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 7rem;
  grid-template-areas: 'Left Right';
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    margin-top: 5rem;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr;
    grid-template-areas: 'Right' 'Left';
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    grid-template-areas: 'Right' 'Left';
  }
`;

const Picture = styled(Image)`
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
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    text-align: center;
  }
`;

const Hero = ({ uid, preheader, title, subheader, bio, sizes }) => (
  <Content>
    <Copy>
      <h2>{preheader}</h2>
      <h1>{title}</h1>
      <h2>{subheader}</h2>
      <p dangerouslySetInnerHTML={{ __html: bio }} />
    </Copy>
    <Picture
      sizes={sizes}
      style={{
        borderRadius: `${randomNumber(3, 7) * 10}% ${randomNumber(3, 7) *
          10}% ${randomNumber(3, 7) * 10}% ${randomNumber(3, 7) *
          10}% / ${randomNumber(3, 7) * 10}% ${randomNumber(3, 7) *
          10}% ${randomNumber(3, 7) * 10}% ${randomNumber(3, 7) * 10}%`,
        overflow: 'hidden'
      }}
    />
  </Content>
);

export default Hero;
