import { keyframes } from "styled-components";

const SlideInFromRight = function (translateIntensity: number = 10) {
  return keyframes`
  from {
    opacity: 0;
    transform: translate(${translateIntensity}%,0%);
  }

  to {
    opacity: 1;
    transform: translate(0%,0%);
  }`;
};
const SlideInFromLeft = function (translateIntensity: number = 10) {
  return keyframes`
  from {
    opacity: 0;
    transform: translate(-${translateIntensity}%,0%);
  }

  to {
    opacity: 1;
    transform: translate(0%,0%);
  }`;
};
const SlideInFromTop = function (translateIntensity: number = 10) {
  return keyframes`
  from {
    opacity: 0;
    transform: translate(0%,-${translateIntensity}%);
  }

  to {
    opacity: 1;
    transform: translate(0%,0%);
  }`;
};
const SlideInFromBottom = function (translateIntensity: number = 10) {
  return keyframes`
  from {
    opacity: 0;
    transform: translate(0%,${translateIntensity}%);
  }

  to {
    opacity: 1;
    transform: translate(0%,0%);
  }`;
};

export { SlideInFromLeft, SlideInFromRight, SlideInFromTop, SlideInFromBottom };
