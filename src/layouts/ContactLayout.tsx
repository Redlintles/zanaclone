import React, { useContext } from "react";
import localeContext, {
  LocaleContextState,
} from "../context/LocaleContext/LocaleContext";
import SubNav from "../components/SubNav/SubNav";

export default function ContactLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <main className="main">
      <SubNav links={locale.contactLocale.sublinks} />
    </main>
  );
}
