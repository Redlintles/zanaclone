import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import { LocaleContextState } from "@app-types/locale";

import logoSolo from "@assets/logo-solo.b0401efe22357fcf2e2b.png";
import ItemHalf from "../../components/ItemHalf/ItemHalf";
import ItemTitle from "../../components/ItemTitle/ItemTitle";
import ItemText from "../../components/ItemText/ItemText";
import ItemFull from "../../components/ItemFull/ItemFull";
import ItemImg from "../../components/ItemImg/ItemImg";
import styled from "styled-components";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";

const HistoryTimeline = styled.section`
  margin: 0 12rem;
  border-bottom: 5px solid var(--color-gray);
  padding: 10rem 0 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  &::after {
    --width: 5px;
    position: absolute;
    width: var(--width);
    background-color: var(--color-gray);
    height: 100%;
    top: 0;
    left: calc(50% - calc(var(--width) / 2));
    content: "";
  }

  .timeline__item {
    position: relative;
    background-color: var(--color-yellow);
    border-radius: 10px;
    border: 1px solid var(--color-yellow-dark);
    width: 20rem;
    padding: 1.5rem;

    & > h6 {
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    &--left {
      left: 3%;
      &::before {
        --height: 1rem;
        content: "";
        position: absolute;
        border-top: var(--height) solid transparent;
        border-bottom: var(--height) solid transparent;
        border-left: var(--height) solid var(--color-yellow);
        top: calc(50% - calc(var(--height)));
        right: calc(var(--height) * -1);
      }

      &::after {
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        background-color: white;
        border: 2px solid var(--color-gray);
        z-index: 3;
        border-radius: 50%;
        top: -60%;
        right: -23.5%;
      }
    }
    &--right {
      left: 58%;

      &::before {
        --height: 1rem;
        content: "";
        position: absolute;
        border-top: var(--height) solid transparent;
        border-bottom: var(--height) solid transparent;
        border-right: var(--height) solid var(--color-yellow);
        top: calc(50% - calc(var(--height)));
        left: calc(var(--height) * -1);
      }

      &::after {
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        background-color: white;
        border: 2px solid var(--color-gray);
        z-index: 3;
        border-radius: 50%;
        top: -60%;
        left: -23.7%;
      }
    }
  }
`;
export default function History() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <section className="history-main">
        <ItemHalf
          leftElement={
            <>
              <ItemTitle>{locale.company.history.items[0].title}</ItemTitle>
              <ItemText>
                {locale.company.history.items[0].child as string}
              </ItemText>
            </>
          }
          rightElement={<ItemImg src={logoSolo} />}
        />

        <ItemFull>
          <ItemTitle>{locale.company.history.items[1].title}</ItemTitle>
          <ItemText>{locale.company.history.items[1].child as string}</ItemText>
        </ItemFull>

        <article className="item item--full"></article>
      </section>

      <HistoryTimeline>
        {locale.company.history.dialogs &&
          locale.company.history.dialogs.map((item, index) => (
            <div
              key={index}
              className={
                "timeline__item" +
                (index % 2 == 0
                  ? " timeline__item--left"
                  : " timeline__item--right")
              }
            >
              <h6>{item.year}</h6>
              <span>{item.text}</span>
            </div>
          ))}
      </HistoryTimeline>
      <TermsAndConditions />
    </>
  );
}
