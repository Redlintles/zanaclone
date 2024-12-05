import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../components/SubNav/SubNav";
import localeContext, {
  LocaleContextState,
} from "../context/LocaleContext/LocaleContext";

export default function InfraLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <main className="main">
      <SubNav links={locale.infrastructure.sublinks} />
      <Outlet />
    </main>
  );
}
