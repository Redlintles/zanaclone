import { useContext } from "react";
import localeContext, {
  LocaleContextState,
} from "../../context/LocaleContext/LocaleContext";

import logoSolo from "../../assets/logo-solo.b0401efe22357fcf2e2b.png";
import { Link } from "react-router-dom";
export default function History() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <main className="history main">
      <nav className="history-nav main__subnav">
        {locale.company.sublinks &&
          locale.company.sublinks.map((item) => (
            <Link to={item.to}>{item.text}</Link>
          ))}
      </nav>
      <section className="history-main">
        <article className="history__item">
          <div className="history-item__left">
            <h2>{locale.company.history.items[0].title}</h2>
            <p>{locale.company.history.items[0].child as string}</p>
          </div>
          <div className="history-item__right">
            <img src={logoSolo} alt="" />
          </div>
        </article>

        <article className="history__item history__item--full-width">
          <h2>{locale.company.history.items[1].title}</h2>
          <p>{locale.company.history.items[1].child as string}</p>
        </article>
      </section>

      <section className="history-timeline">
        {locale.company.history.dialogs &&
          locale.company.history.dialogs.map((item, index) => (
            <div
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
    </main>
  );
}
