import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/src/components/HeaderTop";
import Second from "@/src/components/second";
import Deal from "@/src/components/deal";
import Today from "@/src/components/Today";
import Index from "@/src/components/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <body className={`${inter.className} w-screen lg:w-full`}>
        <div className="lg:w-full w-screen ">
          <HeaderTop />
        </div>
        <div className="lg:w-full w-screen ">
          <Second />
        </div>
        <div className="lg:w-full w-screen ">
          <Index />
        </div>
        {children}
      </body>
    </html>
  );
}
