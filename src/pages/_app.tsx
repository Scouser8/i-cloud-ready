import Layout from "@/components/Layout";
import { StateProvider } from "@/store/StateProvider";
import reducer, { initialState } from "@/store/reducer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}
