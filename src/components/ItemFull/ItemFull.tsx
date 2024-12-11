import { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "@hooks/useClassManager";

const StyledItemFull = styled.article`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 5px solid var(--color-gray);
  border-bottom: 5px solid var(--color-gray);

  &.item-full__b-top-none {
    border-top: none;
  }
  &.item-full__b-bottom-none {
    border-bottom: none;
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

  manager.append([borderTopNone, "item-full__b-top-none"]);
  manager.append([borderBottomNone, "item-full__b-bottom-none"]);
  return (
    <StyledItemFull style={{ margin, padding }} className={manager.getResult()}>
      {children}
    </StyledItemFull>
  );
}
