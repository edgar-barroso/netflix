import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Loading() {
    return (
        <main className="flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-black text-red-600">
          <AiOutlineLoading3Quarters size={50} className="animate-spin"/>
          <Image className="-mt-[40px]" alt="logo" width={30} height={30} src={"/logo-icon.png"} />
        </main>
    )
  }