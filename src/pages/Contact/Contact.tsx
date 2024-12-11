import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import Container from "@components/Container/Container";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import Separator from "@components/Separator/Separator";
import styled from "styled-components";
import ItemText from "@components/ItemText/ItemText";
import { Link } from "react-router-dom";

const StyledContactMain = styled.section`
  width: 50%;
  margin: 0 auto;

  & > form {
    p {
      margin: 2rem 0;
    }

    & > button[type="submit"] {
      background-color: var(--color-dark-bg);
      color: white;
      text-transform: uppercase;
      padding: 1.25rem 2rem;
      width: 100%;
      text-align: center;
      border-radius: 20px;
      cursor: pointer;
      box-shadow: none;
      transition: 0.5s ease box-shadow;

      &:hover {
        box-shadow: inset 0 0 0 3px var(--color-yellow);
      }
    }
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;

  & > span {
    color: var(--color-gray);
    padding-left: 1rem;
    font-size: 1rem;
  }
  & > input,
  & > textarea,
  & > select {
    width: 100%;
    background-color: var(--color-dark-bg);
    padding: 1rem;
    color: white;

    outline: 2px solid var(--color-yellow);
    border-radius: 20px;
  }
  & > textarea {
    height: 300px;
    resize: none;
    overflow: auto;
  }
`;

export default function Contact() {
  const { locale } = useContext<LocaleContextState>(localeContext);

  const inputs = [
    <input type="text" name="" id="" />,
    <input type="email" name="" id="" />,
    <input type="number" name="" id="" />,
    <input type="text" name="" id="" />,
    <textarea name="" id=""></textarea>,
    <select name="" id="">
      {locale.contactLocale.talkWithUs.selectText.map((item, index) => (
        <option value={item} selected={index === 0}>
          {item}
        </option>
      ))}
    </select>,
  ];
  return (
    <Container padding="0 18rem">
      <StyledContactMain>
        <ItemTitle>{locale.contactLocale.talkWithUs.formTitle}</ItemTitle>
        <Separator />
        <form>
          {locale.contactLocale.talkWithUs.formInputs.map((item, index) => (
            <StyledLabel>
              <span>{item}</span>
              <>{inputs[index]}</>
            </StyledLabel>
          ))}

          <ItemText textCenter fontSize="1.1rem">
            {locale.contactLocale.talkWithUs.formTerms}{" "}
            <Link
              to={locale.contactLocale.talkWithUs.formLink.to}
              style={{ color: "var(--color-yellow)" }}
            >
              {locale.contactLocale.talkWithUs.formLink.text}
            </Link>
          </ItemText>

          <button type="submit">
            {locale.contactLocale.talkWithUs.formSubmit}
          </button>
        </form>
      </StyledContactMain>
    </Container>
  );
}
