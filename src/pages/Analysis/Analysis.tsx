import SlideShow from "@components/SlideShow/SlideShow";

import slideImg1 from "@assets/1.c47cd8e495b9bcbe53b6.png";
import slideImg2 from "@assets/2.609fff439d8e38f9ee02.png";
import slideImg3 from "@assets/3.a73ce5af5645490b17a1.png";
import slideImg4 from "@assets/4.565777e30196c59f18bc.png";
export default function Analysis() {
  return (
    <section className="analysis-main">
      <div className="item item--half">
        <div className="item-half__left">
          <SlideShow images={[slideImg1, slideImg2, slideImg3, slideImg4]} />
        </div>
        <div className="item-half__right"></div>
      </div>
      <div className="item item--half">
        <div className="item-half__left"></div>
        <div className="item-half__right"></div>
      </div>
    </section>
  );
}
