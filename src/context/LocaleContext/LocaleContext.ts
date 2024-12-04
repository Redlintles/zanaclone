import { createContext } from "react";
import PTBRLocale from "../../../locale/PTBR";
import { GlobalLocale } from "../../types/Locale";

export interface LocaleContextState {
  locale: GlobalLocale;
  setLocale: React.Dispatch<React.SetStateAction<GlobalLocale>>;
}

const defaultValue: LocaleContextState = {
  locale: PTBRLocale,
  setLocale: () => {},
};

const localeContext = createContext<LocaleContextState>(defaultValue);

export default localeContext;
