import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Container from "@components/Container/Container";

interface SubNavProps {
  links: Array<{ text: string; to: string }>;
}

const StyledSubNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;

  .subnav__link {
    color: var(--color-gray);
    font-size: 2rem;

    &:hover {
      text-decoration: underline;
    }

    &--active {
      color: var(--color-yellow);
      text-decoration: underline;
    }
  }
`;

export default function SubNav({ links }: SubNavProps) {
  const { pathname } = useLocation();

  const match = pathname.match(new RegExp("^(/[^/]+)"));
  let superLink = "";
  if (match) {
    superLink = match[1];
  }
  return (
    <Container>
      <StyledSubNav>
        {links &&
          links.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                "subnav__link" +
                (isActive === true ? " subnav__link--active" : "")
              }
              to={superLink + item.to}
            >
              {item.text}
            </NavLink>
          ))}
      </StyledSubNav>
    </Container>
  );
}
