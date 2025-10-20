import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AppLayout } from "@/layouts/app";
import { BackToTopButton } from "@/components/BackToTopButton";
import Head from "next/head";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio - Anderson Fernandes</title>
        <meta name="description" content="Portfolio pessoal do Anderson Fernandes, desenvolvedor web Full Stack." />
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
