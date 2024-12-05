import { useContext } from "react";
import localeContext, {
  LocaleContextState,
} from "../../context/LocaleContext/LocaleContext";

import labsImg from "../../assets/laboratorios.21fae6aa25d15b016974.png";

export default function Labs() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <section className="labs-main">
      <div className="item item--half">
        <div className="item-half__left">
          <h2>{locale.infrastructure.labsPage.title}</h2>
          <p>{locale.infrastructure.labsPage.child as string}</p>
        </div>
        <div className="item-half__right">
          <img src={labsImg} alt="" />
        </div>
      </div>
    </section>
  );
}
