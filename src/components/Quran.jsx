import { AnimationOnScroll } from "react-animation-on-scroll";
import Logo from "../assets/Logo.png";
import Leaf from "../assets/leaf2.png";

export default function Quran() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="relative text-center py-24 px-12 space-y-4 flex flex-col">
        <img
          className="absolute left-[-10px] top-[50%] opacity-30  h-[140px]"
          src={Leaf}
        />
        <div className="flex items-center justify-center relative before:content-[''] before:h-[3px] before:w-full before:bg-tussock-400 before:absolute">
          <AnimationOnScroll animateIn="animate__bounceIn">
            <img src={Logo} className="w-[124px] z-[2] bg-white" />
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <p className="!mt-[60px]">
            "Dan di antara tanda-tanda kebesaran-Nya ialah diciptakan-Nya
            untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapatkan
            ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu
            sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi
            orang-orang yang berfikir"
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <span>QS. Ar-Rum:21</span>
        </AnimationOnScroll>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#EEDEC9"
          fillOpacity="1"
          d="M0,128L48,160C96,192,192,256,288,272C384,288,480,256,576,213.3C672,171,768,117,864,122.7C960,128,1056,192,1152,224C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
