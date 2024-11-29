import React from 'react';
import styled from 'styled-components';
import { dynit, breakpoints, mediaDown } from 'dynit';

const Container = styled.div`
  position: absolute;
  top: ${dynit(breakpoints.mobile, 59, breakpoints.wide, 170)};
  left: 0;

  ${mediaDown(breakpoints.tablet)} {
    order: 1;
    position: static;
    align-self: flex-start;
    margin-bottom: 56px;
  }
`;

const StyledTitle = styled.h1`
  max-width: 434px;
  padding-left: ${dynit(breakpoints.tablet, 50, breakpoints.wide, 80)};
  color: var(--black-blue);
  font-size: ${dynit(breakpoints.mobile, 20, breakpoints.wide, 56)};
  font-weight: 700;
  line-height: 120%;

  ${mediaDown(breakpoints.tablet)} {
    padding-left: 0;
  }

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -1px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 89%;
    background: linear-gradient(180deg, var(--iris) 0%, var(--fuschia) 100%);

    ${mediaDown(breakpoints.tablet)} {
      display: none;
    }
  }
`;

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <Container>
      <StyledTitle>{children}</StyledTitle>
    </Container>
  );
};
