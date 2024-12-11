import { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "@hooks/useClassManager";

const StyledItemTitle = styled.h2`
  color: var(--color-gray);
  font-size: 1.5rem;
  padding-bottom: 2rem;

  &.item__title--b-bottom {
    border-bottom: 4px solid var(--color-gray);
  }

  &.item__title--bold {
    font-weight: 450;
  }
  text-align: center;
  line-height: 40px;
  width: fit-content;
  margin: 0 auto 2rem;
`;

interface ItemTitleProps {
  children: ReactNode;
  borderBottom?: boolean;
  bold?: boolean;
  margin?: string;
  padding?: string;
}

export default function ItemTitle({
  children,
  borderBottom,
  bold,
  margin,
  padding,
}: ItemTitleProps) {
  const [manager] = useClassManager("", [
    [borderBottom, "item__title--b-bottom"],
    [bold, "item__title--bold"],
  ]);
  return (
    <StyledItemTitle
      className={manager.getResult()}
      style={{ margin, padding }}
    >
      {children}
    </StyledItemTitle>
  );
}
