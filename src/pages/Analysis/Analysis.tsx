import SlideShow from "@components/SlideShow/SlideShow";

import analysis2Img from "@assets/analises2.df3d2b8e48a54fd9ff14.png";

import slideImg1 from "@assets/1.c47cd8e495b9bcbe53b6.png";
import slideImg2 from "@assets/2.609fff439d8e38f9ee02.png";
import slideImg3 from "@assets/3.a73ce5af5645490b17a1.png";
import slideImg4 from "@assets/4.565777e30196c59f18bc.png";
import { useContext } from "react";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";
import ItemList from "@components/ItemList/ItemList";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemElement from "@components/ItemElement/ItemElement";
import ItemImg from "@components/ItemImg/ItemImg";
import Container from "@components/Container/Container";
export default function Analysis() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Container padding="0 18rem">
      <section className="analysis-main">
        <ItemHalf
          padding="0"
          leftElement={
            <ItemElement width="80%" margin="0 auto">
              <SlideShow
                images={[slideImg1, slideImg2, slideImg3, slideImg4]}
              />
            </ItemElement>
          }
          rightElement={
            <ItemElement>
              <ItemTitle borderBottom>
                {locale.infrastructure.analysisPage.gridItems[0].title}
              </ItemTitle>

              <ItemList
                items={
                  locale.infrastructure.analysisPage.gridItems[0]
                    .child as string[]
                }
              />
            </ItemElement>
          }
          borderBottom
        />

        <ItemHalf
          leftElement={
            <ItemElement>
              <ItemTitle borderBottom>
                {locale.infrastructure.analysisPage.gridItems[1].title}
              </ItemTitle>
              <ItemList
                items={
                  locale.infrastructure.analysisPage.gridItems[1]
                    .child as string[]
                }
              />
            </ItemElement>
          }
          rightElement={
            <ItemElement padding={"3rem 0 0"}>
              <ItemImg src={analysis2Img} />
            </ItemElement>
          }
        />
      </section>
    </Container>
  );
}
