import { useContext } from "react";
import styled from "styled-components";
import localeContext, {
  LocaleContextState,
} from "../../context/LocaleContext/LocaleContext";

import bandeiraBrasil from "../../assets/bandeira-brasil.f3c6710447c938bd5e4e.png";
import bandeiraEspanha from "../../assets/bandeira-espanha.3881af157e7e4d259a32.png";
import bandeiraEua from "../../assets/bandeira-eua.e961ece6e927d8260a82.png";
import logoZanaflex from "../../assets/logo-zanaflex.png";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopHeader = styled.div``;
const SubHeader = styled.div``;
const MainHeader = styled.header``;

export default function Header() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <MainHeader>
        <TopHeader>
          <div className="header__logo">
            <img src={logoZanaflex} alt="" />
          </div>
          <div className="header__right">
            <span>{locale.type}</span>
            <div className="header__countries">
              <button>
                <img src={bandeiraBrasil} alt="" />
              </button>
              <button>
                <img src={bandeiraEspanha} alt="" />
              </button>
              <button>
                <img src={bandeiraEua} alt="" />
              </button>
            </div>
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
                        <Link to={item.to + subItem.to} key={index}>
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
