import Head from "next/head";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function BaseHTML({ children }: { children: JSX.Element }) {
  return (
    <>
      <Head>
        <title>Petz Next Test</title>
        <meta name="description" content="A scheduling app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>{children}</main>
    </>
  );
}
