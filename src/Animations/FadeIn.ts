import { keyframes } from "styled-components";

export const fadeIn = function () {
  return keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  `;
};
