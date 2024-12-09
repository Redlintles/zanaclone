import { ReactNode } from "react";
import styled from "styled-components";
import useClassManager from "../../hooks/useClassManager";

interface ItemTextProps {
  children: ReactNode;
  textCenter?: boolean;
  fontSize?: string;
}

const StyledItemText = styled.p`
  color: var(--color-gray);
  line-height: 1.75rem;
  text-align: justify;

  &.item__text--center {
    text-align: center;
  }
`;
export default function ItemText({
  children,
  textCenter,
  fontSize,
}: ItemTextProps) {
  const [manager] = useClassManager("", []);

  manager.append([textCenter, "item__text--center"]);
  return (
    <StyledItemText style={{ fontSize }} className={manager.getResult()}>
      {children}
    </StyledItemText>
  );
}
