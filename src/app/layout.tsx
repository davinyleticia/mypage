import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/molecules/footer/Footer";
import Header from "./components/molecules/header/Header";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daviny Letícia",
  description: "My Site Profissonal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <StyledComponentsRegistry className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </StyledComponentsRegistry>
    </html>
  );
}
