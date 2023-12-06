import type { Metadata } from "next";
import Head from "next/head";
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
        <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="./favicon.svg" />
      </Head>
      <StyledComponentsRegistry>
        <Header />
        {children}
        <Footer />
      </StyledComponentsRegistry>
    </html>
  );
}
