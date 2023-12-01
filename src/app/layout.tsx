import type { Metadata } from "next";
import Footer from "./components/organelle/footer/Footer";
import Header from "./components/organelle/header/Header";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "Daviny Letícia",
  description: "My professional website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <StyledComponentsRegistry>
        <Header />
        {children}
        <Footer />
      </StyledComponentsRegistry>
    </html>
  );
}
