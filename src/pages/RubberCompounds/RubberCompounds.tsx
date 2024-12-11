import React, { useContext } from "react";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";
import ItemList from "@components/ItemList/ItemList";
import SlideShow from "@components/SlideShow/SlideShow";

import slideImg1 from "@assets/1.ffb8310e6b33d0499ecf.png";
import slideImg2 from "@assets/2.d3a1ff819856ea38a388.png";
import slideImg3 from "@assets/3.77fae1a72a94cc29cf9f.png";
import slideImg4 from "@assets/4.b0b6046ea862fb1bd717.png";
import slideImg5 from "@assets/5.78332f75ef7be2b32c46.png";
import slideImg6 from "@assets/6.6506603be7f22affdb74.png";
import Container from "@components/Container/Container";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemLink from "@components/ItemLink/ItemLink";
import ItemElement from "@components/ItemElement/ItemElement";
import styled from "styled-components";

const StyledLeftContainer = styled.div`
  width: 100%;
  .rubber-c__lists {
    padding-right: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .rubber-c__links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;

    & > div {
      display: flex;
      justify-content: center;
    }

    a {
      text-align: center;
      grid-column: span 1;
    }
  }
`;

export default function RubberCompounds() {
  const { locale } = useContext<LocaleContextState>(localeContext);

  const items1 = (locale.products.item2.child as string[]).slice(0, 6);
  const items2 = (locale.products.item2.child as string[]).slice(6);
  console.log(items1, items2);
  return (
    <Container>
      <div className="rubber-c-main">
        <ItemHalf
          leftElement={
            <ItemElement>
              <div>
                <ItemTitle borderBottom>
                  {locale.products.item1.title}
                </ItemTitle>
                <ItemList items={locale.products.item1.child as string[]} />
              </div>
              <StyledLeftContainer>
                <ItemTitle borderBottom>
                  {locale.products.item2.title}
                </ItemTitle>

                <div className="rubber-c__lists">
                  <ItemList items={items1} />
                  <ItemList items={items2} />
                </div>

                <div className="rubber-c__links">
                  <ItemLink to={locale.products.link1.to}>
                    {locale.products.link1.text}
                  </ItemLink>
                  <ItemLink to={locale.products.link2.to}>
                    {locale.products.link2.text}
                  </ItemLink>
                </div>
              </StyledLeftContainer>
            </ItemElement>
          }
          rightElement={
            <>
              <SlideShow
                images={[
                  slideImg1,
                  slideImg2,
                  slideImg3,
                  slideImg4,
                  slideImg5,
                  slideImg6,
                ]}
              />
            </>
          }
        />
      </div>
    </Container>
  );
}
