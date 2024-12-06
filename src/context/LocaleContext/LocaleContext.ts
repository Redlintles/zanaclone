import { createContext } from "react";
import PTBRLocale from "@locale/PTBR.ts";
import { LocaleContextState } from "@app-types/locale";

const defaultValue: LocaleContextState = {
  locale: PTBRLocale,
  setLocale: () => {},
};

const localeContext = createContext<LocaleContextState>(defaultValue);

export default localeContext;
