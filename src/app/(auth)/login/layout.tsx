import { Footer } from "@/app/components/Footer";
import { Header } from "../../components/LandingPage/Header";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col bg-cover bg-center h-screen" style={{ backgroundImage: "url('/background-1.png')"}}>
      <Header/>
      {children}
    </main>
  );
}
