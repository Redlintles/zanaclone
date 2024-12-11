import { keyframes } from "styled-components";

const SlideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translate(-100%,0%);
  }

  to {
    opacity: 1;
    transform: translate(0%,0%);
  }
`;

export default SlideInFromLeft;
