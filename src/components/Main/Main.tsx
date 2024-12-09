import { ReactNode } from "react";
import styled from "styled-components";

interface MainProps {
  children: ReactNode;
}

const StyledMain = styled.main`
  background-color: var(--color-white);
`;
export default function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}
