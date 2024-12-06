import { LocaleContextState } from "@app-types/locale";
import React, { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import supplyMap from "@assets/fornecedores-map.b685947c51d81821e53a.png";
export default function Suppliers() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <div className="supply-main">
        <section className="supply-main__text">
          <h2>{locale.logistics.item.title}</h2>
          <p>{locale.logistics.item.child as string}</p>
        </section>
        <section className="supply-main__map">
          <img src={supplyMap} alt="" className="supply-man__img" />
        </section>
      </div>
    </>
  );
}
