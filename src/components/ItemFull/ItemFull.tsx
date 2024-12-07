import { ReactNode } from "react";
import styled from "styled-components";

const StyledItemFull = styled.article`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 5px solid var(--color-gray);
  border-bottom: 5px solid var(--color-gray);
`;

interface ItemFullProps {
  children: ReactNode;
}

export default function ItemFull({ children }: ItemFullProps) {
  return <StyledItemFull>{children}</StyledItemFull>;
}
