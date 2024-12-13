import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import ItemList from "@components/ItemList/ItemList";

import cert1 from "@assets/certificado_energia.6c49db46489789fc6f7a.png";
import cert2 from "@assets/certificado_iatf.a9c8522a07bbc45290bf.png";
import cert3 from "@assets/certificadotuvnord.45bcc988e3e9a9505046.png";
import styled from "styled-components";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemText from "@components/ItemText/ItemText";
import Container from "@components/Container/Container";
import ItemLink from "@components/ItemLink/ItemLink";
import useAnimationToggler from "../../hooks/useAnimationToggler";
import { SlideInFromTop } from "../../Animations/SlideIn";
import CertMainImg from "../../components/CertMainImg/CertMainImg";

const StyledCertMain = styled.section`
  .cert-main__list {
    display: flex;
    margin: 7rem 0;
    justify-content: center;
    opacity: 0;
    transform: scale(0);
    transition 1s ease opacity, 1s ease transform;

    ul {
      gap: 0;
      padding-bottom: 5rem;
      border-bottom: 5px solid var(--color-dark-bg);
    }

    &.cert-main__list--slide-in-top {
      animation: ${SlideInFromTop(50)} 2s ease forwards;
    }
  }

  .cert-main__images {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    
    @media(min-width: 996px) {
      flex-direction: row;
      align-items: flex-start;
      gap: 8rem;
    }

    @media(min-width: 1200px) {   
      gap: 10rem;
    }
    padding-bottom: 4rem;
    position: relative;

    &::after {
      --width: 65%;
      position: absolute;
      bottom: 0;
      width: var(--width);
      left: calc(calc(100% - var(--width)) / 2);
      height: 5px;
      content: "";
      background-color: var(--color-dark-bg);
    }
  }

  & > div:last-child {
    width: fit-content;
    margin: 0 auto;
    border-bottom: 5px solid var(--color-dark-bg);
    & > div {
      margin: 5rem auto;
    }
  }
`;

export default function Certifications() {
  const { locale } = useContext<LocaleContextState>(localeContext);

  const {
    animationClass: listAnimationClass,
    ref: listRef,
    showAnimation: showListAnimation,
  } = useAnimationToggler({
    triggerOnce: true,
    animationClass: "cert-main__list--slide-in-top",
  });
  return (
    <Container>
      <StyledCertMain>
        <header className="cert-main__header">
          <ItemTitle margin="0 auto 1rem" padding="0">
            {locale.qualityAndEnvironment.certifications.item.title}
          </ItemTitle>
          <ItemText textCenter fontSize="1.25rem">
            {locale.qualityAndEnvironment.certifications.item.text}
          </ItemText>
        </header>

        <div
          className={
            "cert-main__list" +
            (showListAnimation ? " " + listAnimationClass : "")
          }
          ref={listRef}
        >
          <ItemList
            items={
              locale.qualityAndEnvironment.certifications.item.child as string[]
            }
          />
        </div>

        <div className="cert-main__images">
          <CertMainImg
            src={cert1}
            text={locale.qualityAndEnvironment.certifications.hoverTexts[0]}
          />

          <CertMainImg
            src={cert2}
            text={locale.qualityAndEnvironment.certifications.hoverTexts[1]}
          />

          <CertMainImg
            src={cert3}
            text={locale.qualityAndEnvironment.certifications.hoverTexts[2]}
          />
        </div>

        <div>
          <ItemLink to="#">
            {locale.qualityAndEnvironment.certifications.btnText}
          </ItemLink>
        </div>
      </StyledCertMain>
    </Container>
  );
}
