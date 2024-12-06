import { useContext } from "react";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";
import storageImg from "@assets/armazenamento.bb0001c11eab834e9793.png";
export default function Storage() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <>
      <div className="storage-main">
        <ItemHalf
          leftElement={
            <>
              <h2>{locale.logistics.storage.title}</h2>
              <p>{locale.logistics.storage.child as string}</p>
            </>
          }
          rightElement={
            <>
              <img src={storageImg} alt="" className="storage-main__img" />
            </>
          }
        />
      </div>
    </>
  );
}
