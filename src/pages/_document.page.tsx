import { Head, Html, Main, NextScript } from "next/document";

export default function Document({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html lang="pt">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <title>Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
