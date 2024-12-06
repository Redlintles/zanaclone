import { useContext } from "react";
import SubNav from "@components/SubNav/SubNav";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";
import ItemList from "@components/ItemList/ItemList";
import sgiImg from "@assets/sgi.fa9cb7c40c299ebe64bc.png";
export default function SGI() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <section className="sgi-main">
      <SubNav links={locale.qualityAndEnvironment.sublinks} />

      <div className="sgi-main__header">
        <h2>{locale.qualityAndEnvironment.sgi.title}</h2>
        <h3>{locale.qualityAndEnvironment.sgi.subtitle}</h3>
      </div>

      <div className="item item--half">
        <div className="item-half__left">
          <h2>{locale.qualityAndEnvironment.sgi.main.title}</h2>
          <p>{locale.qualityAndEnvironment.sgi.main.text}</p>
          <ItemList
            items={locale.qualityAndEnvironment.sgi.main.child as string[]}
          />
        </div>
        <div className="item-half__right">
          <img src={sgiImg} alt="" />
        </div>
      </div>
    </section>
  );
}
