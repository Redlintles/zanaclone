import React, { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "@hooks/useClassManager";

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
}: ItemElementProps) {
  const [manager] = useClassManager("", [
    [outline, "item--outline"],
    [directionRow, "item--direction-row"],
    [justifyContentStart, "item--justify-start"],
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
