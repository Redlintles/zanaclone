import { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "@hooks/useClassManager";
import {
  SlideInFromLeft,
  SlideInFromBottom,
  SlideInFromRight,
  SlideInFromTop,
} from "../../Animations/SlideIn";
import useAnimationToggler from "../../hooks/useAnimationToggler";

const StyledItemElement = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &.item--outline {
    border: 1px solid var(--color-gray);
  }

  &.item--direction-row {
    flex-direction: row;
  }

  &.item--justify-start {
    justify-content: flex-start;
  }

  &.item--slide-in-left {
    animation: ${SlideInFromLeft()} 0.4s ease;
  }

  &.item--slide-in-right {
    animation: ${SlideInFromRight()} 0.4s ease;
  }

  &.item--slide-in-bottom {
    animation: ${SlideInFromBottom()} 0.4s ease;
  }

  &.item--slide-in-top {
    animation: ${SlideInFromTop()} 0.4s ease;
  }
`;

interface ItemElementProps {
  children: ReactNode;
  outline?: boolean;
  padding?: string;
  gap?: string;
  margin?: string;
  width?: string;
  directionRow?: boolean;
  justifyContentStart?: boolean;
  slideInFromLeft?: boolean;
  slideInFromBottom?: boolean;
  slideInFromTop?: boolean;
  slideInFromRight?: boolean;
  triggerOnce?: boolean;
}

export default function ItemElement({
  children,
  outline,
  padding,
  gap,
  margin,
  width,
  directionRow,
  justifyContentStart,
  slideInFromLeft,
  slideInFromBottom,
  slideInFromTop,
  slideInFromRight,
  triggerOnce,
}: ItemElementProps) {
  const [manager] = useClassManager("", [
    [outline, "item--outline"],
    [directionRow, "item--direction-row"],
    [justifyContentStart, "item--justify-start"],
  ]);

  const { ref, showAnimation, animationClass } = useAnimationToggler({
    threshold: 0.1,
    triggerOnce,
    animationClass: slideInFromLeft
      ? "item--slide-in-left"
      : slideInFromRight
      ? "item--slide-in-right"
      : slideInFromBottom
      ? "item--slide-in-bottom"
      : slideInFromTop
      ? "item--slide-in-top"
      : "",
  });

  console.log(animationClass);

  return (
    <StyledItemElement
      className={
        manager.getResult() + (showAnimation ? " " + animationClass : "")
      }
      style={{
        padding: padding ? padding : "",
        gap: gap ? gap : "",
        margin,
        width,
      }}
      ref={ref}
    >
      {children}
    </StyledItemElement>
  );
}
