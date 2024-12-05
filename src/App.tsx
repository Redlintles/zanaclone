import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import LocaleContextProvider from "./context/LocaleContext/LocaleContextProvider";

function App() {
  return (
    <>
      <LocaleContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dt" element={<DevAndTech />} />
            <Route path="/links" element={<Links />} />
            <Route path="/institucional" element={<History />}>
              <Route path="/institucional/historia" element={<History />} />
              <Route path="/institucional/cultura" element={<Culture />} />
            </Route>
            <Route path="/infraestrutura" element={<Facilities />}>
              <Route
                path="/infraestrutura/instalacoes"
                element={<Facilities />}
              />
              <Route path="/infraestrutura/laboratorios" element={<Labs />} />
              <Route path="/infraestrutura/analises" element={<Analysis />} />
            </Route>
            <Route path="/qualidade" element={<SGI />}>
              <Route path="/qualidade/politica-do-sgi" element={<SGI />} />
              <Route
                path="/qualidade/certificados"
                element={<Certifications />}
              />
              <Route
                path="/qualidade/area-fornecedor"
                element={<SupplierArea />}
              />
              <Route path="/qualidade/fispqs" element={<FISPQS />} />
            </Route>
            <Route path="/logistica" element={<Suppliers />}>
              <Route path="/logistica/fornecedores" element={<Suppliers />} />
              <Route path="/logistica/armazenamento" element={<Storage />} />
              <Route
                path="/logistica/saida-dos-compostos"
                element={<CompoundFormat />}
              />
              <Route
                path="/logistica/formato-dos-compostos"
                element={<CompoundsOutput />}
              />
            </Route>
            <Route path="/produtos" element={<RubberCompounds />}>
              <Route
                path="/produtos/compostos-de-borracha"
                element={<RubberCompounds />}
              />
            </Route>
            <Route path="/contato" element={<Contact />}>
              <Route path="/contato/fale-conosco" element={<Contact />} />
              <Route path="/contato/localizacao" element={<Localization />} />
              <Route
                path="/contato/trabalhe-conosco"
                element={<WorkWithUs />}
              />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </LocaleContextProvider>
    </>
  );
}

export default App;
