import { LocaleContextState } from "@app-types/locale";
import React, { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import ItemText from "../../components/ItemText/ItemText";
import Container from "../../components/Container/Container";
import ItemTitle from "../../components/ItemTitle/ItemTitle";
import Separator from "../../components/Separator/Separator";
import styled from "styled-components";

const StyledWorkMainTop = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  & > p:last-child:hover {
    text-decoration: underline;
  }
`;

const StyledWorkMainForm = styled.section`
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: fit-content;
  margin: 0 auto;
  border: 1px solid #ccc;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > label {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1rem;
      width: 100%;

      & > span {
        text-align: center;
        font-weight: 500;
        font-size: 0.9rem;
        color: var(--color-gray);
      }

      & > :is(input, textarea) {
        padding: 0.5rem;
      }

      textarea {
        resize: none;
        height: 100px;
      }
    }
    & > button[type="submit"] {
      color: white;
      background-color: var(--color-blue);
      padding: 1rem;
      font-size: 1rem;
      margin: 1rem 0;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
export default function WorkWithUs() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Container padding="0 18rem">
      <div className="work-main">
        <StyledWorkMainTop>
          <ItemTitle padding="0" margin="0 auto">
            {locale.contactLocale.workWithUs.title}
          </ItemTitle>
          <Separator />
          <ItemText textCenter textUnderline fontSize="1.5rem">
            {locale.contactLocale.workWithUs.callToAction}
          </ItemText>
          <ItemText textCenter>
            {locale.contactLocale.workWithUs.paragraphs[0]}
          </ItemText>
          <ItemText textCenter>
            {locale.contactLocale.workWithUs.paragraphs[1]}
          </ItemText>
          <div style={{ margin: "2rem 0" }}>
            <ItemText textCenter fontWeight="500">
              {locale.contactLocale.workWithUs.paragraphs[2]}
            </ItemText>
          </div>
          <ItemText textCenter>
            {locale.contactLocale.workWithUs.paragraphs[3]}
          </ItemText>
          <ItemText fontWeight="bold" textCenter>
            {locale.contactLocale.workWithUs.paragraphs[4]}
          </ItemText>
        </StyledWorkMainTop>

        <StyledWorkMainForm>
          <form action="">
            <label htmlFor="">
              <span>Email</span>
              <input type="email" name="" id="" />
            </label>
            <label htmlFor="">
              <span>Insira o link do seu Linkedin ou portifólio</span>
              <textarea name="" id=""></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </StyledWorkMainForm>
      </div>
    </Container>
  );
}
