"use client";

import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const theme = extendTheme(
  {
    fonts: {
      heading: `Inter, sans-serif`,
      body: `Inter, sans-serif`,
    },
    colors: {
      brand: {
        900: "#233357",
        800: "#2A3E64",
        700: "#314870",
        600: "#39527D",
        500: "#415C8A",
        400: "#486697",
        300: "#5070A4",
        200: "#587AB1",
        100: "#6084BE",
        50: "#688ECA",
        10: "#7098D7",
        5: "#78A2E4",
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
    },
  })
);

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./(components)/Navbar/Navbar";

export function LayoutComponent(props: { children?: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Navbar />
        {props.children}
      </ChakraProvider>
    </CacheProvider>
  );
}
