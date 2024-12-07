import { useContext } from "react";
import SubNav from "@components/SubNav/SubNav";
import localeContext from "@context/LocaleContext/LocaleContext";
import { Outlet } from "react-router-dom";
import Main from "@components/Main/Main";
import { LocaleContextState } from "@app-types/locale";

export default function LogisticLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Main>
      <SubNav links={locale.logistics.sublinks} />
      <Outlet />
    </Main>
  );
}
