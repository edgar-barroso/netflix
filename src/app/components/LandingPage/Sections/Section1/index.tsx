import Link from "next/link";

export function Section1(){
    return(
        <section
        className="flex flex-col items-center justify-center bg-cover bg-repeat bg-center h-[110vh] max-md:h-[90vh]"
        style={{ backgroundImage: "url('/background-1.png')" }}
      >
          <div className="flex flex-col flex-wrap justify-center items-center w-full gap-6 px-[25vw] max-md:px-[5vw] max-md:mt-14">
            <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl font-extrabold text-center leading-[72px]">
              Filmes, séries e muito mais, sem limites
            </h1>
            <h2 className="text-xl max-lg:text-lg max-md:text-base font-semibold text-center">
              A partir de R$ 20,90. Cancele quando quiser.
            </h2>
            <h3 className="text-lg max-lg:text-base max-md:text-sm font-light text-center">
              Assista onde e quando quiser. Cancele a qualquer momento.
            </h3>
            <Link
              href={"/register"}
              className="inline-block p-4 btn-primary -mt-4"
            >
              Assista Gratuitamente por 30 Dias
            </Link>
        </div>
      </section>
    )
}