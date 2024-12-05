import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Facilities from "./pages/Facilities/Facilities";
import Labs from "./pages/Labs/Labs";
import Analysis from "./pages/Analysis/Analysis";
import Culture from "./pages/Culture/Culture";
import History from "./pages/History/History";
import DevAndTech from "./pages/DevAndTech/DevAndTech";
import SGI from "./pages/SGI/SGI";
import Certifications from "./pages/Certifications/Certifications";
import SupplierArea from "./pages/SupplierArea/SupplierArea";
import FISPQS from "./pages/FISPQS/FISPQS";
import Suppliers from "./pages/Suplliers/Suppliers";
import Storage from "./pages/Storage/Storage";
import CompoundFormat from "./pages/CompoundsFormat/CompoundFormat";
import CompoundsOutput from "./pages/CompoundsOutput/CompoundsOutput";
import RubberCompounds from "./pages/RubberCompounds/RubberCompounds";
import Contact from "./pages/Contact/Contact";
import Localization from "./pages/Localization/Localization";
import WorkWithUs from "./pages/WorkWithUs/WorkWithUs";
import Links from "./pages/Links/Links";
import { useContext, useEffect } from "react";
import localeContext, {
  LocaleContextState,
} from "./context/LocaleContext/LocaleContext";
import InstitucionalLayout from "./layouts/InstitucionalLayout";
import InfraLayout from "./layouts/InfraLayout";
import QualityLayout from "./layouts/QualityLayout";
import LogisticLayout from "./layouts/LogisticLayout";
import ProductsLayout from "./layouts/ProductsLayout";
import ContactLayout from "./layouts/ContactLayout";

function App() {
  const { pathname } = useLocation();
  const { locale } = useContext<LocaleContextState>(localeContext);
  useEffect(() => {
    const titleObj = locale.titles.refs.find((item) => {
      if (pathname.includes(item.path)) {
        return true;
      } else {
        return false;
      }
    });
    if (titleObj) {
      document.title = titleObj.title;
    }
  }, [pathname, locale]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dt" element={<DevAndTech />} />
        <Route path="/links" element={<Links />} />
        <Route path="/institucional" element={<InstitucionalLayout />}>
          <Route index element={<History />} />
          <Route path="historia" element={<History />} />
          <Route path="cultura" element={<Culture />} />
        </Route>
        <Route path="/infraestrutura" element={<InfraLayout />}>
          <Route index element={<Facilities />} />
          <Route path="instalacoes" element={<Facilities />} />
          <Route path="laboratorios" element={<Labs />} />
          <Route path="analises" element={<Analysis />} />
        </Route>
        <Route path="/qualidade" element={<QualityLayout />}>
          <Route index element={<SGI />} />
          <Route path="politica-do-sgi" element={<SGI />} />
          <Route path="certificados" element={<Certifications />} />
          <Route path="area-fornecedor" element={<SupplierArea />} />
          <Route path="fispqs" element={<FISPQS />} />
        </Route>
        <Route path="/logistica" element={<LogisticLayout />}>
          <Route index element={<Suppliers />} />
          <Route path="fornecedores" element={<Suppliers />} />
          <Route path="armazenamento" element={<Storage />} />
          <Route path="saida-dos-compostos" element={<CompoundFormat />} />
          <Route path="formato-dos-compostos" element={<CompoundsOutput />} />
        </Route>
        <Route path="/produtos" element={<ProductsLayout />}>
          <Route index element={<RubberCompounds />} />
          <Route path="compostos-de-borracha" element={<RubberCompounds />} />
        </Route>
        <Route path="/contato" element={<ContactLayout />}>
          <Route index element={<Contact />} />
          <Route path="fale-conosco" element={<Contact />} />
          <Route path="localizacao" element={<Localization />} />
          <Route path="trabalhe-conosco" element={<WorkWithUs />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
