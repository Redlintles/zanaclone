import { LocaleContextState } from "@app-types/locale";
import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import { LinkCalls } from "@app-types/locale";
import Container from "@components/Container/Container";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import styled from "styled-components";
import ItemText from "@components/ItemText/ItemText";
import { Link } from "react-router-dom";
import ItemElement from "@components/ItemElement/ItemElement";

const StyledLinkList = styled.ul`
  padding-left: 2rem;

  & > li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;

    &::before {
      --size: 5px;
      content: "";
      position: absolute;
      top: calc(50% - calc(var(--size) / 2));
      left: calc(var(--size) * -3);
      width: var(--size);
      height: var(--size);
      background-color: var(--color-gray);
      border-radius: 50%;
    }

    & > a {
      color: var(--color-gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
export default function Links() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Container slideInFromRight>
      <section className="links-main">
        <ItemTitle borderBottom>{locale.links.title}</ItemTitle>

        <ItemElement>
          <StyledLinkList>
            {(locale.links.child as Array<LinkCalls>).map((item, index) => (
              <li key={index}>
                <ItemText>{item.text}</ItemText>

                {item.links.map((link, index) => (
                  <Link key={index} to={link.to}>
                    {link.text}
                  </Link>
                ))}
              </li>
            ))}
          </StyledLinkList>
        </ItemElement>
      </section>
    </Container>
  );
}
