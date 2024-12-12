import { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "@hooks/useClassManager";

const ItemHalfContainer = styled.div`
  width: 100%;
  gap: 2rem;
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);

  & > * {
    grid-column: span 1;
    grid-row: span 1;
  }
  @media (min-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }

  &.item-half--border-bottom {
    border-bottom: 5px solid var(--color-gray);
  }
`;

interface ItemHalfProps {
  leftElement: ReactNode;
  rightElement: ReactNode;
  borderBottom?: boolean;
  padding?: string;
  margin?: string;
}
export default function ItemHalf({
  leftElement,
  rightElement,
  borderBottom,
  padding,
  margin,
}: ItemHalfProps) {
  const [manager] = useClassManager("", [
    [borderBottom, "item-half--border-bottom"],
  ]);

  return (
    <ItemHalfContainer
      className={manager.getResult()}
      style={{ margin, padding }}
    >
      <div className="item-half__left">{leftElement}</div>
      <div className="item-half__right">{rightElement}</div>
    </ItemHalfContainer>
  );
}
