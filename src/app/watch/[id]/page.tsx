"use client";
import { useRef, useState } from "react";
import Play from "@/../../public/play.svg"


export default function Watch({ params }: { params: { id: string } }) {
  const refVideo = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const handlePlay = () => {
    if (!refVideo.current) return;
    refVideo.current!.play();
    setStarted(true)
  };

  return (
    <main className="relative w-screen h-screen flex items-center justify-center bg-black">
      {!started && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20  scale-[3]"
          onClick={handlePlay}
        >
          <Play/>
        </button>
      )}
      <video
        ref={refVideo}
        className="relative w-full h-full flex items-center justify-center bg-black"
        loop
        controls={started}
      >
        <source src="/trailer.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
