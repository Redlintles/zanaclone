import { useContext } from "react";
import { Outlet } from "react-router-dom";
import SubNav from "@components/SubNav/SubNav";
import localeContext from "@context/LocaleContext/LocaleContext";
import Main from "@components/Main/Main";

import { LocaleContextState } from "@app-types/locale";

export default function InstitucionalLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Main>
      <SubNav links={locale.company.sublinks} />

      <Outlet />
    </Main>
  );
}
