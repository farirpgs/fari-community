"use client";

import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

export const theme = extendTheme(
  {
    fonts: {
      heading: `Inter, sans-serif`,
      body: `Inter, sans-serif`,
    },
    colors: {
      // #233357
      brand: {
        900: "#030b18",
        800: "#142039",
        700: "#25355b",
        600: "#344b7e",
        500: "#4460a2",
        400: "#5d79bb",
        300: "#8197cb",
        200: "#a4b5da",
        100: "#c7d2ec",
        50: "#eaf0ff",
      },
    },
    config: { initialColorMode: "light" },
  },
  withProse({
    baseStyle: {
      h1: {
        marginTop: "0 !important",
        marginBottom: "0 !important",
      },
      h2: {
        marginTop: "1rem !important",
        marginBottom: "0 !important",
      },
      h3: {
        marginTop: "1rem !important",
        marginBottom: "0 !important",
      },
      p: {
        marginTop: "1rem !important",
        marginBottom: "1rem !important",
      },
      "ul li": {
        marginTop: "0",
        marginBottom: "0",
      },
    },
  })
);

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "./(components)/Footer/Footer";
import { Navbar } from "./(components)/Navbar/Navbar";

export function LayoutComponent(props: { children?: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Navbar />
        {props.children}
        <Footer />
      </ChakraProvider>
    </CacheProvider>
  );
}
