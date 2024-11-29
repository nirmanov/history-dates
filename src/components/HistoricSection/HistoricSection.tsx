import { Title } from '@/components/Title/Title';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { YearsRange } from '@/components/YearsRange/YearsRange';
import { Circle } from '@/components/Circle/Circle';
import { Slider } from '@/components/Slider/Slider';
import { IData } from '@/mock/data';

import { dynit, breakpoints, mediaDown } from 'dynit';

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  min-height: 1080px;
  margin-left: ${dynit(breakpoints.tablet, 48, breakpoints.wide, 320)};
  margin-right: ${dynit(breakpoints.tablet, 32, breakpoints.wide, 160)};
  border: solid rgba(66, 86, 122, 0.1);
  border-width: 0 1px;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 480px;
    background: rgba(66, 86, 122, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    left: 50%;
    background: rgba(66, 86, 122, 0.1);
  }

  ${mediaDown(breakpoints.tablet)} {
    min-height: auto;
    border: none;
    margin-left: 0;
    margin-right: 0;
    padding: 59px 20px 13px 20px;
    min-height: ${dynit(breakpoints.mobile, 568, breakpoints.tablet, 640)};

    &:before {
      content: '';
      display: none;
    }

    &::after {
      display: none;
    }
  }
`;

interface IHistoricProps {
  data: IData[];
}

export const HistoricSection: React.FC<IHistoricProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevYearsRef = useRef({ firstYear: data[0].firstYear, secondYear: data[0].secondYear });

  useEffect(() => {
    prevYearsRef.current = {
      firstYear: data[activeIndex].firstYear,
      secondYear: data[activeIndex].secondYear,
    };
  }, [activeIndex, data]);

  const handlePeriodChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <StyledSection>
      <Title>
        Исторические <br /> даты
      </Title>
      <Circle data={data} onPeriodChange={handlePeriodChange} activeIndex={activeIndex} />
      <YearsRange
        firstYear={Number(data[activeIndex].firstYear)}
        secondYear={Number(data[activeIndex].secondYear)}
        prevFirstYear={Number(prevYearsRef.current.firstYear)}
        prevSecondYear={Number(prevYearsRef.current.secondYear)}
        activeIndex={activeIndex}
        totalPeriods={data.length}
        onPeriodChange={handlePeriodChange}
      />

      <Slider data={data[activeIndex].info} tag={data[activeIndex].tag} />
    </StyledSection>
  );
};
