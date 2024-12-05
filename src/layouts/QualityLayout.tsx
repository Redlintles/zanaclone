import React, { useContext } from "react";
import SubNav from "../components/SubNav/SubNav";
import { Outlet } from "react-router-dom";
import localeContext, {
  LocaleContextState,
} from "../context/LocaleContext/LocaleContext";

export default function QualityLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <main className="main">
      <SubNav links={locale.qualityAndEnvironment.sublinks} />
      <Outlet />
    </main>
  );
}
