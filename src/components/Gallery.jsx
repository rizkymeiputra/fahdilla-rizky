import { AnimationOnScroll } from "react-animation-on-scroll";
import A from "../assets/1.png";
import B from "../assets/2.png";
import C from "../assets/3.png";
import D from "../assets/4.png";
import E from "../assets/5.png";
import F from "../assets/6.png";
import G from "../assets/7.png";
import H from "../assets/8.png";

export default function Gallery() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-wrap p-6">
        <div className="overflow-hidden w-1/2">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <img className="w-full" src={A} />
          </AnimationOnScroll>
        </div>
        <div className="overflow-hidden w-1/2">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <img className="w-full" src={B} />
          </AnimationOnScroll>
        </div>
        <div className="overflow-hidden w-1/2">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <img className="w-full" src={C} />
          </AnimationOnScroll>
        </div>
        <div className="overflow-hidden w-1/2">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <img className="w-full" src={D} />
          </AnimationOnScroll>
        </div>
      </div>
      <div className="flex flex-col space-y-4 p-6">
        <div className="overflow-hidden">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <img src={E} />
          </AnimationOnScroll>
        </div>
        <div className="overflow-hidden">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <img src={F} />
          </AnimationOnScroll>
        </div>
        <div className="overflow-hidden">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <img src={G} />
          </AnimationOnScroll>
        </div>
        <div className="overflow-hidden">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <img src={H} />
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}
