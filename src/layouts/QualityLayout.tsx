import { useContext } from "react";
import SubNav from "@components/SubNav/SubNav";
import { Outlet } from "react-router-dom";
import localeContext from "@context/LocaleContext/LocaleContext";
import Main from "@components/Main/Main";
import { LocaleContextState } from "@app-types/locale";

export default function QualityLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Main>
      <SubNav links={locale.qualityAndEnvironment.sublinks} />
      <Outlet />
    </Main>
  );
}
