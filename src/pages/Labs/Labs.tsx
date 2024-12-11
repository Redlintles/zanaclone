import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import { LocaleContextState } from "@app-types/locale";

import labsImg from "@assets/laboratorios.21fae6aa25d15b016974.png";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import ItemImg from "@components/ItemImg/ItemImg";
import ItemElement from "@components/ItemElement/ItemElement";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemText from "@components/ItemText/ItemText";
import Container from "@components/Container/Container";

export default function Labs() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Container padding="2rem 18rem">
      <section className="labs-main">
        <ItemHalf
          padding="3rem 0"
          leftElement={
            <ItemElement justifyContentStart>
              <ItemTitle borderBottom>
                {locale.infrastructure.labsPage.title}
              </ItemTitle>
              <ItemText>
                {locale.infrastructure.labsPage.child as string}
              </ItemText>
            </ItemElement>
          }
          rightElement={
            <ItemElement padding="0">
              <ItemImg src={labsImg} />
            </ItemElement>
          }
        />
      </section>
    </Container>
  );
}
