import cultureImg from "@assets/cultura.bcf7316d55e0217a58e8.png";
import styled from "styled-components";
import Container from "@components/Container/Container";
import useAnimationToggler from "../../hooks/useAnimationToggler";
import { SlideInFromLeft } from "../../Animations/SlideIn";

const StyledCulture = styled.section`
  width: 100%;
  &.culture--slide-in-left {
    animation: ${SlideInFromLeft()} 0.5s ease;
  }

  & > img {
    width: 100%;
  }
`;

export default function Culture() {
  const { ref, animationClass, showAnimation } = useAnimationToggler({
    triggerOnce: true,
    animationClass: "culture--slide-in-left",
  });
  return (
    <Container>
      <StyledCulture ref={ref} className={showAnimation ? animationClass : ""}>
        <img src={cultureImg} />
      </StyledCulture>
    </Container>
  );
}
