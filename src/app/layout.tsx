
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/navbar/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AniBlog",
  description: "A blog about anime and manga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
          <Navbar />
          {children}
       
        </body>
    </html>
  );
}
