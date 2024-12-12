import { keyframes } from "styled-components";

export const ScaleIn = function () {
  return keyframes`
    from {
      opacity: 0;
      transform: scale(0);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  `;
};
