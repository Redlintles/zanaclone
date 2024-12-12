import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import styled from "styled-components";
import localeContext from "@context/LocaleContext/LocaleContext";

const StyledFooter = styled.footer`
  background-color: var(--color-dark-bg);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: white;
  font-size: 0.9rem;
`;
export default function Footer() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <StyledFooter>
      <p>{locale.footer.text}</p>
    </StyledFooter>
  );
}
