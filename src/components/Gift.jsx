import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Leaf from "../assets/leaf5.png";

export default function Gift() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <section className="px-6 py-12 bg-tussock-700 text-white text-center relative overflow-hidden">
        <img
          className="absolute right-[-10px] top-[10%] opacity-50  h-[140px]"
          src={Leaf}
        />
        <AnimationOnScroll animateIn="animate__zoomIn">
          <h4 className="text-3xl font-script mb-4">Wedding Gift</h4>
          <p>
            Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda
            kasih untuk mempelai, dapat melalui tautan berikut:
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <div className="flex items-center justify-center space-x-6 mt-8">
            <button
              className="w-[120px] py-4 flex justify-center text-white bg-tussock-500 rounded-xl"
              onClick={() => setModal("gift")}
            >
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
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </button>
            <button
              className="w-[120px] py-4 flex justify-center text-white bg-tussock-500 rounded-xl"
              onClick={() => setModal("rekening")}
            >
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
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                />
              </svg>
            </button>
          </div>
        </AnimationOnScroll>
      </section>
      {modal && (
        <div className="fixed top-0 left-0 z-40 w-[100vw] h-[100vh] bg-black/50 overflow-hidden">
          <div className="p-6 w-full h-full flex items-center justify-center">
            <div className="bg-white p-6 w-full rounded-xl text-center relative">
              <button
                onClick={() => setModal(null)}
                className="absolute right-4 top-4"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {modal === "gift" && (
                <>
                  <h4 className="text-2xl text-tussock-700 font-script mb-2">
                    ALAMAT PENERIMA
                  </h4>
                  <span className="block mb-4">
                    Fahdilla/Rizky - 0857 9453 7754
                  </span>
                  <p>
                    Perum Pesona Prima Pataruman Blok B1 No. 5, RT 01 RW 12,
                    Desa Pataruman, Kec. Cihampelas, Kab. Bandung Barat, Jawa
                    Barat 40562
                  </p>
                </>
              )}

              {modal === "rekening" && (
                <>
                  <h4 className="text-2xl text-tussock-700 font-script mb-2">
                    NOMOR REKENING
                  </h4>
                  <span className="block mb-4">
                    Dana - Fahdilla
                    <br />
                    08216640195
                  </span>
                  <span className="block">
                    BCA - a.n. Rizky Meiputra
                    <br />
                    1370091940
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
