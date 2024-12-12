import { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "@hooks/useClassManager";
import { SlideInFromLeft } from "../../Animations/SlideIn";
import useAnimationToggler from "../../hooks/useAnimationToggler";

const StyledItemFull = styled.article`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 5px solid var(--color-gray);
  border-bottom: 5px solid var(--color-gray);

  &.item-full--b-top-none {
    border-top: none;
  }
  &.item-full--b-bottom-none {
    border-bottom: none;
  }
  & > div.item-full--slide-in-left {
    animation: ${SlideInFromLeft()} 0.5s ease;
  }
`;

interface ItemFullProps {
  children: ReactNode;
  borderTopNone?: boolean;
  borderBottomNone?: boolean;
  margin?: string;
  padding?: string;
}

export default function ItemFull({
  children,
  borderTopNone,
  borderBottomNone,
  margin,
  padding,
}: ItemFullProps) {
  const [manager] = useClassManager("", []);

  const { ref, animationClass, showAnimation } = useAnimationToggler({
    threshold: 0.5,
    animationClass: "item-full--slide-in-left",
  });

  manager.append([borderTopNone, "item-full--b-top-none"]);
  manager.append([borderBottomNone, "item-full--b-bottom-none"]);
  return (
    <StyledItemFull style={{ margin, padding }} className={manager.getResult()}>
      <div ref={ref} className={showAnimation ? animationClass : ""}>
        {children}
      </div>
    </StyledItemFull>
  );
}
