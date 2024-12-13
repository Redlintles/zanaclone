import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import { LocaleContextState } from "@app-types/locale";

import logoSolo from "@assets/logo-solo.b0401efe22357fcf2e2b.png";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemText from "@components/ItemText/ItemText";
import ItemFull from "@components/ItemFull/ItemFull";
import ItemImg from "@components/ItemImg/ItemImg";
import styled from "styled-components";
import TermsAndConditions from "@components/TermsAndConditions/TermsAndConditions";
import ItemElement from "@components/ItemElement/ItemElement";
import Container from "@components/Container/Container";
import TimelineItem from "../../components/TimelineItem/TimelineItem";

const HistoryTimeline = styled.section`
  border-bottom: 5px solid var(--color-gray);
  padding: 10rem 0 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;

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
`;
export default function History() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Container>
      <section className="history-main">
        <ItemHalf
          leftElement={
            <ItemElement
              justifyContentStart
              slideInFromLeft
              margin="0 0 7.5rem"
            >
              <ItemTitle borderBottom margin="0 0 2rem">
                {locale.company.history.items[0].title}
              </ItemTitle>
              <ItemText>
                {locale.company.history.items[0].child as string}
              </ItemText>
            </ItemElement>
          }
          rightElement={
            <ItemElement slideInFromRight>
              <ItemImg src={logoSolo} />
            </ItemElement>
          }
          padding="0 0 5rem"
        />

        <ItemFull>
          <ItemTitle>{locale.company.history.items[1].title}</ItemTitle>
          <ItemText>{locale.company.history.items[1].child as string}</ItemText>
        </ItemFull>
      </section>

      <HistoryTimeline>
        {locale.company.history.dialogs &&
          locale.company.history.dialogs.map((item, index) => (
            <TimelineItem
              type={index % 2 === 0 ? "left" : "right"}
              year={item.year}
              text={item.text}
              key={index}
            />
          ))}
      </HistoryTimeline>
      <TermsAndConditions />
    </Container>
  );
}
