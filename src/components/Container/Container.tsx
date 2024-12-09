import { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: var(--color-white);
  padding: 3rem 18rem;
  display: flex;
  flex-direction: column;
`;

interface ContainerProps {
  children: ReactNode;
  margin?: string;
  padding?: string;
  background?: string;
}

export default function Container({
  children,
  margin,
  padding,
  background,
}: ContainerProps) {
  return (
    <StyledContainer
      style={{
        margin: margin ? margin : "",
        padding: padding ? padding : "",
        background: background ? background : "",
      }}
    >
      {children}
    </StyledContainer>
  );
}
