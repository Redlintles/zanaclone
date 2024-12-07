interface LinkData {
  text: string;
  to: string;
}

interface DynamicTitleMapping {
  refs: Array<{ title: string; path: string }>;
}

interface LinkCalls {
  text: string;
  links: Array<LinkData>;
}
interface HeaderLinkLocale extends LinkData {
  sublinks?: Array<LinkData>;
}

interface GridItem {
  title: string;
  child: string | string[] | Array<LinkCalls>;
  text?: string;
}

interface HomeLocale {
  gridItems: Array<GridItem>;
}

interface HistoryDialog {
  year: number;
  text: string;
}

interface CompanyLocale {
  history: HistoryLocale;
  sublinks: Array<LinkData>;
}

interface HistoryLocale {
  items: Array<GridItem>;
  dialogs: Array<HistoryDialog>;
  termsTitle: string;
  termsLink: string;
}

interface InfraLocale {
  sublinks: Array<LinkData>;
  facilitiesPage: GridItem;
  labsPage: GridItem;
  analysisPage: AnalysisLocale;
}

interface AnalysisLocale {
  gridItems: Array<GridItem>;
}

interface DevAndTechLocale {
  sublinks: Array<LinkData>;
  gridItems: Array<GridItem>;
  paragraph: string;
}

interface QualityAndEnvironmentLocale {
  sublinks: Array<LinkData>;
  sgi: SGILocale;
  certifications: CertificationsLocale;
  supplierArea: SupplierAreaLocale;
  fispsqsArea: FISPQSLocale;
}

interface SGILocale {
  main: GridItem;
  title: string;
  subtitle: string;
  termsTitle: string;
  termsLink: string;
  proeficiency: {
    item: GridItem;
    fispqs: GridItem;
  };
}

interface CertificationsLocale {
  item: GridItem;
  btnText: string;
  hoverTexts: string[];
}

interface SupplierAreaLocale {
  item: GridItem;
  btn1Text: string;
  btn2Text: string;
  btn3Text: string;
}

interface FISPQSLocale {
  item: GridItem;
  sublinks1: string[];
  sublinks2: string[];
}

interface LogisticsLocale {
  sublinks: Array<LinkData>;
  item: GridItem;
  storage: GridItem;
  compoundOutput: Array<GridItem>;
  compoundFormat: {
    item: GridItem;
    formats1: Array<GridItem>;
    formats2: Array<GridItem>;
  };
}

interface ProductsLocale {
  sublink: LinkData;
  link1: LinkData;
  link2: LinkData;
  item1: GridItem;
  item2: GridItem;
}

interface ContactLocale {
  sublinks: Array<LinkData>;
  talkWithUs: TalkWithUsLocale;
  workWithUs: WorkWithUsLocale;
}

interface TalkWithUsLocale {
  formTitle: string;
  formSubmit: string;
  formTerms: string;
  formInputs: string[];
  formLink: LinkData;
  selectText: string[];
}

interface WorkWithUsLocale {
  title: string;
  paragraphs: string[];
  callToAction: string;
  formFields: string[];
}

interface FooterLocale {
  text: string;
}

declare module "@app-types/locale" {
  export interface LocaleContextState {
    locale: GlobalLocale;
    setLocale: React.Dispatch<React.SetStateAction<GlobalLocale>>;
  }

  export interface LinkCalls {
    text: string;
    links: Array<LinkData>;
  }
  export default interface GlobalLocale {
    type: string;
    headerLinks: Array<HeaderLinkLocale>;
    home: HomeLocale;
    knowMore: string;
    footer: FooterLocale;
    company: CompanyLocale;
    infrastructure: InfraLocale;
    devAndTech: DevAndTechLocale;
    qualityAndEnvironment: QualityAndEnvironmentLocale;
    logistics: LogisticsLocale;
    products: ProductsLocale;
    contactLocale: ContactLocale;
    links: GridItem;
    titles: DynamicTitleMapping;
  }

  export {};
}
