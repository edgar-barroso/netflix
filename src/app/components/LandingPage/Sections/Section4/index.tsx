"use client"
import Link from "next/dist/client/link";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";

export function Section4(){
    const [activedAnswer, setActivedAnswer] = useState(
        new Array(frequentlyQuestions.length).map(() => false)
      );
    return(
        <section className="flex flex-col items-center justify-center px-[10vw] max-md:px-[5vw] mb-20 ">
        <h1 className="text-2xl font-bold mb-6 self-start">
          Perguntas frequentes
        </h1>
        <dl className="space-y-2 w-full">
          {frequentlyQuestions.map((item, index) => (
            <div
              key={item.question}
              className="flex flex-col text-2xl gap-[1px]"
            >
              <div
                className="bg-[#2d2d2d] flex flex-row justify-between items-center p-4 hover:bg-[#414141] cursor-pointer"
                onClick={() => {
                  activedAnswer[index] = !activedAnswer[index];
                  setActivedAnswer([...activedAnswer]);
                }}
              >
                <dt className="text-2xl select-none">{item.question}</dt>

                <button className={` origin-center ${activedAnswer[index] ? "rotate-45":"rotate-0"} duration-300`}>
                  { <IoAdd size={40} />}
                </button>
              </div>
              <div
                className={`bg-[#2d2d2d] flex flex-row justify-between items-center  
              ${
                activedAnswer[index]
                  ? "opacity-100 h-auto p-4"
                  : "opacity-0 h-0 overflow-hidden"
              }
              transition-all duration-150`}
              >
                <dd className="text-2xl">{item.answer}</dd>
              </div>
            </div>
          ))}
        </dl>
        <Link
            href={"/register"}
            className="inline-block p-4 btn-primary mt-10"
        >
            Assista Gratuitamente por 30 Dias
        </Link>
      </section>
    )
}

const frequentlyQuestions = [
    {
      question: "O que é a Netflix?",
      answer: `A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.
  Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.`,
    },
    {
      question: "Quanto custa a Netflix?",
      answer: `Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras.`,
    },
    {
      question: "Onde posso assistir?",
      answer: `Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
  
  Você também pode baixar suas séries favoritas com o aplicativo Netflix para iOS ou Android. Use os downloads para levar a Netflix para onde quiser sem precisar de conexão com a internet. Leve a Netflix com você para qualquer lugar.`,
    },
    {
      question: "Como faço para cancelar?",
      answer: `A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.`,
    },
    {
      question: "O que eu posso assistir na Netflix?",
      answer: `A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.`,
    },
    {
      question: "A Netflix é adequada para crianças?",
      answer: `A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.
  
  O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.`,
    },
  ];
  