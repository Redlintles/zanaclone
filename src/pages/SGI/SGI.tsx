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
import useAnimationToggler from "../../hooks/useAnimationToggler";
import { ScaleIn } from "../../Animations/ScaleIn";
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
      font-size: 1.7rem;
    }

    h3 {
      font-size: 1.3rem;
    }
  }
`;

const StyledSGIBottom = styled.section`
  background-color: var(--color-gray);
  padding: 2rem 2rem 0.125rem;
  text-align: center;

  @media (min-width: 1200px) {
    text-align: left;
    padding: 4rem 4rem 0.25rem;
  }

  .sgi-bottom__container {
    display: flex;
    flex-direction: column;
    @media (min-width: 1200px) {
      flex-direction: row;
      align-items: flex-end;
      gap: 4rem;
      padding-left: 32rem;
    }
  }

  .sgi-bottom__gallery {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    @media (min-width: 1200px) {
      margin-top: 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      & > div:first-child {
        grid-row: span 2 !important;
      }
    }

    & > div {
      width: 100%;
      grid-column: span 1;
      grid-row: span 1;
    }
  }
`;

const SGIBottomText = styled.div`
  opacity: 0;
  transform: scale(0);
  transition: 0.5s ease opacity, 0.5s ease transform;

  & > h4 {
    color: var(--color-yellow);
    font-size: 1.65rem;
    margin-bottom: 1rem;
  }
  & > p {
    color: var(--color-white);
  }

  @media (min-width: 1200px) {
    &.sgi-bottom__top {
      margin-bottom: 4rem;
    }

    &.sgi-bottom__bottom {
      padding-bottom: 3.5rem;

      & > p {
        padding-right: 2rem;
      }
    }
  }

  &.sgi__bottom-text--scale-in {
    animation: ${ScaleIn()} 0.5s ease forwards;
  }
`;

export default function SGI() {
  const { locale } = useContext<LocaleContextState>(localeContext);

  const {
    ref: refTop,
    animationClass: animationClassTop,
    showAnimation: showAnimationTop,
  } = useAnimationToggler({
    threshold: 0.2,
    animationClass: "sgi__bottom-text--scale-in",
  });
  const {
    ref: refBottom,
    animationClass: animationClassBottom,
    showAnimation: showAnimationBottom,
  } = useAnimationToggler({
    threshold: 0.2,
    animationClass: "sgi__bottom-text--scale-in",
  });
  return (
    <>
      <Container>
        <StyledSGIMain>
          <div className="sgi-main__header">
            <h2>{locale.qualityAndEnvironment.sgi.title}</h2>
            <h3>{locale.qualityAndEnvironment.sgi.subtitle}</h3>
          </div>

          <ItemHalf
            padding="2rem 0"
            leftElement={
              <ItemElement slideInFromLeft triggerOnce={true}>
                <ItemTitle borderBottom>
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
                <ItemImg src={sgiImg} width="30%" />
              </ItemElement>
            }
            borderBottom
          />
        </StyledSGIMain>
        <TermsAndConditions />
      </Container>
      <StyledSGIBottom>
        <SGIBottomText
          ref={refTop}
          className={
            "sgi-bottom__top" +
            (showAnimationTop ? " " + animationClassTop : "")
          }
        >
          <h4>{locale.qualityAndEnvironment.sgi.proficiency.item.title}</h4>
          <p>
            {locale.qualityAndEnvironment.sgi.proficiency.item.child as string}
          </p>
        </SGIBottomText>
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

          <SGIBottomText
            ref={refBottom}
            className={
              "sgi-bottom__bottom" +
              (showAnimationBottom ? " " + animationClassBottom : "")
            }
          >
            <h4>
              {locale.qualityAndEnvironment.sgi.proficiency.fispqs.item.title}
            </h4>
            <p>
              {
                locale.qualityAndEnvironment.sgi.proficiency.fispqs.item
                  .child as string
              }
            </p>
          </SGIBottomText>
        </div>
      </StyledSGIBottom>
    </>
  );
}
