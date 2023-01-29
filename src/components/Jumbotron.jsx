import header from "../assets/header.png";

export default function Jumbotron() {
  return (
    <section
      className={`relative h-[100vh] bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url('${header}')` }}
    >
      <div className="absolute w-full flex flex-col text-center top-[75px]">
        <span className="block mb-12">
          Assalamu'alaikum warohmatullahi wabarokatuh
        </span>
        <span className="mb-1 block text-xl text-tussock-600">
          The Wedding of
        </span>
        <span className="block text-2xl font-script text-tussock-800">
          Fahdilla & Rizky
        </span>
      </div>
      <span className="absolute w-full text-center bottom-10 block text-2xl">
        11.2.23
      </span>
    </section>
  );
}
