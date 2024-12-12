import { keyframes } from "styled-components";

const SlideOutToRight = function (translateIntensity: number = 10) {
  return keyframes`
    from {
    opacity: 1;
    transform: translate(0%,0%);
  }
  to {
    opacity: 0;
    transform: translate(${translateIntensity}%,0%);
  }`;
};
const SlideOutToLeft = function (translateIntensity: number = 10) {
  return keyframes`
    from {
    opacity: 1;
    transform: translate(0%,0%);
  }
  to {
    opacity: 0;
    transform: translate(-${translateIntensity}%,0%);
  }`;
};
const SlideOutToTop = function (translateIntensity: number = 10) {
  return keyframes`
    from {
    opacity: 1;
    transform: translate(0%,0%);
  }
  to {
    opacity: 0;
    transform: translate(0%,-${translateIntensity}%);
  }`;
};
const SlideOutToBottom = function (translateIntensity: number = 10) {
  return keyframes`
    from {
    opacity: 1;
    transform: translate(0%,0%);
  }
  to {
    opacity: 0;
    transform: translate(0%,${translateIntensity}%);
  }`;
};

export { SlideOutToLeft, SlideOutToRight, SlideOutToTop, SlideOutToBottom };
