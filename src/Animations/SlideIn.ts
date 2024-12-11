import { keyframes } from "styled-components";

const translateIntensity = "10";
const SlideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translate(-${translateIntensity}%,0%);
  }

  to {
    opacity: 1;
    transform: translate(0%,0%);
  }
`;
const SlideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translate(${translateIntensity}%,0%);
  }

  to {
    opacity: 1;
    transform: translate(0%,0%);
  }
`;
const SlideInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translate(0%,-${translateIntensity}%);
  }

  to {
    opacity: 1;
    transform: translate(0%,0%);
  }
`;
const SlideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translate(0%,${translateIntensity}%);
  }

  to {
    opacity: 1;
    transform: translate(0%,0%);
  }
`;

export { SlideInFromLeft, SlideInFromRight, SlideInFromTop, SlideInFromBottom };
