import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AppLayout } from "@/layouts/app";
import { BackToTopButton } from "@/components/back-to-top-button";
import Head from "next/head";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio - Anderson Fernandes</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Portfolio pessoal do Anderson Fernandes, desenvolvedor web Full Stack."
        />
        <meta name="theme-color" content="#1a1c23" />
        <link rel="canonical" href="https://andersondev.tech" />
      </Head>
      <div className={`${inter.variable} font-sans antialiased`}>
        <AppLayout>
          <Component {...pageProps} />
          <BackToTopButton />
        </AppLayout>
      </div>
    </>
  );
}
