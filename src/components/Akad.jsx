import { AnimationOnScroll } from "react-animation-on-scroll";
import Leaf from "../assets/leaf3.png";

export default function Akad() {
  return (
    <section className="py-8 overflow-hidden bg-white relative">
      <img
        className="absolute left-[-10px] top-[10px] opacity-30 h-[180px]"
        src={Leaf}
      />
      <img
        className="absolute right-[-10px] bottom-[125px] opacity-30 rotate-180 h-[180px]"
        src={Leaf}
      />
      <div className="p-6 text-center">
        <AnimationOnScroll animateIn="animate__zoomIn">
          <h4 className="font-script text-5xl mb-8 text-tussock-700">
            Akad & Resepsi
          </h4>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <div className="mb-6">
            <h6 className="font-script text-2xl text-tussock-700 mb-2">
              Akad Nikah
            </h6>
            <span className="block mb-2 text-center text-tussock-800 text-xl">
              <span className="flex w-full justify-center items-center space-x-2">
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                <span>Sabtu, 11 Februari 2023</span>
              </span>
            </span>
            <span className="block mb-2 text-center text-tussock-800 text-xl">
              <span className="flex w-full justify-center items-center space-x-2">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>10.00 WIB</span>
              </span>
            </span>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className="mb-6">
            <h6 className="font-script text-2xl text-tussock-700">Resepsi</h6>
            <span className="block mb-2 text-center text-tussock-800 text-xl">
              <span className="flex w-full justify-center items-center space-x-2">
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                <span>Sabtu, 11 Februari 2023</span>
              </span>
            </span>
            <span className="block mb-2 text-center text-tussock-800 text-xl">
              <span className="flex w-full justify-center items-center space-x-2">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>11.00 WIB s/d Selesai</span>
              </span>
            </span>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <p className="block mb-6">
            Jl. Buahdua Hariang, Dusun Citaman RT 13 RW 05 Desa Bojongloa,
            Buahdua, Kabupaten Sumedang, Jawa Barat, 45392
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.454212847928!2d107.93724471477174!3d-6.714292295145883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab8d388987ce3ec5!2zNsKwNDInNTEuNSJTIDEwN8KwNTYnMjIuMCJF!5e0!3m2!1sen!2sid!4v1674843069785!5m2!1sen!2sid"
            style={{
              width: "100%",
              height: "240px",
              border: "4px solid #D6AE7B",
              borderRadius: 12,
              display: "block",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <a
            href="https://goo.gl/maps/t6waVgeSrvbNYncH6"
            className="px-4 py-2 bg-tussock-500 text-white rounded-md block mt-6 mb-2"
            target="_blank"
          >
            Alamat Selengkapnya
          </a>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <p className="text-sm text-tussock-700">
            Catatan: <br /> Dari arah Bandung, masuk tol Cisumdawu, keluar di
            pintu tol Cimalaka belok kiri, direkomendasikan untuk lewat jalan
            Tanjungkerta
          </p>
        </AnimationOnScroll>
      </div>
    </section>
  );
}
