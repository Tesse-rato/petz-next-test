import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Containers } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Containers.BaseHTML>
      <div className={inter.className}>
        <Containers.Header />
        <Component {...pageProps} />
        <Containers.Footer />
      </div>
    </Containers.BaseHTML>
  );
}
