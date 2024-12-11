import { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "@hooks/useClassManager";

interface ItemTextProps {
  children: ReactNode;
  textCenter?: boolean;
  fontSize?: string;
  fontWeight?: string;
  textUnderline?: boolean;
  lineHeight?: string;
}

const StyledItemText = styled.p`
  color: var(--color-gray);
  line-height: 1.75rem;
  text-align: justify;

  &.item__text--center {
    text-align: center;
  }
  &.item__text--underline {
    text-decoration: underline;
  }
`;
export default function ItemText({
  children,
  textCenter,
  fontSize,
  fontWeight,
  textUnderline,
  lineHeight,
}: ItemTextProps) {
  const [manager] = useClassManager("", []);

  manager.append([textCenter, "item__text--center"]);
  manager.append([textUnderline, "item__text--underline"]);
  return (
    <StyledItemText
      style={{ fontSize, fontWeight, lineHeight }}
      className={manager.getResult()}
    >
      {children}
    </StyledItemText>
  );
}
