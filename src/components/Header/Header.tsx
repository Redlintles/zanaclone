import { useContext } from "react";
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

const TopHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 22.5rem;
  background-color: var(--color-gray);
  align-items: center;

  .header__logo {
    width: 303px;
  }

  .header__logo > img {
    width: 100%;
  }
`;
const SubHeader = styled.nav`
  display: flex;
  background-color: var(--color-dark-bg);
  padding: 1rem 22.5rem;
  gap: 2rem;
  justify-content: center;

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
const MainHeader = styled.header``;
const HeaderCountries = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

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

export default function Header() {
  const { locale, setLocale } = useContext<LocaleContextState>(localeContext);

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
