import React, { useContext } from "react";
import SubNav from "../components/SubNav/SubNav";
import localeContext, {
  LocaleContextState,
} from "../context/LocaleContext/LocaleContext";
import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <main className="main">
      <SubNav links={[locale.products.sublink]} />
      <Outlet />
    </main>
  );
}
