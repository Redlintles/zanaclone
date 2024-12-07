import React, { useContext } from "react";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";
import ItemList from "@components/ItemList/ItemList";
import SlideShow from "@components/SlideShow/SlideShow";

import slideImg1 from "@assets/1.ffb8310e6b33d0499ecf.png";
import slideImg2 from "@assets/2.d3a1ff819856ea38a388.png";
import slideImg3 from "@assets/3.77fae1a72a94cc29cf9f.png";
import slideImg4 from "@assets/4.b0b6046ea862fb1bd717.png";
import slideImg5 from "@assets/5.78332f75ef7be2b32c46.png";
import slideImg6 from "@assets/6.6506603be7f22affdb74.png";

export default function RubberCompounds() {
  const { locale } = useContext<LocaleContextState>(localeContext);

  const items1 = (locale.products.item2.child as string[]).slice(0, 6);
  const items2 = (locale.products.item2.child as string[]).slice(6);
  console.log(items1, items2);
  return (
    <>
      <div className="rubber-c-main">
        <ItemHalf
          leftElement={
            <>
              <div>
                <h2>{locale.products.item1.title}</h2>
                <ItemList items={locale.products.item1.child as string[]} />
              </div>
              <div>
                <h2>{locale.products.item2.title}</h2>

                <div>
                  <ItemList items={items1} />
                  <ItemList items={items2} />
                </div>

                <div>
                  <a href={locale.products.link1.to}>
                    {locale.products.link1.text}
                  </a>
                  <a href={locale.products.link2.to}>
                    {locale.products.link2.text}
                  </a>
                </div>
              </div>
            </>
          }
          rightElement={
            <>
              <SlideShow
                images={[
                  slideImg1,
                  slideImg2,
                  slideImg3,
                  slideImg4,
                  slideImg5,
                  slideImg6,
                ]}
              />
            </>
          }
        />
      </div>
    </>
  );
}
