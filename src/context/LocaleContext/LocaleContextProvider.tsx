import React from "react";
import { ReactNode, useState } from "react";
import PTBRLocale from "../../../locale/PTBR";
import { GlobalLocale } from "../../types/Locale";
import localeContext from "./LocaleContext";

const LocaleContextProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<GlobalLocale>(PTBRLocale);
  return (
    <localeContext.Provider value={{ locale, setLocale }}>
      {children}
    </localeContext.Provider>
  );
};

export default LocaleContextProvider;
