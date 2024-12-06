import React, { useContext } from "react";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";
import SlideShow from "@components/SlideShow/SlideShow";
import slideImg1 from "@assets/1.f9866822df258a175c32.png";
import slideImg2 from "@assets/2.944da3499056779605c4.png";
import slideImg3 from "@assets/3.b11fd608f92925682d0c.png";
import slideImg4 from "@assets/4.9c471b7742942084ac50.png";
import slideImg5 from "@assets/5.0803fb2f6cb1e905bde4.png";

import rightImg from "@assets/embalagens.57fd184c1374a660b29a.png";
export default function CompoundsOutput() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <section className="compounds-o-main">
        <ItemHalf
          leftElement={
            <>
              <h2>{locale.logistics.compoundOutput[0].title}</h2>
              <p>{locale.logistics.compoundOutput[0].child as string}</p>
              <SlideShow
                images={[slideImg1, slideImg2, slideImg3, slideImg4, slideImg5]}
              />
            </>
          }
          rightElement={
            <>
              <img src={rightImg} alt="" />
              <div>
                <h2>{locale.logistics.compoundOutput[1].title}</h2>
                <p>{locale.logistics.compoundOutput[1].child as string}</p>
              </div>
            </>
          }
        />
      </section>
    </>
  );
}
