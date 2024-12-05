import { useContext } from "react";
import SlideShow from "../../components/SlideShow/SlideShow";
import localeContext, {
  LocaleContextState,
} from "../../context/LocaleContext/LocaleContext";

import slideImage1 from "../../assets/1.84dda64e441454bf4f2b.png";
import slideImage2 from "../../assets/2.4289e1800f824816876f.png";
import slideImage3 from "../../assets/3.db2dd3cb509ef30839b7.png";
import slideImage4 from "../../assets/4.3628580f155f4345d3e5.png";
import slideImage5 from "../../assets/5.81592fb64ac45a55ed47.png";

export default function Facilities() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <section className="facilities-main">
        <article className="item item--half">
          <div className="item-half__left">
            <h2>{locale.infrastructure.facilitiesPage.title}</h2>
            <ul className="item-list">
              {locale.infrastructure.facilitiesPage.child &&
                (locale.infrastructure.facilitiesPage.child as string[]).map(
                  (item, index) => (
                    <li key={index} className="item-list__item">
                      <p className="item__text">{item}</p>
                    </li>
                  )
                )}
            </ul>
          </div>
          <div className="item-half__right">
            <SlideShow
              images={[
                slideImage1,
                slideImage2,
                slideImage3,
                slideImage4,
                slideImage5,
              ]}
            />
          </div>
        </article>
      </section>
    </>
  );
}
