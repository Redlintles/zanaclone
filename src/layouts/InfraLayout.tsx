import { useContext } from "react";
import { Outlet } from "react-router-dom";
import SubNav from "@components/SubNav/SubNav";
import Main from "@components/Main/Main";
import localeContext from "@context/LocaleContext/LocaleContext";
import { LocaleContextState } from "@app-types/locale";
export default function InfraLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Main>
      <SubNav links={locale.infrastructure.sublinks} />
      <Outlet />
    </Main>
  );
}
