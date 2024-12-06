import { useContext } from "react";
import ItemHalf from "@components/ItemHalf/ItemHalf";
import { LocaleContextState } from "@app-types/locale";
import localeContext from "@context/LocaleContext/LocaleContext";

import product1 from "@assets/wigwag.e59c712b1976b5f1ba3c.png";
import product2 from "@assets/mantas.e6cf90e13d9bb90c0406.png";
import product3 from "@assets/tiras.a515992901c195cf6266.png";
import product4 from "@assets/tiras-perfuradas.ff2e9063fca03ba3dce1.png";
import product5 from "@assets/pre-formados.19964f413582344cc4a2.png";
import product6 from "@assets/granulado.3e4b371b3424e407e961.png";
import product7 from "@assets/calandrado.cef89e2a3f8f3e535ec7.png";

export default function CompoundFormat() {
  const { locale } = useContext<LocaleContextState>(localeContext);

  const images1 = [product1, product2, product3];
  const images2 = [product4, product5, product6, product7];
  return (
    <>
      <div className="compounds-f-main">
        <ItemHalf
          leftElement={
            <>
              <div>
                <h2>{locale.logistics.compoundFormat.item.title}</h2>
                <p>{locale.logistics.compoundFormat.item.child as string}</p>
              </div>
              <div>
                {locale.logistics.compoundFormat.formats1.map((item, index) => (
                  <div>
                    <img src={images1[index]} alt="" />
                    <div className="">
                      <h5>{item.title}</h5>
                      <p>{item.child as string}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
          rightElement={
            <>
              <div>
                {locale.logistics.compoundFormat.formats2.map((item, index) => (
                  <div>
                    <img src={images2[index]} alt="" />
                    <div className="">
                      <h5>{item.title}</h5>
                      <p>{item.child as string}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
