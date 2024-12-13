import { useContext } from "react";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";

import product1 from "@assets/wigwag.e59c712b1976b5f1ba3c.png";
import product2 from "@assets/mantas.e6cf90e13d9bb90c0406.png";
import product3 from "@assets/tiras.a515992901c195cf6266.png";
import product4 from "@assets/tiras-perfuradas.ff2e9063fca03ba3dce1.png";
import product5 from "@assets/pre-formados.19964f413582344cc4a2.png";
import product6 from "@assets/granulado.3e4b371b3424e407e961.png";
import product7 from "@assets/calandrado.cef89e2a3f8f3e535ec7.png";
import Container from "@components/Container/Container";
import ItemElement from "@components/ItemElement/ItemElement";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemText from "@components/ItemText/ItemText";
import Separator from "@components/Separator/Separator";
import styled from "styled-components";

const StyledCompoundFormatContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  flex: 1;
  & > article {
    grid-row: span 1;
  }
`;
const StyledCompoundFormat = styled.article`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .compound-format__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    & > p {
      text-align: center;
    }

    @media (min-width: 768px) {
      text-align: left;

      & > p {
        text-align: left;
      }
    }
  }

  & > img {
    transform: scale(0.7, 0.7);
  }
`;

export default function CompoundFormat() {
  const { locale } = useContext<LocaleContextState>(localeContext);

  const images1 = [product1, product2, product3];
  const images2 = [product4, product5, product6, product7];
  return (
    <Container slideInFromRight>
      <div className="compounds-f-main">
        <ItemHalf
          leftElement={
            <ItemElement justifyContentStart>
              <div>
                <ItemTitle margin="0 auto 2rem" padding="0">
                  {locale.logistics.compoundFormat.item.title}
                </ItemTitle>
                <ItemText>
                  {locale.logistics.compoundFormat.item.child as string}
                </ItemText>
              </div>
              <Separator width="65%" />
              <StyledCompoundFormatContainer>
                {locale.logistics.compoundFormat.formats1.map((item, index) => (
                  <StyledCompoundFormat>
                    <img src={images1[index]} alt="" />
                    <div className="compound-format__text">
                      <h5>{item.title}</h5>
                      <ItemText>{item.child as string}</ItemText>
                    </div>
                  </StyledCompoundFormat>
                ))}
              </StyledCompoundFormatContainer>
            </ItemElement>
          }
          rightElement={
            <>
              <ItemElement justifyContentStart>
                <StyledCompoundFormatContainer>
                  {locale.logistics.compoundFormat.formats2.map(
                    (item, index) => (
                      <StyledCompoundFormat>
                        <img src={images2[index]} alt="" />
                        <div className="compound-format__text">
                          <h5>{item.title}</h5>
                          <ItemText>{item.child as string}</ItemText>
                        </div>
                      </StyledCompoundFormat>
                    )
                  )}
                </StyledCompoundFormatContainer>
              </ItemElement>
            </>
          }
        />
      </div>
    </Container>
  );
}
