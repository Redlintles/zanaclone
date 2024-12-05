import React, { useContext } from "react";
import SubNav from "../components/SubNav/SubNav";
import localeContext, {
  LocaleContextState,
} from "../context/LocaleContext/LocaleContext";

export default function ProductsLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <main className="main">
      <SubNav links={[locale.products.sublink]} />
    </main>
  );
}
