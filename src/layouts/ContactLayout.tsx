import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import SubNav from "@components/SubNav/SubNav";
import { Outlet } from "react-router-dom";
import Main from "@components/Main/Main";
import { LocaleContextState } from "@app-types/locale";

export default function ContactLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <Main>
      <SubNav links={locale.contactLocale.sublinks} />
      <Outlet />
    </Main>
  );
}
