import { Link } from "react-router-dom";
import useAnimationToggler from "../../hooks/useAnimationToggler";
import styled from "styled-components";
import { SlideInFromBottom } from "../../Animations/SlideIn";

const StyledCertMainImg = styled.div`
  position: relative;
  transform: translate(0);
  opacity: 0;
  transition: 0.5s ease transform, 0.5s ease opacity;

  &.cert-main__img--slide-in-bottom {
    animation: ${SlideInFromBottom(20)} 2s ease forwards;
  }

  .cert-main__tip {
    --width: 60%;
    position: absolute;
    font-size: 0.9rem;
    top: -8rem;
    width: var(--width);
    left: calc(calc(100% - var(--width)) / 2);
    opacity: 0;
    transition: 0.25s ease opacity;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--color-tip-orange);
  }

  .cert-main__link::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .cert-main__tip::before {
    position: absolute;
    bottom: calc(0px - 10px);
    left: calc(50% - 10px);

    width: 0;
    height: 0;
    content: "";
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid var(--color-tip-orange);
  }

  .cert-main__tip::after {
    content: ". Clique na imagem para baixar";
  }

  .cert-main__img {
    width: 250px;
  }

  .cert-main__link:hover + .cert-main__tip {
    opacity: 1;
  }
`;

interface CertMainImgProps {
  src: string;
  text: string;
}

export default function CertMainImg({ src, text }: CertMainImgProps) {
  const { ref, animationClass, showAnimation } = useAnimationToggler({
    animationClass: "cert-main__img--slide-in-bottom",
    threshold: 0.1,
  });
  return (
    <StyledCertMainImg
      ref={ref}
      className={showAnimation ? animationClass : ""}
    >
      <img src={src} className="cert-main__img" />
      <Link to="#" className="cert-main__link"></Link>
      <span className="cert-main__tip">{text}</span>
    </StyledCertMainImg>
  );
}
