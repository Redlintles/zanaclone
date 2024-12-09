import styled from "styled-components";

interface SgiBottomImgProps {
  src: string;
  links?: { to: string; top: string[]; bottom: string };
}

const StyledSgiBottomImg = styled.div``;

export default function SgiBottomImg({ src, links }: SgiBottomImgProps) {
  return (
    <StyledSgiBottomImg>
      <img src={src} alt="" className="img-wrapper__img" />

      {links && (
        <div className="img-wrapper__text">
          <div className="img-wrapper__link-top">
            {links.top.map((item) => (
              <a href={links.to}>{item}</a>
            ))}
          </div>
          <div className="img-wrapper__link-bottom">
            <a href={links.to}>{links.bottom}</a>
          </div>
        </div>
      )}
    </StyledSgiBottomImg>
  );
}
