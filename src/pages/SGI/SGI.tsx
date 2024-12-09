import { useContext } from "react";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";
import ItemList from "@components/ItemList/ItemList";
import sgiImg from "@assets/sgi.fa9cb7c40c299ebe64bc.png";
import styled from "styled-components";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import ItemElement from "@components/ItemElement/ItemElement";
import ItemImg from "@components/ItemImg/ItemImg";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemText from "@components/ItemText/ItemText";
import TermsAndConditions from "@components/TermsAndConditions/TermsAndConditions";
import SgiBottomImg from "@components/SGIBottomImg/SGIBottomImg";

import sgiImg1 from "@assets/0.6bc036b6cd0aff605a25.jpg";
import sgiImg2 from "@assets/download.jpeg";
import sgiImg3 from "@assets/2.3952e1e43bb98c285665.jpg";
import sgiImg4 from "@assets/3.890a49a0fca20dd7b51e.jpg";
import sgiImg5 from "@assets/4.b52cc68c4ea254df7af4.jpg";
import Container from "@components/Container/Container";
const StyledSGIMain = styled.section`
  & > .sgi-main__header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2,
    h3 {
      color: var(--color-gray);
      text-align: center;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

const StyledSGIBottom = styled.section`
  background-color: var(--color-gray);
  padding: 4rem 4rem 0.25rem;

  .sgi-bottom__top {
    margin-bottom: 4rem;
  }

  h4 {
    color: var(--color-yellow);
    font-size: 1.65rem;
    margin-bottom: 1rem;
  }
  p {
    color: var(--color-white);
  }

  .sgi-bottom__container {
    display: flex;
    align-items: flex-end;
    gap: 4rem;
    padding-left: 32rem;
  }

  .sgi-bottom__gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    & > div {
      grid-column: span 1;
      grid-row: span 1;
    }

    & > div:first-child {
      grid-row: span 2;
    }
  }

  .sgi-bottom__bottom {
    padding-bottom: 3.5rem;

    & > p {
      padding-right: 2rem;
    }
  }
`;

export default function SGI() {
  const { locale } = useContext<LocaleContextState>(localeContext);

  return (
    <>
      <Container>
        <StyledSGIMain>
          <div className="sgi-main__header">
            <h2>{locale.qualityAndEnvironment.sgi.title}</h2>
            <h3>{locale.qualityAndEnvironment.sgi.subtitle}</h3>
          </div>

          <ItemHalf
            leftElement={
              <ItemElement>
                <ItemTitle>
                  {locale.qualityAndEnvironment.sgi.main.title}
                </ItemTitle>
                <ItemText>
                  {locale.qualityAndEnvironment.sgi.main.text}
                </ItemText>
                <ItemList
                  items={
                    locale.qualityAndEnvironment.sgi.main.child as string[]
                  }
                />
              </ItemElement>
            }
            rightElement={
              <ItemElement>
                <ItemImg src={sgiImg} width="50%" />
              </ItemElement>
            }
            borderBottom
          />
        </StyledSGIMain>
        <TermsAndConditions />
      </Container>
      <StyledSGIBottom>
        <div className="sgi-bottom__top">
          <h4>{locale.qualityAndEnvironment.sgi.proficiency.item.title}</h4>
          <p>
            {locale.qualityAndEnvironment.sgi.proficiency.item.child as string}
          </p>
        </div>
        <div className="sgi-bottom__container">
          <div className="sgi-bottom__gallery">
            <SgiBottomImg src={sgiImg1} />
            <SgiBottomImg
              src={sgiImg2}
              links={
                locale.qualityAndEnvironment.sgi.proficiency.fispqs.links[0]
              }
            />
            <SgiBottomImg
              src={sgiImg3}
              links={
                locale.qualityAndEnvironment.sgi.proficiency.fispqs.links[1]
              }
            />
            <SgiBottomImg
              src={sgiImg4}
              links={
                locale.qualityAndEnvironment.sgi.proficiency.fispqs.links[2]
              }
            />
            <SgiBottomImg src={sgiImg5} />
          </div>

          <div className="sgi-bottom__bottom">
            <h4>
              {locale.qualityAndEnvironment.sgi.proficiency.fispqs.item.title}
            </h4>
            <p>
              {
                locale.qualityAndEnvironment.sgi.proficiency.fispqs.item
                  .child as string
              }
            </p>
          </div>
        </div>
      </StyledSGIBottom>
    </>
  );
}
