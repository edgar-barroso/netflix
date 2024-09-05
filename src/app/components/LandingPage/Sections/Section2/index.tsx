import Image from "next/image";
import Link from "next/link";

export function Section2(){
    return(
        <section className="relative max-md:flex-col mb-20 -mt-10 flex flex-grow flex-row gap-4 items-center justify-between px-[10vw] max-md:px-[5vw] scale-95 hover:scale-100 transition-all duration-500 ">
        <Image alt="logo" width={80} height={80} src={"/popcorn-icon.png"} />
        <div className="max-md:flex-col gap-4 cursor-default flex flex-grow flex-row justify-between items-center p-4 bg-gradient-to-r from-purple-900 via-blue-950 to-blue-900 rounded-2xl ">
          <div className="flex flex-col ">
            <span className="text-md font-bold">
              A Netflix que você adora por apenas R$ 20,90.
            </span>
            <p className="text-sm font-light">
              Aproveite nossa opção mais acessível, o plano com anúncios.
            </p>
          </div>

          <Link
            href={"/register"}
            className="inline-block px-4 py-2 btn-secondary"
          >
            Saiba mais
          </Link>
        </div>
      </section>
    )
}