import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface SubNavProps {
  links: Array<{ text: string; to: string }>;
}

const StyledSubNav = styled.nav``;

export default function SubNav({ links }: SubNavProps) {
  const { pathname } = useLocation();

  const match = pathname.match(new RegExp("^(/[^/]+)"));
  let superLink = "";
  if (match) {
    superLink = match[1];
  }
  return (
    <StyledSubNav>
      {links &&
        links.map((item, index) => (
          <Link
            key={index}
            className="main-subnav__link"
            to={superLink + item.to}
          >
            {item.text}
          </Link>
        ))}
    </StyledSubNav>
  );
}
