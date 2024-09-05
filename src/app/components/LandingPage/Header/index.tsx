"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps{
  fixed?:boolean
}

export function Header({fixed}:HeaderProps){
  const [scrolled, setScrolled] = useState(false);

  const scrollThreshold = 200;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold && fixed) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixed]);


  return (
    <div
      className={`${fixed ? "fixed":"absolute"} z-50 w-full flex justify-between items-center h-[12vh] px-[10vw] max-md:px-[5vw]  transition-colors duration-700 ${scrolled ? 'shadow-xl bg-gradient-to-b from-black  bg-[#0000009d]' : 'bg-gradient-to-b from-black to-transparent'}`}
    >
      <Link className="flex items-start" href={"/"}>
        <Image
          alt="logo"
          src="/logo.png"
          className="max-w-[148px] max-md:w-[120px]"
          width={148}
          height={50}
        />
      </Link>
      <Link href={"/login"} className="py-2 px-4 btn-primary">Entrar</Link>
    </div>
  );
};