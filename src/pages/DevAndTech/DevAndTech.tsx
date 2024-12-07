import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import SubNav from "@components/SubNav/SubNav";
import itemImg1 from "@assets/vantagens.96787b694afc989430ca.png";
import itemOutlineImg from "@assets/download.png";
import ItemList from "@components/ItemList/ItemList";
import Main from "../../components/Main/Main";
import ItemHalf from "../../components/ItemHalf/ItemHalf";
import ItemElement from "../../components/ItemElement/ItemElement";
import ItemImg from "../../components/ItemImg/ItemImg";
import ItemTitle from "../../components/ItemTitle/ItemTitle";
import ItemText from "../../components/ItemText/ItemText";
export default function DevAndTech() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Main>
      <section className="dt-main">
        <SubNav links={locale.devAndTech.sublinks} />

        <ItemHalf
          leftElement={
            <ItemElement>
              <ItemTitle>{locale.devAndTech.gridItems[0].title}</ItemTitle>
              <ItemText>
                {locale.devAndTech.gridItems[0].child as string}
              </ItemText>
            </ItemElement>
          }
          rightElement={
            <ItemElement>
              <ItemImg src={itemImg1} />
            </ItemElement>
          }
          borderBottom
        />

        <ItemHalf
          leftElement={
            <ItemElement>
              <ItemTitle>{locale.devAndTech.gridItems[1].title}</ItemTitle>
              <ItemList
                items={locale.devAndTech.gridItems[1].child as string[]}
              />
            </ItemElement>
          }
          rightElement={
            <ItemElement outline gap={"5rem"}>
              <ItemImg src={itemOutlineImg} width="15%" height="15%" />
              <ItemText>{locale.devAndTech.paragraph}</ItemText>
            </ItemElement>
          }
        />
      </section>
    </Main>
  );
}
