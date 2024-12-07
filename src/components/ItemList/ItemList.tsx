import styled from "styled-components";
import ItemText from "../ItemText/ItemText";

interface ItemListProps {
  items: string[];
}

const StyledItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
  & > li {
    position: relative;

    &::before {
      position: absolute;
      top: 0.75rem;
      left: -1rem;
      content: "";
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 50%;
      background-color: var(--color-gray);
    }
  }
`;

export default function ItemList({ items }: ItemListProps) {
  return (
    <StyledItemList>
      {items.map((item, index) => (
        <li key={index} className="item-list__item">
          <ItemText>{item}</ItemText>
        </li>
      ))}
    </StyledItemList>
  );
}
