import { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "../../hooks/useClassManager";

const ItemHalfContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 2rem;
  padding: 5rem 0;

  & > * {
    grid-column: span 1;
  }

  &.item-half--border-bottom {
    border-bottom: 5px solid var(--color-gray);
  }
`;

interface ItemHalfProps {
  leftElement: ReactNode;
  rightElement: ReactNode;
  borderBottom?: boolean;
}
export default function ItemHalf({
  leftElement,
  rightElement,
  borderBottom,
}: ItemHalfProps) {
  const [manager] = useClassManager("", [
    [borderBottom, "item-half--border-bottom"],
  ]);

  return (
    <ItemHalfContainer className={manager.getResult()}>
      <div className="item-half__left">{leftElement}</div>
      <div className="item-half__right">{rightElement}</div>
    </ItemHalfContainer>
  );
}
