import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Footer() {
  return (
    <footer className="h-[50vh] relative bg-tussock-50">
      <div className="absolute w-full top-[50%] translate-y-[-50%] text-center">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <span className="mb-1 block text-xl text-tussock-600">Thank you</span>{" "}
          <span className="block text-2xl font-script text-tussock-800">
            Fahdilla & Rizky
          </span>
          <span className="block mt-12">
            Wassalamu'alaikum warohmatullahi wabarokatuh
          </span>
        </AnimationOnScroll>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute bottom-10 left-[50%] translate-x-[-50%] text-tussock-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </footer>
  );
}
