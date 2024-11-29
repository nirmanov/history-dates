import { FC, useRef } from 'react';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import { dynit, breakpoints, mediaDown } from 'dynit';

gsap.registerPlugin(useGSAP);

interface IYearRange {
  firstYear: number;
  secondYear: number;
  prevFirstYear: number;
  prevSecondYear: number;
  activeIndex?: number;
  totalPeriods?: number;
  onPeriodChange?: (index: number) => void;
}

const YearContainer = styled.div`
  position: absolute;
  top: 400px;
  display: flex;
  align-items: center;
  gap: 92px;
  margin-left: -40px;

  ${mediaDown(breakpoints.desktop)} {
    top: ${dynit(breakpoints.tablet, 420, breakpoints.desktop, 400)};
    gap: ${dynit(breakpoints.tablet, 40, breakpoints.desktop, 92)};
    margin-left: ${dynit(breakpoints.tablet, 0, breakpoints.desktop, -40)};
  }

  ${mediaDown(breakpoints.tablet)} {
    position: static;
    align-items: flex-start;
    gap: 30px;
    margin-left: 0;
    order: 2;
    padding-bottom: 20px;
  }
`;

const Year = styled.span<{ $isLast?: boolean }>`
  display: block;
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: -4px;
  color: ${({ $isLast }) => ($isLast ? 'var(--fuschia)' : 'var(--iris)')};

  ${mediaDown(breakpoints.desktop)} {
    font-size: ${dynit(breakpoints.tablet, 120, breakpoints.desktop, 200)};
    line-height: ${dynit(breakpoints.tablet, 120, breakpoints.desktop, 160)};
  }

  ${mediaDown(breakpoints.tablet)} {
    font-size: ${dynit(breakpoints.mobile, 56, breakpoints.tablet, 120)};
    line-height: normal;
    letter-spacing: -1.12px;
  }
`;

export const YearsRange: FC<IYearRange> = ({
  firstYear,
  secondYear,
  prevFirstYear,
  prevSecondYear,
  activeIndex = 0,
  totalPeriods = 6,
  onPeriodChange,
}) => {
  const firstYearRef = useRef<HTMLSpanElement>(null);
  const secondYearRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const changeYear = (
      yearRef: HTMLSpanElement | null,
      prevYear: number | undefined,
      targetYear: number
    ) => {
      if (yearRef && prevYear) {
        gsap.fromTo(
          yearRef,
          { textContent: prevYear.toString() },
          {
            textContent: targetYear.toString(),
            duration: 0.7,
            ease: 'sine.out',
            snap: { textContent: 1 },
          }
        );
      }
    };

    changeYear(firstYearRef.current, prevFirstYear, firstYear);
    changeYear(secondYearRef.current, prevSecondYear, secondYear);
  }, [firstYear, secondYear, prevFirstYear, prevSecondYear]);

  return (
    <YearContainer>
      <Year ref={firstYearRef}>{firstYear}</Year>
      <Year ref={secondYearRef} $isLast>
        {secondYear}
      </Year>
    </YearContainer>
  );
};
