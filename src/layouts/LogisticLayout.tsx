import { useContext } from "react";
import SubNav from "../components/SubNav/SubNav";
import localeContext, {
  LocaleContextState,
} from "../context/LocaleContext/LocaleContext";
import { Outlet } from "react-router-dom";

export default function LogisticLayout() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <main className="main">
      <SubNav links={locale.logistics.sublinks} />
      <Outlet />
    </main>
  );
}
