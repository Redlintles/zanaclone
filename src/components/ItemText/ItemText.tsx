import { ReactNode } from "react";
import styled from "styled-components";

interface ItemTextProps {
  children: ReactNode;
}

const StyledItemText = styled.p`
  color: var(--color-gray);
  line-height: 1.75rem;
  text-align: justify;
`;
export default function ItemText({ children }: ItemTextProps) {
  return <StyledItemText>{children}</StyledItemText>;
}
