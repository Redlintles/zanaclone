import { ReactNode } from "react";
import styled from "styled-components";

const StyledItemTitle = styled.h2`
  color: var(--color-gray);
  font-size: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 4px solid var(--color-gray);
  text-align: center;
  line-height: 40px;
  font-weight: 450;
  width: fit-content;
  margin: 0 auto 2rem;
`;

interface ItemTitleProps {
  children: ReactNode;
}

export default function ItemTitle({ children }: ItemTitleProps) {
  return <StyledItemTitle>{children}</StyledItemTitle>;
}
