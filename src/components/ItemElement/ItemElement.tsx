import React, { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "@hooks/useClassManager";
import SlideInFromLeft from "../../Animations/SlideInFromLeft";

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
    animation: ${SlideInFromLeft} 0.5s ease;
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
}: ItemElementProps) {
  const [manager] = useClassManager("", [
    [outline, "item--outline"],
    [directionRow, "item--direction-row"],
    [justifyContentStart, "item--justify-start"],
    [slideInFromLeft, "item--slide-in-left"],
  ]);

  return (
    <StyledItemElement
      className={manager.getResult()}
      style={{
        padding: padding ? padding : "",
        gap: gap ? gap : "",
        margin,
        width,
      }}
    >
      {children}
    </StyledItemElement>
  );
}
