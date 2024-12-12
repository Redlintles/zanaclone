import { LocaleContextState } from "@app-types/locale";
import React, { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import supplyMap from "@assets/fornecedores-map.b685947c51d81821e53a.png";
import Container from "@components/Container/Container";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemText from "@components/ItemText/ItemText";
import styled from "styled-components";

const StyledSupplyMainMap = styled.section`
  margin-top: 2rem;
  & > img {
    width: 100%;
  }
`;
export default function Suppliers() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Container slideInFromLeft>
      <div className="supply-main">
        <section className="supply-main__text">
          <ItemTitle borderBottom bold>
            {locale.logistics.item.title}
          </ItemTitle>
          <ItemText textCenter>
            {locale.logistics.item.child as string}
          </ItemText>
        </section>
        <StyledSupplyMainMap>
          <img src={supplyMap} alt="" className="supply-man__img" />
        </StyledSupplyMainMap>
      </div>
    </Container>
  );
}
