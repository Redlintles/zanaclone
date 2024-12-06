import { useContext } from "react";
import SubNav from "@components/SubNav/SubNav";
import cultureImg from "@assets/cultura.bcf7316d55e0217a58e8.png";
import localeContext from "@context/LocaleContext/LocaleContext";
import { LocaleContextState } from "@app-types/locale";

export default function Culture() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <main className="culture main">
      <SubNav links={locale.company.sublinks} />
      <img src={cultureImg} alt="" />
    </main>
  );
}
