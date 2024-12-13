import { ReactNode } from "react";
import styled, { css } from "styled-components";
import useAnimationToggler from "../../hooks/useAnimationToggler";
import {
  SlideInFromBottom,
  SlideInFromLeft,
  SlideInFromRight,
  SlideInFromTop,
} from "../../Animations/SlideIn";

const defaultAnimation = css`
  --duration: 0.5s;
  opacity: 0;
  transform: translate(0);
  transition: var(--duration) ease opacity, var(--duration) ease transform;
`;

const StyledContainer = styled.div`
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 3rem 1rem;

  @media (min-width: 996px) {
    padding: 3rem 5rem;
  }
  @media (min-width: 1200px) {
    padding: 3rem 18rem;
  }

  &.container--slide-in-top {
    ${defaultAnimation}
    animation: ${SlideInFromTop()} var(--duration) ease forwards;
  }
  &.container--slide-in-right {
    ${defaultAnimation}
    animation: ${SlideInFromRight()} var(--duration) ease forwards;
  }
  &.container--slide-in-bottom {
    ${defaultAnimation}
    animation: ${SlideInFromBottom()} var(--duration) ease forwards;
  }
  &.container--slide-in-left {
    ${defaultAnimation}
    animation: ${SlideInFromLeft()} var(--duration) ease forwards;
  }
`;

interface ContainerProps {
  children: ReactNode;
  margin?: string;
  padding?: string;
  background?: string;
  slideInFromLeft?: boolean;
  slideInFromRight?: boolean;
  slideInFromTop?: boolean;
  slideInFromBottom?: boolean;
  triggerOnce?: boolean;
}

export default function Container({
  children,
  margin,
  padding,
  background,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  triggerOnce = true,
}: ContainerProps) {
  const { ref, animationClass, showAnimation } = useAnimationToggler({
    animationClass: slideInFromTop
      ? "container--slide-in-top"
      : slideInFromRight
      ? "container--slide-in-right"
      : slideInFromBottom
      ? "container--slide-in-bottom"
      : slideInFromLeft
      ? "container--slide-in-left"
      : "",
    triggerOnce,
  });
  return (
    <StyledContainer
      style={{
        margin: margin ? margin : "",
        padding: padding ? padding : "",
        background: background ? background : "",
      }}
      ref={ref}
      className={showAnimation ? animationClass : ""}
    >
      {children}
    </StyledContainer>
  );
}
