import { LocaleContextState } from "@app-types/locale";
import React, { useContext } from "react";
import localeContext from "../../context/LocaleContext/LocaleContext";

export default function SupplierArea() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <section className="supplya-main">
      <div className="supplya-main__video">
        <video src="" className="supplya__video">
          <p>Não foi possível carregar o vídeo</p>
        </video>
      </div>
      <article className="item item--sm ">
        <h2>{locale.qualityAndEnvironment.supplierArea.item.title}</h2>
        <p>{locale.qualityAndEnvironment.supplierArea.item.child as string}</p>
      </article>

      <div className="supplya-refs outline">
        <a href="#" className="supplya-refs__link">
          {locale.qualityAndEnvironment.supplierArea.btn1Text}
        </a>
        <a href="#" className="supplya-refs__link">
          {locale.qualityAndEnvironment.supplierArea.btn2Text}
        </a>
        <a href="#" className="supplya-refs__link">
          {locale.qualityAndEnvironment.supplierArea.btn3Text}
        </a>
      </div>
    </section>
  );
}
