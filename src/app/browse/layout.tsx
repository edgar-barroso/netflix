import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function BrowseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#141414]">
      <Header/>
      {children}
      <Footer/>
    </main>
  );
}
