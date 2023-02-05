import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dauren Beisenkhnov - Personal Page</title>
        <meta name="description" content="Dauren's personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
