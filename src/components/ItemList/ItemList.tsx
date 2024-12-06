interface ItemListProps {
  items: string[];
}

export default function ItemList({ items }: ItemListProps) {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index} className="item-list__item">
          <p className="item-list__text">{item}</p>
        </li>
      ))}
    </ul>
  );
}
