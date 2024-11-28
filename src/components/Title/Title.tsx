import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin: 2rem 0;
`;

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
