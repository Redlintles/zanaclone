import React, { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "../../hooks/useClassManager";

const StyledItemElement = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  align-items: center;

  &.item--outline {
    border: 1px solid var(--color-gray);
  }
`;

interface ItemElementProps {
  children: ReactNode;
  outline?: boolean;
}

export default function ItemElement({ children, outline }: ItemElementProps) {
  const [manager] = useClassManager("", [[outline, "item--outline"]]);

  return (
    <StyledItemElement className={manager.getResult()}>
      {children}
    </StyledItemElement>
  );
}
