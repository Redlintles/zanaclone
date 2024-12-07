import { LocaleContextState } from "@app-types/locale";
import React, { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";

export default function WorkWithUs() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <div className="work-main">
        <section className="work-main__top">
          <h2>{locale.contactLocale.workWithUs.title}</h2>
          <p>{locale.contactLocale.workWithUs.callToAction}</p>
          <p>{locale.contactLocale.workWithUs.paragraphs[0]}</p>
          <p>{locale.contactLocale.workWithUs.paragraphs[1]}</p>
          <p className="bold">
            {locale.contactLocale.workWithUs.paragraphs[2]}
          </p>
          <p>{locale.contactLocale.workWithUs.paragraphs[3]}</p>
          <p className="bold hover--underline">
            {locale.contactLocale.workWithUs.paragraphs[4]}
          </p>
        </section>

        <section className="work-main__form">
          <form action="">
            <label htmlFor="">
              <span>Email</span>
              <input type="email" name="" id="" />
            </label>
            <label htmlFor="">
              <span>Insira o link do seu Linkedin ou portifólio</span>
              <textarea name="" id=""></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </>
  );
}
