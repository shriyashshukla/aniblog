
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/navbar/page";
import {AuthContextProvider} from "../app/context/AuthContext";

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
      <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
        </body>
    </html>
  );
}
