"use client";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export function Home() {
  const textGradient = useColorModeValue(
    "linear(to-l, brand.400,brand.600)",
    "linear(to-l, brand.200,brand.300)"
  );

  return (
    <Container maxWidth="container.xl" py="32">
      <Flex justifyContent="center" textAlign="center" mb="3rem">
        <Heading size="4xl" maxW="2xl" margin="0 auto">
          Free TTRPG Resources on{" "}
          <Box
            as="span"
            bgGradient={textGradient}
            // dark mode

            bgClip="text"
          >
            <br />
            Fari Community
          </Box>
        </Heading>
      </Flex>
      {/* add two call to action buttons */}
      <Flex justifyContent="center">
        <Stack direction="row" spacing={4}>
          <Button
            as={Link}
            href="/browse"
            colorScheme="brand"
            size="lg"
            rightIcon={<ArrowForwardIcon />}
          >
            Browse Now
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}
