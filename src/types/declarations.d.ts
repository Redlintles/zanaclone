declare module "@locale/*";
declare module "@assets/*" {
  const value: string;
  export default value;
}
declare module "@hooks/*";
declare module "@pages/*";
declare module "@components/*";
declare module "@utils/*";
declare module "@layouts/*";
declare module "@context/*";

declare module "@app-types/global" {
  export interface LinkData {
    text: string;
    to: string;
  }
}
