import { useContext } from "react";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";
import storageImg from "@assets/armazenamento.bb0001c11eab834e9793.png";
import Container from "@components/Container/Container";
import ItemElement from "@components/ItemElement/ItemElement";
import ItemTitle from "@components/ItemTitle/ItemTitle";
import ItemText from "@components/ItemText/ItemText";
export default function Storage() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Container padding="0 18rem" margin="0" slideInFromRight>
      <div className="storage-main">
        <ItemHalf
          leftElement={
            <ItemElement justifyContentStart>
              <ItemTitle borderBottom>
                {locale.logistics.storage.title}
              </ItemTitle>
              <ItemText>{locale.logistics.storage.child as string}</ItemText>
            </ItemElement>
          }
          rightElement={
            <ItemElement>
              <img src={storageImg} alt="" className="storage-main__img" />
            </ItemElement>
          }
        />
      </div>
    </Container>
  );
}
