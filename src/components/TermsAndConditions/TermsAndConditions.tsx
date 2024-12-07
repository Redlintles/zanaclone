import { useContext } from "react";
import styled from "styled-components";
import localeContext from "../../context/LocaleContext/LocaleContext";
import { LocaleContextState } from "@app-types/locale";

const StyledTermsAndConditions = styled.div`
  padding: 4rem 0 0;
  & > h3 {
    font-size: 1.5rem;
    color: var(--color-gray);
  }

  & > a {
    color: var(--color-gray);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function TermsAndConditions() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <StyledTermsAndConditions>
      <h3>{locale.terms.termsTitle}</h3>
      <a href={locale.terms.termsLink.to}>{locale.terms.termsLink.text}</a>
    </StyledTermsAndConditions>
  );
}
