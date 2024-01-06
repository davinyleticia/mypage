import type { Metadata } from "next";
import Head from "next/head";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import "./globals.css";
import StyledComponentsRegistry from "./libs/registry";
import Menu from "./components/organisms/Menu/Menu";

export const metadata: Metadata = {
  title: "Daviny Letícia - Home Page",
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
        <link rel="icon" href="favicon.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <StyledComponentsRegistry>  
        <Header />
        {children}
        <Footer />
      </StyledComponentsRegistry>
    </html>
  );
}
