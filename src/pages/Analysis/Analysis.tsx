import SlideShow from "@components/SlideShow/SlideShow";

import analysis2Img from "@assets/analises2.df3d2b8e48a54fd9ff14.png";

import slideImg1 from "@assets/1.c47cd8e495b9bcbe53b6.png";
import slideImg2 from "@assets/2.609fff439d8e38f9ee02.png";
import slideImg3 from "@assets/3.a73ce5af5645490b17a1.png";
import slideImg4 from "@assets/4.565777e30196c59f18bc.png";
import { useContext } from "react";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";
export default function Analysis() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <section className="analysis-main">
      <div className="item item--half">
        <div className="item-half__left">
          <SlideShow images={[slideImg1, slideImg2, slideImg3, slideImg4]} />
        </div>
        <div className="item-half__right">
          <h2>{locale.infrastructure.analysisPage.gridItems[0].title}</h2>
          <ul>
            {(
              locale.infrastructure.analysisPage.gridItems[0].child as string[]
            ).map((item, index) => (
              <li key={index} className="item-list__item">
                <p className="item__text">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="item item--half">
        <div className="item-half__left">
          <h2>{locale.infrastructure.analysisPage.gridItems[1].title}</h2>
          <ul>
            {(
              locale.infrastructure.analysisPage.gridItems[1].child as string[]
            ).map((item, index) => (
              <li key={index} className="item-list__item">
                <p className="item__text">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="item-half__right">
          <img src={analysis2Img} alt="" className="item__img" />
        </div>
      </div>
    </section>
  );
}
