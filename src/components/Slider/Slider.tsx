import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { IInfo } from '@/mock/data';
import { mediaDown, breakpoints, dynit } from 'dynit';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

gsap.registerPlugin(useGSAP);

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 56px;
  padding: 0 80px;

  ${mediaDown(breakpoints.tablet)} {
    order: 3;
    padding: 0;
    margin-top: 0;
  }
`;

const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    width: 320px;
    height: auto;

    ${mediaDown(breakpoints.tablet)} {
      width: ${dynit(breakpoints.mobile, 166, breakpoints.tablet, 320)};
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 320px;

  ${mediaDown(breakpoints.tablet)} {
    width: ${dynit(breakpoints.mobile, 166, breakpoints.tablet, 320)};
  }
`;

const Year = styled.span`
  color: var(--blue);
  font-family: 'Bebas Neue';
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;

  ${mediaDown(breakpoints.tablet)} {
    font-size: ${dynit(breakpoints.mobile, 16, breakpoints.tablet, 25)};
    line-height: 120%;
  }
`;

const Description = styled.p`
  color: var(--black-blue);
  font-size: 20px;
  line-height: 30px;

  ${mediaDown(breakpoints.tablet)} {
    font-size: ${dynit(breakpoints.mobile, 14, breakpoints.tablet, 20)};
    line-height: 135%;
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  width: 100%;
  top: 41px;
  left: 0;
  z-index: 1;
  pointer-events: none;

  ${mediaDown(breakpoints.tablet)} {
    display: none;
  }
`;

const NavButton = styled.button<{ $prev?: boolean; $hidden?: boolean }>`
  position: absolute;
  ${({ $prev }) => ($prev ? 'left: 30px;' : 'right: 30px;')}
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;

  &:hover {
    background: #fff;
    box-shadow: 0px 0px 20px rgba(56, 119, 238, 0.1);
    svg {
      path {
        stroke: var(--fuschia);
      }
    }
  }

  ${({ $hidden }) =>
    $hidden &&
    `
      display: none;
    `}
`;

const Tag = styled.div`
  display: none;

  ${mediaDown(breakpoints.tablet)} {
    display: block;
    color: var(--black-blue);
    font-family: 'PT Sans';
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #c7cdd9;
  }
`;

interface SliderProps {
  data: IInfo[];
  tag: string;
}

export const Slider: React.FC<SliderProps> = ({ data, tag }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0);
    }
  }, [data]);

  useEffect(() => {
    if (containerRef.current && window.innerWidth < breakpoints.tablet) {
      const tl = gsap.timeline();

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'none',
      }).fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
        }
      );
    }
  }, [data, tag]);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <SliderContainer ref={containerRef}>
      <Tag>{tag}</Tag>
      <StyledSwiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.slider-prev',
          nextEl: '.slider-next',
        }}
        slidesPerView="auto"
        spaceBetween={25}
        breakpoints={{
          [breakpoints.tablet]: {
            spaceBetween: 80,
          },
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Card>
              <Year>{item.event_year}</Year>
              <Description>{item.description}</Description>
            </Card>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <NavigationButtons>
        <NavButton className="slider-prev" $prev $hidden={isBeginning} onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path d="M7 1L2 6L7 11" stroke="var(--blue)" strokeWidth="2" />
          </svg>
        </NavButton>

        <NavButton className="slider-next" $hidden={isEnd} onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path d="M1 1L6 6L1 11" stroke="var(--blue)" strokeWidth="2" />
          </svg>
        </NavButton>
      </NavigationButtons>
    </SliderContainer>
  );
};
