"use client";

import "./global.css";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
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
  Link: {
    baseStyle: {
      // normal styling
      textDecoration: "none",
      // hover styling goes here
      _hover: {
        textDecoration: "none",
      },
    },
  },
});

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./(components)/Navbar/Navbar";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            {props.children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
