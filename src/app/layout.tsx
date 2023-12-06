// Import necessary modules and components
import { Metadata } from "next";
import Head from "next/head";
import Footer from "./components/organelle/footer/Footer";
import Header from "./components/organelle/header/Header";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

// Define metadata for the website
export const metadata: Metadata = {
  title: "Daviny Letícia",
  description: "My professional website",
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        {/* Include metadata, charset, viewport settings, and favicon */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      
      {/* Use StyledComponentsRegistry to wrap the content */}
      <StyledComponentsRegistry>
        {/* Render the Header component */}
        <Header />

        {/* Render the content provided by the pages */}
        {children}

        {/* Render the Footer component */}
        <Footer />
      </StyledComponentsRegistry>
    </>
  );
}