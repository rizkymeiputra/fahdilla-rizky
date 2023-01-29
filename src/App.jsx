import { useState } from "react";

import bgm from "../assets/bgm.mp3";
import useAudio from "./hooks/useAudio";
import Jumbotron from "./components/Jumbotron";
import Quran from "./components/Quran";
import CalonPengantin from "./components/CalonPengantin";
import Akad from "./components/Akad";
import Gift from "./components/Gift";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Syukuran from "./components/Syukuran";
import bg from "./assets/bg.png";
import cover from "./assets/10.png";
import "animate.css/animate.min.css";

function App() {
  const [splash, setSplash] = useState(true);
  const [playing, toggle] = useAudio(bgm);

  return (
    <div
      className={`App ${
        splash ? "overflow-hidden h-[100vh]" : ""
      } bg-fixed bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <section
        className={`${
          splash ? "left-0" : "left-[-110%]"
        } w-[100vw] h-[100vh] fixed z-10 transition-all duration-700 bg-fixed bg-cover bg-center bg-no-repeat bg-[#ede1d3]`}
        style={{ backgroundImage: `url('${cover}')` }}
      >
        <section className="relative h-[100vh]">
          <div className="flex flex-col text-center absolute top-[35px] left-0 w-full text-tussock-800">
            <h1 className="w-full text-center mb-12 text-xl uppercase tracking-widest">
              Undangan pernikahan
            </h1>
            <h2 className="font-script text-8xl leading-[0.8]">Fahdilla</h2>
            <span className="font-script text-2xl">&</span>
            <h2 className="font-script text-8xl leading-[0.8]">Rizky</h2>
          </div>
          <span className="absolute w-full text-center bottom-10 block text-2xl">
            11.2.23
          </span>
        </section>
        <button
          className="absolute bottom-[120px] left-[50%] translate-x-[-50%] transition-all duration-200 text-2xl rounded-full border-2 border-white bg-tussock-500 text-white px-4 py-2 w-[320px]"
          onClick={() => {
            toggle();
            setSplash(false);
          }}
        >
          Buka Undangan
        </button>
      </section>
      <main className="w-full md:w-1/2 lg:w-1/3 mx-auto">
        <Jumbotron />
        <Quran />
        <CalonPengantin />
        <Syukuran />
        <hr />
        <Akad />
        {!window.location.href.includes("syukuran") && <Gift />}
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}

export default App;
