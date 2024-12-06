import React, { ReactNode } from "react";
import styled from "styled-components";

const ItemHalfContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 2rem;

  & > * {
    grid-column: span 1;
  }
`;

interface ItemHalfProps {
  leftElement: ReactNode;
  rightElement: ReactNode;
}
export default function ItemHalf({ leftElement, rightElement }: ItemHalfProps) {
  return (
    <ItemHalfContainer>
      <div className="item-half__left">{leftElement}</div>
      <div className="item-half__right">{rightElement}</div>
    </ItemHalfContainer>
  );
}
