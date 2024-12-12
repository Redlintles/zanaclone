import { useContext, useState } from "react";
import styled from "styled-components";
import localeContext from "@context/LocaleContext/LocaleContext";
import GlobalLocale, { LocaleContextState } from "@app-types/locale";

import bandeiraBrasil from "@assets/bandeira-brasil.f3c6710447c938bd5e4e.png";
import bandeiraEspanha from "@assets/bandeira-espanha.3881af157e7e4d259a32.png";
import bandeiraEua from "@assets/bandeira-eua.e961ece6e927d8260a82.png";
import logoZanaflex from "@assets/logo-zanaflex.png";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PTBRLocale from "@locale/PTBR";
import ENUSLocale from "@locale/ENUS";
import ESESLocale from "@locale/ESES";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlideInFromLeft } from "../../Animations/SlideIn";
import { IoMdClose } from "react-icons/io";
import { SlideOutToLeft } from "../../Animations/SlideOut";

const TopHeader = styled.header`
  display: flex;
  padding: 1.5rem 3rem;
  background-color: var(--color-gray);
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }

  @media (min-width: 996px) {
    padding: 0.5rem 11.25rem;
  }
  @media (min-width: 1200px) {
    padding: 1rem 22.5rem;
  }

  .header__logo {
    max-width: 303px;
    flex: 1;
  }

  .header__logo > img {
    width: 100%;
  }

  .header__right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
const SubHeader = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    background-color: var(--color-dark-bg);
    padding: 1rem;
    gap: 0.5rem;
    justify-content: center;
  }

  @media (min-width: 996px) {
    padding: 0.5rem 11.25rem;
    gap: 1rem;
  }
  @media (min-width: 1200px) {
    padding: 1rem 22.5rem;
    gap: 2rem;
  }

  .header-link {
    position: relative;
    color: white;
    border-radius: 5px;
    padding: 1rem 0.5rem;
    transition: 0.25s ease background-color;

    &:hover {
      background-color: var(--color-yellow);
    }

    &__link {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    &__link::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    a {
      color: inherit;
      font-size: 0.85rem;
    }

    &__sublinks {
      position: absolute;
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      left: 0;
      opacity: 0;
      visibility: hidden;
      width: max-content;
      min-width: 200%;
      background-color: var(--color-yellow);
      z-index: 10;

      &:hover {
        opacity: 1;
        visibility: visible;
      }
    }

    &__sublinks::before {
      position: absolute;
      content: "";
      top: -2rem;
      z-index: -1;
      left: 0;
      right: 0;
      bottom: 0;
    }

    &:hover > .header-link__sublinks {
      opacity: 1;
      visibility: visible;
    }

    &__sublink {
      white-space: nowrap;
      padding: 1.5rem 1rem;

      &:hover {
        background-color: var(--color-yellow-dark);
      }
    }
  }
`;
const MainHeader = styled.header`
  position: relative;
`;
const HeaderCountries = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & > span {
    color: white;
    font-size: 0.75rem;
  }
  & > div {
    display: flex;
    gap: 1rem;

    & > button {
      width: 1.2rem;
      cursor: pointer;
      background-color: var(--color-gray);
    }
    .header-countries__country {
      width: 100%;
    }
  }
`;

const StyledBurgerMenu = styled.button`
  display: block;
  font-size: 2.5rem;
  color: var(--color-white);
  background-color: transparent;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavSlide = styled.nav`
  opacity: 0;
  transform: translate(0);
  transition: 0.5s ease opacity, 0.5s ease transform;
  width: 100vw;
  background-color: var(--color-dark-bg);
  position: absolute;
  left: 0;
  animation: ${SlideOutToLeft(100)} 0.5s ease forwards;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 10;
  gap: 3rem;
  align-items: center;

  & > a {
    font-weight: bold;
    color: white;
  }

  &.nav-slide--slide-in {
    animation: ${SlideInFromLeft(100)} 0.5s ease forwards;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { locale, setLocale } = useContext<LocaleContextState>(localeContext);
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  function changeCountry(newLocale: GlobalLocale) {
    setLocale(newLocale);
  }

  return (
    <>
      <MainHeader>
        <TopHeader>
          <div className="header__logo">
            <img src={logoZanaflex} alt="" />
          </div>
          <div className="header__right">
            <StyledBurgerMenu onClick={() => setToggleNav((prev) => !prev)}>
              {toggleNav ? <IoMdClose /> : <GiHamburgerMenu />}
            </StyledBurgerMenu>
            <HeaderCountries>
              <span>{locale.type}</span>
              <div>
                <button onClick={() => changeCountry(PTBRLocale)}>
                  <img
                    src={bandeiraBrasil}
                    alt="Uma bandeira do Brasil"
                    className="header-countries__country"
                  />
                </button>
                <button onClick={() => changeCountry(ESESLocale)}>
                  <img
                    src={bandeiraEspanha}
                    alt="Um Bandeira da Espanha"
                    className="header-countries__country"
                  />
                </button>
                <button onClick={() => changeCountry(ENUSLocale)}>
                  <img
                    src={bandeiraEua}
                    alt="Uma Bandeira dos EUA"
                    className="header-countries__country"
                  />
                </button>
              </div>
            </HeaderCountries>
          </div>
        </TopHeader>
        <StyledNavSlide className={toggleNav ? "nav-slide--slide-in" : ""}>
          {locale.headerLinks.map((item) => (
            <Link to={item.to}>{item.text}</Link>
          ))}
        </StyledNavSlide>
        <SubHeader>
          {locale.headerLinks &&
            locale.headerLinks.map((item, index) => (
              <div className="header-link" key={index}>
                <Link to={item.to} className="header-link__link">
                  {item.text}
                  {item.sublinks && <FaCaretDown />}
                </Link>

                {item.sublinks && (
                  <div className="header-link__sublinks">
                    {item.sublinks &&
                      item.sublinks.map((subItem, index) => (
                        <Link
                          to={item.to + subItem.to}
                          key={index}
                          className="header-link__sublink"
                        >
                          {subItem.text}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
        </SubHeader>
      </MainHeader>
    </>
  );
}
