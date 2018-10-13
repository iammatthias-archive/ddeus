import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import { rgba } from 'polished';
import { randomNumber } from '../utils/randomNumber';

const Item = styled(Flex)`
  flex-basis: calc(99.9% * 1 / 2 - 4rem);
  max-width: calc(99.9% * 1 / 2 - 4rem);
  width: calc(99.9% * 1 / 2 - 4rem);
  text-align: center;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    margin-top: 4rem !important;
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    &:first-child {
      margin-top: 0rem !important;
    }
  }
`;

const ItemTitle = styled.h3`
  color: ${props => props.theme.colors.bg};
  font-size: 2rem;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
  transition: all 300ms;
  transform: translateY(0rem);
`;

const ItemSubtitle = styled.p`
  color: ${props => props.theme.colors.bg};
  margin: 0.25rem 0;
`;
const ItemDate = styled.p`
  color: ${props => props.theme.colors.bg};
  margin: 0.25rem 0;
  font-style: italic;
`;

const Overlay = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => rgba(`${props.theme.colors.primary}`, 0.5)};
  z-index: 10;
  opacity: 0;
  transition: all 300ms;
  span {
    z-index: 20;
    color: ${props => props.theme.colors.bg};
    opacity: 0;
    transition: all 300ms;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    opacity: 100;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  transition: all 300ms;
  height: 60vh;
  .gatsby-image-outer-wrapper {
    position: static !important;
    > div {
      position: static !important;
    }
  }
  &:hover {
    transform: scale(0.95);
    ${Overlay} {
      opacity: 1;
      span {
        opacity: 1;
      }
    }
    @media (max-width: ${props => props.theme.breakpoint.m}) {
      transform: none;
    }
  }
`;

const GridItem = ({ uid, date, sizes, alt, title, subtitle }) => (
  <Item flexDirection="column" key={uid}>
    <StyledLink
      to={uid}
      style={{
        marginTop: `${randomNumber(1, 6) * 2}rem`,
        borderRadius: `${randomNumber(3, 4) * 10}% ${randomNumber(4, 5) *
          10}% ${randomNumber(6, 7) * 10}% ${randomNumber(3, 4) *
          10}% / ${randomNumber(5, 6) * 10}% ${randomNumber(3, 4) *
          10}% ${randomNumber(6, 7) * 10}% ${randomNumber(3, 4) * 10}%`,
        overflow: 'hidden'
      }}
    >
      <Overlay
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <ItemTitle>{title}</ItemTitle>
        <ItemSubtitle>{subtitle}</ItemSubtitle>
        <ItemDate>{date}</ItemDate>
      </Overlay>
      <Image sizes={sizes} alt={alt} style={{}} />
    </StyledLink>
  </Item>
);

export default GridItem;

GridItem.propTypes = {
  uid: PropTypes.string.isRequired,
  sizes: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};
