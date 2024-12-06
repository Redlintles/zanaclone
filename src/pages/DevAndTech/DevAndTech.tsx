import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import SubNav from "@components/SubNav/SubNav";
import itemImg1 from "@assets/vantagens.96787b694afc989430ca.png";

export default function DevAndTech() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <section className="dt-main">
      <SubNav links={locale.devAndTech.sublinks} />
      <div className="item item--half">
        <div className="item__left">
          <h2>{locale.devAndTech.gridItems[0].title}</h2>
          <p>{locale.devAndTech.gridItems[0].text}</p>
        </div>
        <div className="item__right">
          <img src={itemImg1} alt="" />
        </div>
      </div>
      <div className="item item--half">
        <div className="item__left">
          <h2>{locale.devAndTech.gridItems[0].title}</h2>
        </div>
        <div className="item__right outline slide-in"></div>
      </div>
    </section>
  );
}
