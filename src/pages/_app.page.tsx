import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { AppLayout } from "@/layouts/app";
import { BackToTopButton } from "@/components/BackToTopButton";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <AppLayout>
          <Component {...pageProps} />
          <BackToTopButton />
        </AppLayout>
      </div>
    </>
  );
}
