import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import { LocaleContextState } from "@app-types/locale";
import distributionsImg from "@assets/formatos-de-distribuicao.bc1b8916ccd13ba7a9e9.png";
import ItemList from "@components/ItemList/ItemList";
import styled from "styled-components";
import ItemHalf from "../../components/ItemHalf/ItemHalf";
import ItemTitle from "../../components/ItemTitle/ItemTitle";
import ItemText from "../../components/ItemText/ItemText";
import ItemLink from "../../components/ItemLink/ItemLink";
import ItemElement from "../../components/ItemElement/ItemElement";

const StyledVideo = styled.video`
  height: 40vh;
  width: 100%;
`;

const StyledHomeMain = styled.section`
  padding: 3rem 20rem;
`;

export default function Home() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <main className="home main">
      <section className="home-video">
        <StyledVideo
          src="https://znfx.com.br/files/vinheta.mp4"
          preload="auto"
          autoPlay
          controls
          loop
          className="home-video__video"
        ></StyledVideo>
      </section>
      <StyledHomeMain>
        <ItemHalf
          borderBottom
          leftElement={
            <>
              <ItemElement>
                <ItemTitle>{locale.home.gridItems[0].title}</ItemTitle>
                <ItemText>{locale.home.gridItems[0].child as string}</ItemText>
                <ItemLink to="/produtos/compostos-de-borracha">
                  {locale.knowMore}
                </ItemLink>
              </ItemElement>
            </>
          }
          rightElement={
            <>
              <ItemElement>
                <ItemTitle>{locale.home.gridItems[1].title}</ItemTitle>
                <ItemText>{locale.home.gridItems[1].child as string}</ItemText>
                <img src={distributionsImg} alt="" />
                <ItemLink to="/produtos/formatos-dos-compostos">
                  {locale.knowMore}
                </ItemLink>
              </ItemElement>
            </>
          }
        />

        <ItemHalf
          leftElement={
            <>
              <ItemElement>
                <ItemTitle>{locale.home.gridItems[2].title}</ItemTitle>
                <ItemText>{locale.home.gridItems[2].child as string}</ItemText>

                <ItemLink to="/infrasestrutura/instalacoes">
                  {locale.knowMore}
                </ItemLink>
              </ItemElement>
            </>
          }
          rightElement={
            <>
              <ItemElement outline>
                <ItemTitle>{locale.home.gridItems[3].title}</ItemTitle>
                <ItemList items={locale.home.gridItems[3].child as string[]} />
                <ItemText>{locale.home.gridItems[3].text}</ItemText>
              </ItemElement>
            </>
          }
        />
      </StyledHomeMain>
    </main>
  );
}
