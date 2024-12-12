import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import SubNav from "@components/SubNav/SubNav";
import itemImg1 from "@assets/vantagens.96787b694afc989430ca.png";
import itemOutlineImg from "@assets/download.png";
import ItemList from "@components/ItemList/ItemList";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import ItemElement from "@components/ItemElement/ItemElement";
import ItemImg from "@components/ItemImg/ItemImg";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemText from "@components/ItemText/ItemText";
import Container from "@components/Container/Container";
export default function DevAndTech() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Container padding="0 18rem">
      <section className="dt-main">
        <SubNav links={locale.devAndTech.sublinks} />

        <ItemHalf
          leftElement={
            <ItemElement
              padding="0 1rem 5rem"
              slideInFromLeft
              triggerOnce={true}
            >
              <ItemTitle borderBottom>
                {locale.devAndTech.gridItems[0].title}
              </ItemTitle>
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
              <ItemTitle borderBottom>
                {locale.devAndTech.gridItems[1].title}
              </ItemTitle>
              <ItemList
                gap=".25rem"
                items={locale.devAndTech.gridItems[1].child as string[]}
              />
            </ItemElement>
          }
          rightElement={
            <ItemElement
              outline
              gap={"3rem"}
              padding=".5rem 1.5rem"
              margin="0 auto"
              slideInFromRight
            >
              <ItemImg src={itemOutlineImg} width="15%" height="15%" />
              <ItemText>{locale.devAndTech.paragraph}</ItemText>
            </ItemElement>
          }
        />
      </section>
    </Container>
  );
}
