import Image from "next/image";

export function Section3(){
    return(
        <section className="relative z-20 flex flex-col items-center justify-center px-[10vw] max-md:px-[5vw] mb-20 ">
        <h1 className="text-2xl font-bold mb-6 self-start">
          Mais motivos para assinar
        </h1>
        <ul className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-1 gap-4 cursor-default">
          {reasons.map(({ title, description, icon }) => (
            <li key={title} className="bg-gradient-to-br from-[#192145] to-[#210e17] p-4 rounded-xl flex flex-col items-start transition-all ">
              <div className="flex flex-col gap-3 flex-grow">
                <h3 className="text-2xl text-white font-bold">{title}</h3>
                <p className="text-md font-medium text-gray-300 leading-5">
                  {description}
                </p>
              </div>
              <div className="flex justify-end w-full mt-4">
                <Image
                  className="self-end"
                  width={70}
                  height={70}
                  src={icon}
                  alt="Ícone de computador"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
}

const reasons = [
    {
      title: "Aproveite na TV",
      description:
        "Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
      icon: "/computer-icon.png",
    },
    {
      title: "Baixe séries para assistir offline",
      description:
        "Salve seus títulos favoritos e sempre tenha algo para assistir.",
      icon: "/download-icon.png",
    },
    {
      title: "Assista onde quiser",
      description:
        "Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.",
      icon: "/watch-icon.png",
    },
    {
      title: "Crie perfis para crianças",
      description:
        "Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.",
      icon: "/perfil-icon.png",
    },
  ];