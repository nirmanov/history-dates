import { useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

gsap.registerPlugin(useGSAP);

const TagContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
`;

const TagNumber = styled.span<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $isActive }) => ($isActive ? '56px' : '6px')};
  height: ${({ $isActive }) => ($isActive ? '56px' : '6px')};
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? 'var(--grey)' : 'var(--black-blue)')};
  color: #42567a;
  font-size: ${({ $isActive }) => ($isActive ? '20px' : '0')};
  line-height: 30px;
  border: ${({ $isActive }) => ($isActive ? '1px solid rgba(48, 62, 88, 0.5)' : 'none')};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    color: var(--black-blue);
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    background: var(--grey);
    border: 1px solid rgba(48, 62, 88, 0.5);
  }
`;

const TagText = styled.span`
  position: absolute;
  left: 74px;
  font-weight: 700;
  font-size: 0;
  line-height: 30px;
  color: var(--black-blue);
  opacity: 0;
  transition: 0.3s ease-in-out;
`;

interface CircleTagProps {
  index: number;
  activeIndex: number;
  tag: string;
  onClick?: () => void;
  rotateTag: (index: number) => [number, number];
}

export const CircleTag = forwardRef<HTMLDivElement, CircleTagProps>(
  ({ index, activeIndex, tag, onClick, rotateTag }, ref) => {
    const textRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
      const animation = (duration: number) => {
        gsap.to(textRef.current, {
          duration,
          opacity: 1,
          fontSize: 20,
          ease: 'sine.inOut',
        });
      };

      const hide = () => {
        gsap.to(textRef.current, {
          duration: 0.3,
          opacity: 0,
          fontSize: 0,
          ease: 'sine.inOut',
        });
      };

      if (activeIndex === index) {
        animation(0.7);
      } else {
        hide();
      }
    }, [activeIndex, index]);

    return (
      <TagContainer
        ref={ref}
        style={{
          left: rotateTag(index)[0],
          top: rotateTag(index)[1],
        }}
        onClick={onClick}
      >
        <TagNumber $isActive={activeIndex === index}>{index + 1}</TagNumber>
        <TagText ref={textRef}>{tag}</TagText>
      </TagContainer>
    );
  }
);

CircleTag.displayName = 'CircleTag';
