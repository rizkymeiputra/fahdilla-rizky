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
        } w-[100vw] h-[100vh] fixed z-30 transition-all duration-700 bg-fixed bg-cover bg-center bg-no-repeat bg-[#ede1d3]`}
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
            <span className="text-center block text-2xl">11.2.23</span>
          </div>
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
        <button
          onClick={toggle}
          className="fixed bottom-4 left-4 bg-white rounded-full p-2 z-20"
        >
          {playing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          )}
        </button>
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
