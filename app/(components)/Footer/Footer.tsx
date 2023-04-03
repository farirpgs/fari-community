"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Container } from "@chakra-ui/react";

export function Footer() {
  return (
    <Container background="" height="4rem" maxWidth="container.xl" mt="32">
      <Box>
        <Link
          color="gray.500"
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          This site is powered by Netlify
        </Link>
      </Box>
    </Container>
  );
}
