import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ItemLinkProps {
  to: string;
  children: ReactNode;
}

const StyledItemLink = styled.div`
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-gray);
  border-radius: 50px;
  transition: 0.25s ease background-color;
  cursor: pointer;
  width: fit-content;
  margin: 2rem auto;
  position: relative;

  & > a {
    text-transform: uppercase;
    color: var(--color-gray);
    font-size: 0.9rem;
  }

  & > a::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:hover {
    background-color: var(--color-gray);
    & > a {
      text-decoration: underline;
      color: white;
    }
  }
`;

export default function ItemLink({ to, children }: ItemLinkProps) {
  return (
    <StyledItemLink>
      <Link to={to}>{children}</Link>
    </StyledItemLink>
  );
}
