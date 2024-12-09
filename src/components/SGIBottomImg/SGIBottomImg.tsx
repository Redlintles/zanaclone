import { Link } from "react-router-dom";
import styled from "styled-components";

interface SgiBottomImgProps {
  src: string;
  links?: { to: string; top: string[]; bottom: string };
}

const StyledSgiBottomImg = styled.div`
  position: relative;

  & > .img-wrapper__text {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 5px solid white;
    padding: 1rem;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s ease opacity, 0.5s ease visibility;

    a {
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }

    & > .img-wrapper__link-top {
      display: flex;
      flex-direction: column;
    }
  }

  &:hover > .img-wrapper__text {
    opacity: 1;
    visibility: visible;
  }
`;

export default function SgiBottomImg({ src, links }: SgiBottomImgProps) {
  return (
    <StyledSgiBottomImg>
      <img src={src} alt="" className="img-wrapper__img" />

      {links && (
        <div className="img-wrapper__text">
          <div className="img-wrapper__link-top">
            {links.top.map((item) => (
              <Link to={links.to}>{item}</Link>
            ))}
          </div>
          <div className="img-wrapper__link-bottom">
            <Link to={links.to}>{links.bottom}</Link>
          </div>
        </div>
      )}
    </StyledSgiBottomImg>
  );
}
