import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Syukuran() {
  return (
    <section className="pb-8 bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#EEDEC9"
          fillOpacity="1"
          d="M0,192L48,176C96,160,192,128,288,112C384,96,480,96,576,117.3C672,139,768,181,864,197.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="p-6 text-center">
          <h4 className="font-script text-2xl mb-2">Syukuran Pernikahan</h4>
          <div className="mb-6">
            <span className="block mb-2 text-center text-tussock-800">
              <span className="flex w-full justify-center items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                <span>Jum'at, 10 Februari 2023</span>
              </span>
            </span>
            <span className="block mb-2 text-center text-tussock-800">
              <span className="flex w-full justify-center items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>10.00 WIB s/d Selesai</span>
              </span>
            </span>
          </div>
          <p className="block mb-6">
            Perum Pesona Prima Pataruman Blok B1 No. 5, RT 01 RW 12, Desa
            Pataruman, Kec. Cihampelas, Kab. Bandung Barat, Jawa Barat 40562
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5647268488997!2d107.51099501477304!3d-6.942508094984093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e1b87bf33a17a3f!2zNsKwNTYnMzMuMCJTIDEwN8KwMzAnNDcuNSJF!5e0!3m2!1sen!2sid!4v1674956304659!5m2!1sen!2sid"
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
          <a
            href="https://goo.gl/maps/YMvzDrs5CCxfT1wk7"
            className="px-4 py-2 bg-tussock-500 text-white rounded-md block mt-6 mb-2"
            target="_blank"
          >
            Alamat Selengkapnya
          </a>
        </div>
      </AnimationOnScroll>
    </section>
  );
}
