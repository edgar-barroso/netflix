"use client";
import { useEffect, useRef, useState } from "react";
import CarouselBase, { ResponsiveType } from "react-multi-carousel";
import { createPortal } from "react-dom";
import { useModalContext } from "@/app/contexts/ModalContext";
import "./styles.css";
import Link from "next/link";
import { IoPlay } from "react-icons/io5";
import { BiDownArrow } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

interface CarouselProps {
  title: string;
  data: { src: string; href: string }[];
}

export function Carousel({ title, data }: CarouselProps) {
  const {
    styleModel,
    isHovered,
    setStyleModal,
    setIsHovered,
    setActual,
    actualData,
  } = useModalContext();
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    setPortalRoot(rootElement);
  }, []);

  const handleMouseEnter = (
    itemData: { height: number; left: number; top: number; width: number },
    index: number
  ) => {
    setStyleModal(itemData);
    setActual(data[index]);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setStyleModal({ height: 0, width: 0, left: 0, top: 0 });
    setIsHovered(false);
  };

  return (
    <div>
      {isHovered &&
        portalRoot &&
        createPortal(
          <div
            className={`absolute flex flex-col justify-start z-50 scale-125 transition-all duration-150 rounded-md shadow-lg shadow-black`}
            style={{
              top: styleModel.top - styleModel.height / 4,
              left: styleModel.left,
              width: styleModel.width,
            }}
            onMouseLeave={handleMouseLeave}
          >
            {actualData && (
              <>
              
                <img
                  src={actualData.src}
                  className="rounded-t-md object-contain"
                />
                <div className="flex flex-col gap-2 w-full bg-[#181818] rounded-b-md p-2 ">
                  <div className="flex flex-row justify-between">
                    <Link
                      href={actualData.href}
                      className="flex rounded-full justify-center items-center bg-[#f0f0f0] h-8 w-8 hover:bg-[#e6e6e6]"
                    >
                      <IoPlay className="text-black text-center" size={18} />
                    </Link>
                    <Link
                      href={actualData.href}
                      className="flex rounded-full justify-center items-center bg-transparent h-8 w-8 text-[#e6e6e6] border border-[#e6e6e6] hover:border-[#f0f0f0] hover:text-[#ffffff]"
                    >
                      <IoIosArrowDown className=" text-center" size={18} />
                    </Link>
                  </div>
                  <div>
                    <h1 className="font-light pointer-events-none select-none">Nome do filme</h1>
                  </div>
                </div>
              </>
            )}
          </div>,
          portalRoot
        )}
      <h1 className="text-2xl  font-semibold px-[5vw] pb-3 max-md:pb-8">
        {title}
      </h1>
      <div className="relative">
        <CarouselBase
          responsive={responsive}
          draggable={false}
          infinite
          ssr
          showDots
          partialVisible
          className=""
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {data.map(({ href, src }, index) => (
            <div className="relative" key={href}>
              <img
                alt="movie"
                src={src}
                className="rounded-sm object-fill"
                width={"auto"}
                height={"auto"}
              />
              <Item handleMouseEnter={handleMouseEnter} index={index} />
            </div>
          ))}
        </CarouselBase>
      </div>
    </div>
  );
}

interface ItemProps {
  handleMouseEnter: (
    value: { height: number; left: number; top: number; width: number },
    index: number
  ) => void;
  index: number;
}

function Item({ handleMouseEnter, index }: ItemProps) {
  const itemRef2 = useRef<HTMLDivElement | null>(null);

  const handleOnMouseEnter = () => {
    if (itemRef2.current && itemRef2.current.parentElement) {
      const rect = itemRef2.current.parentElement.getBoundingClientRect();
      const newLeft =
        func((rect.left + rect.width / 2) / window.innerWidth) *
          window.innerWidth +
        rect.left +
        window.scrollX;
      handleMouseEnter(
        {
          width: rect.width,
          height: rect.height,
          top: rect.top + window.scrollY,
          left:
            newLeft > window.innerWidth / 30 ? newLeft : window.innerWidth / 30,
        },
        index
      );
    }
  };

  const func = (x: number): number => {
    return -Math.pow(x - 0.5, 3) / 10;
  };

  return (
    <div
      ref={itemRef2}
      onMouseEnter={handleOnMouseEnter}
      className="absolute top-0 left-0 w-full h-full "
    ></div>
  );
}

const responsive: ResponsiveType = {
  desktop1: {
    breakpoint: { max: 3000, min: 1600 },
    items: 7,
    slidesToSlide: 7,
    partialVisibilityGutter: 7,
  },
  desktop2: {
    breakpoint: { max: 1600, min: 1128 },
    items: 6,
    slidesToSlide: 6,
    partialVisibilityGutter: 7,
  },
  tablet1: {
    breakpoint: { max: 1128, min: 1024 },
    items: 5,
    slidesToSlide: 5,
    partialVisibilityGutter: 7,
  },
  tablet2: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 7,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 7,
  },
};
