import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import Container from "@components/Container/Container";
import ItemLink from "@components/ItemLink/ItemLink";
import ItemElement from "@components/ItemElement/ItemElement";
import ItemFull from "@components/ItemFull/ItemFull";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemText from "@components/ItemText/ItemText";
import styled from "styled-components";

const StyledSupplierAreaMain = styled.section`
  & > .supplya-main__video {
    & > video {
      width: 100%;
      height: 400px;
    }
  }
`;
const StyledSupplierAreaLinks = styled.div`
  padding-bottom: 2rem;
  position: relative;
  &::after {
    --width: 20%;
    position: absolute;
    content: "";
    width: var(--width);
    left: calc(calc(100% - var(--width)) / 2);
    bottom: -3rem;
    height: 5px;
    background-color: var(--color-gray);
  }
  margin: 0;
`;

export default function SupplierArea() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <StyledSupplierAreaMain>
      <div className="supplya-main__video">
        <video
          src="https://zanaflex.com.br/files/webinar2022.mp4"
          controls
          autoPlay
          loop
          preload="auto"
          className="supplya__video"
        >
          <p>Não foi possível carregar o vídeo</p>
        </video>
      </div>
      <Container>
        <ItemFull borderTopNone margin="0 24rem 2rem" padding="4rem 0">
          <ItemTitle padding="0" margin="0 auto">
            {locale.qualityAndEnvironment.supplierArea.item.title}
          </ItemTitle>
          <ItemText fontSize="1.25rem">
            {locale.qualityAndEnvironment.supplierArea.item.child as string}
          </ItemText>
        </ItemFull>
        <StyledSupplierAreaLinks>
          <ItemElement outline width="20%" margin="2rem auto">
            <ItemLink to="#">
              {locale.qualityAndEnvironment.supplierArea.btn1Text}
            </ItemLink>
            <ItemLink to="#">
              {locale.qualityAndEnvironment.supplierArea.btn2Text}
            </ItemLink>
            <ItemLink to="#">
              {locale.qualityAndEnvironment.supplierArea.btn3Text}
            </ItemLink>
          </ItemElement>
        </StyledSupplierAreaLinks>
      </Container>
    </StyledSupplierAreaMain>
  );
}
