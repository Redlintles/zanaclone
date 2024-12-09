import { ReactNode } from "react";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styled from "styled-components";

const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <StyledLayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledLayoutContainer>
  );
}
