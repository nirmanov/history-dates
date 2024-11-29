import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CircleTag } from '@/components/CircleTag/CircleTag';
import { IData } from '@/mock/data';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import { dynit, breakpoints, mediaDown } from 'dynit';

gsap.registerPlugin(useGSAP);

const DIAMETER = 530;
const RADIUS = DIAMETER / 2;
const ANGLE_OFFSET = 30 * (Math.PI / 180);
const ANIMATION_DURATION = 0.7;

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin-top: 215px;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${mediaDown(breakpoints.tablet)} {
    order: 4;
    margin-top: auto;
  }
`;

const StyledCircle = styled.div`
  position: relative;
  width: ${DIAMETER}px;
  height: ${DIAMETER}px;
  border: 1px solid rgba(66, 86, 122, 0.2);
  border-radius: 50%;
  transform-origin: center;
  transform: rotate(0deg);

  ${mediaDown(breakpoints.tablet)} {
    display: none;
  }
`;

const NavigationContainer = styled.div`
  align-self: flex-start;
  display: flex;
  margin-top: -48px;
  margin-left: 80px;

  ${mediaDown(breakpoints.tablet)} {
    width: 100%;
    margin-top: 0;
    margin-left: 0;
    gap: 11px;
    align-items: center;
  }
`;

const NavigationGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${mediaDown(breakpoints.tablet)} {
    gap: 11px;
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--black-blue);
`;

const NavButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  ${mediaDown(breakpoints.tablet)} {
    gap: 8px;
  }
`;

const Pagination = styled.div`
  display: none;

  ${mediaDown(breakpoints.tablet)} {
    display: flex;
    gap: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Bullet = styled.button<{ $active?: boolean }>`
  width: 6px;
  height: 6px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--black-blue);
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  cursor: pointer;
`;

const NavButton = styled.button<{ $disabled?: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(66, 86, 122, 0.5);
  border-radius: 50%;
  background: transparent;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  transition: all 0.3s ease;
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  &:hover:not([disabled]) {
    background: #fff;
    border-color: var(--fuschia);
    svg {
      path {
        stroke: var(--fuschia);
      }
    }
  }

  ${mediaDown(breakpoints.tablet)} {
    width: 25px;
    height: 25px;

    svg {
      width: 7px;
      height: 8px;
    }
  }
`;

interface CircleProps {
  data: IData[];
  activeIndex: number;
  onPeriodChange: (index: number) => void;
}

export const Circle: React.FC<CircleProps> = ({ data, activeIndex, onPeriodChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    tagRefs.current = tagRefs.current.slice(0, data.length);
  }, [data.length]);

  const rotateTag = (index: number): [number, number] => {
    const activePagSize = 56;
    const angle = (2 * Math.PI * index) / data.length - Math.PI / 2 + ANGLE_OFFSET;
    const x = RADIUS * Math.cos(angle) - activePagSize / 2;
    const y = RADIUS * Math.sin(angle) - activePagSize / 2;
    return [x + RADIUS, y + RADIUS];
  };

  const handlePrev = () => {
    if (activeIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      onPeriodChange(activeIndex - 1);
      setTimeout(() => setIsAnimating(false), ANIMATION_DURATION * 1000);
    }
  };

  const handleNext = () => {
    if (activeIndex < data.length - 1 && !isAnimating) {
      setIsAnimating(true);
      onPeriodChange(activeIndex + 1);
      setTimeout(() => setIsAnimating(false), ANIMATION_DURATION * 1000);
    }
  };

  const handleTagClick = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      onPeriodChange(index);
      setTimeout(() => setIsAnimating(false), ANIMATION_DURATION * 1000);
    }
  };

  useGSAP(
    (context) => {
      const rotateCircle = (length: number, index: number) => {
        const rotationAngle = -(360 / length) * index;

        context.add(() => {
          gsap.to(containerRef.current, {
            rotate: `${rotationAngle}deg`,
            duration: ANIMATION_DURATION,
            ease: 'power1.out',
          });
        });

        tagRefs.current.forEach((ref, i) => {
          if (ref) {
            context.add(() => {
              gsap.to(ref, {
                rotate: `${-rotationAngle}deg`,
                duration: ANIMATION_DURATION,
                ease: 'power1.out',
              });
            });
          }
        });
      };

      rotateCircle(data.length, activeIndex);
    },
    [activeIndex]
  );

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === data.length - 1;

  return (
    <Container>
      <StyledCircle ref={containerRef}>
        {data.map((item, index) => (
          <CircleTag
            key={index}
            ref={(el) => (tagRefs.current[index] = el)}
            index={index}
            activeIndex={activeIndex}
            tag={item.tag}
            rotateTag={rotateTag}
            onClick={() => handleTagClick(index)}
          />
        ))}
      </StyledCircle>
      <NavigationContainer>
        <NavigationGroup>
          <Counter>
            {String(activeIndex + 1).padStart(2, '0')}/{String(data.length).padStart(2, '0')}
          </Counter>
          <NavButtonGroup>
            <NavButton onClick={handlePrev} $disabled={isFirst}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
              >
                <path
                  d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                  stroke="#42567A"
                  strokeWidth="2"
                />
              </svg>
            </NavButton>
            <NavButton onClick={handleNext} $disabled={isLast}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
              >
                <path
                  d="M1.50012 0.750001L7.75012 7L1.50012 13.25"
                  stroke="#42567A"
                  strokeWidth="2"
                />
              </svg>
            </NavButton>
          </NavButtonGroup>
        </NavigationGroup>
        <Pagination>
          {Array.from({ length: data.length }, (_, index) => (
            <Bullet
              key={index}
              $active={index === activeIndex}
              onClick={() => handleTagClick(index)}
            />
          ))}
        </Pagination>
      </NavigationContainer>
    </Container>
  );
};
