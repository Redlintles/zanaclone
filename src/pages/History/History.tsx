import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import { LocaleContextState } from "@app-types/locale";

import logoSolo from "@assets/logo-solo.b0401efe22357fcf2e2b.png";
import { Link } from "react-router-dom";
export default function History() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <section className="history-main">
        <article className="item item--half">
          <div className="item-half__left">
            <h2>{locale.company.history.items[0].title}</h2>
            <p>{locale.company.history.items[0].child as string}</p>
          </div>
          <div className="item-half__right">
            <img src={logoSolo} alt="" />
          </div>
        </article>

        <article className="item item--full">
          <h2>{locale.company.history.items[1].title}</h2>
          <p>{locale.company.history.items[1].child as string}</p>
        </article>
      </section>

      <section className="history-timeline">
        {locale.company.history.dialogs &&
          locale.company.history.dialogs.map((item, index) => (
            <div
              key={index}
              className={index % 2 == 0 ? "timeline__left" : "timeline__right"}
            >
              <h6>{item.year}</h6>
              <span>{item.text}</span>
            </div>
          ))}
      </section>
      <section className="history-terms">
        <h3>{locale.company.history.termsTitle}</h3>
        <Link to="#">{locale.company.history.termsLink}</Link>
      </section>
    </>
  );
}
