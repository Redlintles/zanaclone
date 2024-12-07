import { LocaleContextState } from "@app-types/locale";
import React, { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";

export default function Contact() {
  const { locale } = useContext<LocaleContextState>(localeContext);

  const inputs = [
    <input type="text" name="" id="" />,
    <input type="email" name="" id="" />,
    <input type="number" name="" id="" />,
    <input type="text" name="" id="" />,
    <textarea name="" id=""></textarea>,
    <select name="" id="">
      {locale.contactLocale.talkWithUs.selectText.map((item, index) => (
        <option value={item} selected={index === 0}>
          {item}
        </option>
      ))}
    </select>,
  ];
  return (
    <>
      <div className="contact-main">
        <h2>{locale.contactLocale.talkWithUs.formTitle}</h2>
        <form>
          {locale.contactLocale.talkWithUs.formInputs.map((item, index) => (
            <label>
              <span>{item}</span>
              <>{inputs[index]}</>
            </label>
          ))}

          <p>
            {locale.contactLocale.talkWithUs.formTerms}{" "}
            <a href={locale.contactLocale.talkWithUs.formLink.to}>
              {locale.contactLocale.talkWithUs.formLink.text}
            </a>
          </p>

          <button type="submit">
            {locale.contactLocale.talkWithUs.formSubmit}
          </button>
        </form>
      </div>
    </>
  );
}
