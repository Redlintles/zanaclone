interface HeaderLinkLocale {
  text: string;
  to: string;
  sublinks?: Array<HeaderLinkLocale>;
}

interface GridItem {
  title: string;
  child: string | string[];
}

interface HomeLocale {
  gridItems: Array<GridItem>;
}

interface HistoryDialog {
  year: number;
  text: string;
}

interface Company {
  history: HistoryLocale;
  sublinks: string[];
}

interface HistoryLocale {
  subLinks: string[];
  items: Array<GridItem>;
  dialogs: Array<HistoryDialog>;
}

interface InfraLocale {
  subLinks: string[];
  facilitiesPage: GridItem;
  labsPage: GridItem;
  analysisPage: AnalysisLocale;
}

interface AnalysisLocale {
  gridItems: Array<GridItem>;
}

interface DevAndTechLocale {
  title: string;
  gridItems: GridItem;
  paragraph: string;
}

interface QualityAndEnvironmentLocale {
  sublinks: string[];
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
  certifications: string;
  btnText: string;
}

interface SupplierAreaLocale {
  item: GridItem;
  btn1Text: string;
  btn2Text: string;
  btn3Text: string;
}

interface FISPQSLocale {
  ITEM: GridItem;
  subLinks: string[];
}

interface LogisticsLocale {
  sublinks: string[];
  item: GridItem;
  storage: GridItem;
  compoundOutput: Array<GridItem>;
  compoundFormat: {
    item: GridItem;
    formats: Array<GridItem>;
  };
}

interface ProductsLocale {
  sublink: string;
  link1Text: string;
  link2Text: string;
  item1: GridItem;
  item2: GridItem;
}

interface ContactLocale {
  sublinks: string;
  talkWithUs: TalkWithUsLocale;
  workWithUs: WorkWithUsLocale;
}

interface TalkWithUsLocale {
  formTitle: string;
  formSubmit: string;
  formTerms: string;
  formInputs: string[];
}

interface WorkWithUsLocale {
  title: string;
  paragraphs: string[];
  callToAction: string;
}

interface FooterLocale {
  text: string;
}

export interface GlobalLocale {
  type: string;
  headerLinks: Array<HeaderLinkLocale>;
  home: HomeLocale;
  knowMore: string;
  footer: FooterLocale;
  company: Company;
  infrastructure: InfraLocale;
  devAndTech: DevAndTechLocale;
  qualityAndEnvironment: QualityAndEnvironmentLocale;
  logistics: LogisticsLocale;
  products: ProductsLocale;
  contactLocale: ContactLocale;
  links: GridItem;
}
