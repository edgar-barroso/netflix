import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import 'react-multi-carousel/lib/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix Brasil",
  description: "Netflix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br ">
      <body id="root" className={inter.className}>
          {children}
        </body>
    </html>
  );
}
