import React, { ReactNode } from "react";
import styled from "styled-components";

interface MainProps {
  children: ReactNode;
}

const StyledMain = styled.main`
  background-color: var(--color-white);
  padding: 3rem 20rem;
  display: flex;
  flex-direction: column;
`;
export default function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}
