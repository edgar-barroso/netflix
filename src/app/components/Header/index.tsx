"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importando ícones de menu e close

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollThreshold = 100;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed z-50 w-full flex justify-between items-center h-[10vh] px-[5vw] transition-colors duration-700 ${
        scrolled
          ? "shadow-xl bg-gradient-to-b from-black  bg-[#0000009d]"
          : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <div className="flex flex-row gap-8">
        <Link className="flex items-start" href={"/"}>
          <Image
            alt="logo"
            src="/logo.png"
            className="max-w-[148px] max-md:w-[120px]"
            width={100}
            height={50}
          />
        </Link>

        <div className="hidden md:flex flex-row gap-8">
          {links.map(({href,label})=>(
            <Link key={label} className="text-sm font-light" href={href}>
            {label}
            </Link>
          ))}
          
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

        <div className={`absolute top-[100%] flex flex-col items-start justify-start  bg-opacity-70 bg-black duration-300 transition-all ${
                isMenuOpen
                  ? "opacity-100 h-auto border-t right-0"
                  : "opacity-0 h-0 -right-[100%]"
              }`}>
            {links.map(({href,label})=>
            <Link
            key={label}
            className="py-4 text-sm font-semibold hover:bg-[#242424] px-8 w-full"
            href={href}
            onClick={toggleMenu}
          >
            {label}
          </Link>
            )}
          
        </div>
      
    </div>
  );
}


const links:{href:string,label:string}[] = [
    {
        href:"/",
        label:"Início"
    },
    {
        href:"/",
        label:"Séries"
    },
    {
        href:"/",
        label:"Filmes"
    },
    {
        href:"/",
        label:"Entrar"
    },
    
]