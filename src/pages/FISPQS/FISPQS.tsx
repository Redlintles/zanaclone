import { useContext } from "react";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";
import ItemList from "@components/ItemList/ItemList";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemText from "@components/ItemText/ItemText";
import Container from "@components/Container/Container";
import ItemElement from "@components/ItemElement/ItemElement";
import styled from "styled-components";
import useAnimationToggler from "../../hooks/useAnimationToggler";
import { fadeIn } from "../../Animations/FadeIn";

const StyledFISPQSMainText = styled.section`
  opacity: 0;
  transition: 1.5s ease opacity;

  &.fisps__main-text--fade-in {
    animation: ${fadeIn} 1.5s ease forwards;
  }
`;

const StyledFISPQSMain = styled.section`
  margin: 0 auto;

  & > article {
    align-items: center;
    justify-content: flex-start;

    & > ul {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    & > article {
      flex-direction: row;
      justify-content: center;

      & > ul {
        width: auto;
      }
    }
  }
  @media (min-width: 996px) {
    width: 60%;
  }
`;

export default function FISPQS() {
  const { locale } = useContext<LocaleContextState>(localeContext);

  const { showAnimation, animationClass, ref } = useAnimationToggler({
    triggerOnce: true,
    animationClass: "fisps__main-text--fade-in",
  });
  return (
    <Container>
      <div className="fispqs-main">
        <StyledFISPQSMainText
          ref={ref}
          className={showAnimation ? animationClass : ""}
        >
          <ItemTitle padding="0" margin="0 auto 2rem">
            {locale.qualityAndEnvironment.fispsqsArea.item.title}
          </ItemTitle>
          <ItemText fontSize="1.3rem" textCenter>
            {locale.qualityAndEnvironment.fispsqsArea.item.child as string}
          </ItemText>
        </StyledFISPQSMainText>

        <StyledFISPQSMain>
          <ItemElement outline margin="4rem auto">
            <ItemList
              gap="2rem"
              items={locale.qualityAndEnvironment.fispsqsArea.sublinks1}
            />
            <ItemList
              gap="2rem"
              items={locale.qualityAndEnvironment.fispsqsArea.sublinks2}
            />
          </ItemElement>
        </StyledFISPQSMain>
      </div>
    </Container>
  );
}
