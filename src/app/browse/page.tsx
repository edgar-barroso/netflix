import Link from "next/link";
import { Carousel } from "../components/Carousel";
import { ModalProvider } from "../contexts/ModalContext";

export default function Browse() {
  return (
    <>
      <section className="pt-36 px-[5vw] h-[100vh] max-md:h-[90vh] overflow-hidden ">
         <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/trailer.mp4" type="video/mp4" />
        </video> 
        <div className="relative flex flex-col gap-6 items-start text-start  md:max-w-[50%] z-20 ">
          <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl font-extrabold leading-tight">
            Descubra os filmes mais populares do momento.
          </h1>
          <h2 className="text-xl max-lg:text-lg max-md:text-base font-light leading-relaxed">
            Explore uma seleção imperdível de filmes que estão dominando as
            telas e se tornando os favoritos do público.
          </h2>

          <Link
            href="/register"
            className="inline-block p-4 btn-primary rounded-md bg-gradient-to-r shadow-lg transform transition-transform hover:scale-105 -mt-4"
          >
            Explore Agora
          </Link>
        </div>
      </section>
      <section className="relative z-10 -mt-20 max-md:-mt-36">
        <div className="absolute left-0 w-full h-[40vh] bg-gradient-to-t from-[#141414]  to-transparent -z-10"></div>
        <div className="flex flex-col gap-16">
          <ModalProvider>
            <Carousel title="Lançamentos" data={movies} />
            <Carousel title="Comédia" data={movies} />
            <Carousel title="Romance" data={movies} />
            <Carousel title="Drama" data={movies} />
          </ModalProvider>
        </div>
      </section>
    </>
  );
}

const movies = [
  { src: "/1.jpg", href: "/browse/12" },
  { src: "/2.jpg", href: "/browse/13" },
  { src: "/3.webp", href: "/browse/14" },
  { src: "/4.webp", href: "/browse/15" },
  { src: "/5.webp", href: "/browse/16" },
  { src: "/6.jpg", href: "/browse/17" },
  { src: "/7.jpg", href: "/browse/18" },
  { src: "/8.jpg", href: "/browse/19" },
  { src: "/9.jpg", href: "/browse/10" },
  { src: "/10.jpg", href: "/browse/111" },
  { src: "/11.jpg", href: "/browse/122" },
];
