import { useContext } from "react";
import localeContext from "@context/LocaleContext/LocaleContext";
import { LocaleContextState } from "@app-types/locale";

import { Link } from "react-router-dom";
import distributionsImg from "@assets/formatos-de-distribuicao.bc1b8916ccd13ba7a9e9.png";
import ItemList from "@components/ItemList/ItemList";
export default function Home() {
  const { locale } = useContext<LocaleContextState>(localeContext);
  return (
    <main className="home main">
      <section className="home-video">
        <video
          // src="https://znfx.com.br/files/vinheta.mp4"
          preload="auto"
          autoPlay
          controls
          loop
          className="home-video__video"
        ></video>
      </section>
      <section className="home-main">
        <div className="home-main__container home-main__container--b-bottom">
          <article className="home-main__article">
            <h2>{locale.home.gridItems[0].title}</h2>
            <p>{locale.home.gridItems[0].child as string}</p>
            <Link to="/produtos/compostos-de-borracha">{locale.knowMore}</Link>
          </article>
          <article className="home-main__article home-main__article--img">
            <h2>{locale.home.gridItems[1].title}</h2>
            <p>{locale.home.gridItems[1].child as string}</p>
            <img src={distributionsImg} alt="" />
            <Link to="/produtos/formatos-dos-compostos">{locale.knowMore}</Link>
          </article>
        </div>

        <div className="home-main__container">
          <article className="home-main__article slide--from-right">
            <h2>{locale.home.gridItems[2].title}</h2>
            <p>{locale.home.gridItems[2].child as string}</p>
            <Link to="/infrasestrutura/instalacoes">{locale.knowMore}</Link>
          </article>
          <article className="home-main__article home-main__article--border slide--from-left">
            <h2>{locale.home.gridItems[3].title}</h2>
            <ItemList items={locale.home.gridItems[3].child as string[]} />
            <p>{locale.home.gridItems[3].text}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
