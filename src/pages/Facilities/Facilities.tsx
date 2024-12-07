import { useContext } from "react";
import SlideShow from "@components/SlideShow/SlideShow";
import localeContext from "@context/LocaleContext/LocaleContext";
import { LocaleContextState } from "@app-types/locale";

import slideImage1 from "@assets/1.84dda64e441454bf4f2b.png";
import slideImage2 from "@assets/2.4289e1800f824816876f.png";
import slideImage3 from "@assets/3.db2dd3cb509ef30839b7.png";
import slideImage4 from "@assets/4.3628580f155f4345d3e5.png";
import slideImage5 from "@assets/5.81592fb64ac45a55ed47.png";
import ItemList from "@components/ItemList/ItemList";
import ItemHalf from "../../components/ItemHalf/ItemHalf";
import ItemTitle from "../../components/ItemTitle/ItemTitle";
import ItemElement from "../../components/ItemElement/ItemElement";

export default function Facilities() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <section className="facilities-main">
        <ItemHalf
          leftElement={
            <>
              <ItemTitle>
                {locale.infrastructure.facilitiesPage.title}
              </ItemTitle>
              <ItemList
                items={locale.infrastructure.facilitiesPage.child as string[]}
              />
            </>
          }
          rightElement={
            <ItemElement>
              <SlideShow
                images={[
                  slideImage1,
                  slideImage2,
                  slideImage3,
                  slideImage4,
                  slideImage5,
                ]}
              />
            </ItemElement>
          }
        />
      </section>
    </>
  );
}
