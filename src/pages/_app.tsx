import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import LoadingIcon from "public/loading.gif";

function Loading() {
  return (
    <div className="loader__wrapper">
      <Image
        src={LoadingIcon}
        alt="Загрузка"
        height={0}
        width={0}
        style={{ width: 300, height: "auto" }}
      />
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleStart = () => setLoading(true);
  const handleComplete = () => setTimeout(() => setLoading(false), 200);
  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeError", handleComplete);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeError", handleComplete);
      router.events.off("routeChangeComplete", handleComplete);
    };
  });

  return (
    <>
      <Head>
        <title>Dauren Beisenkhnov - Personal Page</title>
        <meta name="description" content="Dauren's personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <>{loading ? <Loading /> : <Component {...pageProps} />}</>
      </MainLayout>
    </>
  );
}
