import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "~/components/Header";
import Head from "next/head";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "~/queries";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto max-w-7xl p-4">
        <Head>
          <title>Lions Sigth First</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Lions" />
        </Head>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
