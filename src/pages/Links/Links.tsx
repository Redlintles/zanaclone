import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import localeContext from "../../context/LocaleContext/LocaleContext";
import { LinkCalls } from "@app-types/locale";

export default function Links() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <section className="links-main">
        <h2>{locale.links.title}</h2>

        <div>
          <ul>
            {(locale.links.child as Array<LinkCalls>).map((item, index) => (
              <li key={index}>
                <p>{item.text}</p>

                {item.links.map((link, index) => (
                  <a key={index} href={link.to}>
                    {link.text}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
