import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-hk: ${hankenGrotesk.style.fontFamily}, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
