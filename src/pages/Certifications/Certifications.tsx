import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import ItemList from "@components/ItemList/ItemList";

import cert1 from "@assets/certificado_energia.6c49db46489789fc6f7a.png";
import cert2 from "@assets/certificado_iatf.a9c8522a07bbc45290bf.png";
import cert3 from "@assets/certificadotuvnord.45bcc988e3e9a9505046.png";
import styled from "styled-components";
import ItemTitle from "../../components/ItemTitle/ItemTitle";
import ItemText from "../../components/ItemText/ItemText";
import Container from "../../components/Container/Container";
import ItemLink from "../../components/ItemLink/ItemLink";
import { Link } from "react-router-dom";

const CertMainImg = styled.div`
  position: relative;

  .cert-main__tip {
    --width: 60%;
    position: absolute;
    font-size: 0.9rem;
    top: -8rem;
    width: var(--width);
    left: calc(calc(100% - var(--width)) / 2);
    opacity: 0;
    transition: 0.25s ease opacity;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--color-tip-orange);
  }

  .cert-main__link::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .cert-main__tip::before {
    position: absolute;
    bottom: calc(0px - 10px);
    left: calc(50% - 10px);

    width: 0;
    height: 0;
    content: "";
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid var(--color-tip-orange);
  }

  .cert-main__tip::after {
    content: ". Clique na imagem para baixar";
  }

  .cert-main__img {
    width: 250px;
  }

  .cert-main__link:hover + .cert-main__tip {
    opacity: 1;
  }
`;

const StyledCertMain = styled.section`
  .cert-main__list {
    display: flex;
    margin: 7rem 0;
    justify-content: center;

    ul {
      gap: 0;
      padding-bottom: 5rem;
      border-bottom: 5px solid var(--color-dark-bg);
    }
  }

  .cert-main__images {
    display: flex;
    justify-content: center;
    gap: 10rem;
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
  return (
    <Container padding="0rem 18rem">
      <StyledCertMain>
        <header className="cert-main__header">
          <ItemTitle margin="0 auto 1rem" padding="0">
            {locale.qualityAndEnvironment.certifications.item.title}
          </ItemTitle>
          <ItemText textCenter fontSize="1.25rem">
            {locale.qualityAndEnvironment.certifications.item.text}
          </ItemText>
        </header>

        <div className="cert-main__list">
          <ItemList
            items={
              locale.qualityAndEnvironment.certifications.item.child as string[]
            }
          />
        </div>

        <div className="cert-main__images">
          <CertMainImg>
            <img src={cert1} className="cert-main__img" />
            <Link to="#" className="cert-main__link"></Link>
            <span className="cert-main__tip">
              {locale.qualityAndEnvironment.certifications.hoverTexts[0]}
            </span>
          </CertMainImg>
          <CertMainImg>
            <img src={cert2} className="cert-main__img" />
            <Link to="#" className="cert-main__link"></Link>
            <span className="cert-main__tip">
              {locale.qualityAndEnvironment.certifications.hoverTexts[1]}
            </span>
          </CertMainImg>
          <CertMainImg>
            <img src={cert3} className="cert-main__img" />
            <Link to="#" className="cert-main__link"></Link>
            <span className="cert-main__tip">
              {locale.qualityAndEnvironment.certifications.hoverTexts[2]}
            </span>
          </CertMainImg>
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
