import { useContext } from "react";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "../../context/LocaleContext/LocaleContext";
import ItemList from "../../components/ItemList/ItemList";

export default function FISPQS() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <div className="fispqs-main">
        <section className="fisps-main__text">
          <h2>{locale.qualityAndEnvironment.fispsqsArea.item.title}</h2>
          <p>{locale.qualityAndEnvironment.fispsqsArea.item.child as string}</p>
        </section>

        <section className="fisps-main__container ">
          <ItemList
            items={locale.qualityAndEnvironment.fispsqsArea.sublinks1}
          />
          <ItemList
            items={locale.qualityAndEnvironment.fispsqsArea.sublinks2}
          />
        </section>
      </div>
    </>
  );
}
