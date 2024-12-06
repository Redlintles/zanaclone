import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import ItemList from "@components/ItemList/ItemList";

import cert1 from "@assets/certificado_energia.6c49db46489789fc6f7a.png";
import cert2 from "@assets/certificado_iatf.a9c8522a07bbc45290bf.png";
import cert3 from "@assets/certificadotuvnord.45bcc988e3e9a9505046.png";
import styled from "styled-components";

const CertMainImg = styled.div`
  position: relative;

  .cert-main__tip {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.25s ease opacity;
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
    border-top: 10px solid yellow;
  }

  .cert-main__tip::after {
    content: ". Clique na imagem para baixar";
  }

  .cert-main__img:hover + .cert-main__tip {
    opacity: 1;
  }
`;

export default function Certifications() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <section className="cert-main">
      <header className="cert-main__header">
        <h2>{locale.qualityAndEnvironment.certifications.item.title}</h2>
        <p>{locale.qualityAndEnvironment.certifications.item.text}</p>
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
          <span className="cert-main__tip">
            {locale.qualityAndEnvironment.certifications.hoverTexts[0]}
          </span>
          <a href="#" className="cert-main__link"></a>
        </CertMainImg>
        <CertMainImg>
          <img src={cert2} className="cert-main__img" />
          <span className="cert-main__tip">
            {locale.qualityAndEnvironment.certifications.hoverTexts[1]}
          </span>
          <a href="#" className="cert-main__link"></a>
        </CertMainImg>
        <CertMainImg>
          <img src={cert3} className="cert-main__img" />
          <span className="cert-main__tip">
            {locale.qualityAndEnvironment.certifications.hoverTexts[2]}
          </span>
          <a href="#" className="cert-main__link"></a>
        </CertMainImg>
      </div>

      <button className="cert-main__btn">
        {locale.qualityAndEnvironment.certifications.btnText}
      </button>
    </section>
  );
}
