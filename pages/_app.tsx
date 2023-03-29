import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Roboto, Roboto_Slab, Roboto_Mono } from "next/font/google";
import { theme } from "@/lib/theme";

// <style jsx global>{`
//   html { font-family: ${roboto.style.fontFamily} !important; }
// `}</style>
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={updateTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

//
// Google fonts with next need to be loaded in a tsx file here.
// .

const roboto = Roboto({ weight: ["300", "400"], subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

const fonts = {
  heading: robotoSlab.style.fontFamily,
  body: roboto.style.fontFamily,
  code: robotoMono.style.fontFamily,
};
const updateTheme = extendTheme({ ...theme, fonts: fonts });
