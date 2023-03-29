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
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export function Home() {
  const textGradient = useColorModeValue(
    "linear(to-l, brand.400,brand.600)",
    "linear(to-l, brand.200,brand.300)"
  );

  return (
    <Box pb={32}>
      <Box className="gradient-animated">
        <Container maxWidth="container.xl" py="32">
          <Flex justifyContent="center" textAlign="center" mb="3rem">
            <Stack spacing={4}>
              <Heading size="4xl" maxW="2xl">
                Free and Open RPG Resources
              </Heading>
              <Heading size="md">
                Maintained by the{" "}
                <Box as="span" bgGradient={textGradient} bgClip="text">
                  Fari Community
                </Box>
              </Heading>

              <Flex justifyContent="center" pt={8}>
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
                  <Button
                    as={Link}
                    href="/creators/fari-rpgs/projects/fari-community"
                    colorScheme="brand"
                    size="lg"
                    variant="outline"
                  >
                    Read the Wiki
                  </Button>
                </Stack>
              </Flex>
            </Stack>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="2xl">
          <Stack spacing={32}>
            <Stack align="center" justify="center" textAlign="center">
              <Heading size="xl">What is the Fari Community?</Heading>
              <Text>
                The Fari Community is a group of people who are passionate about
                RPGs and want to make them more accessible to everyone.
              </Text>
              <Box pt={4}>
                <Button
                  as={Link}
                  href="https://farirpgs.com/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join our Discord
                </Button>
              </Box>
            </Stack>
            <Stack align="center" justify="center" textAlign="center">
              <Heading size="xl">Fari Community Projects</Heading>
              <Text>
                On top of hosting tons of free RPG resources, the Fari Community
                also maintains its own RPG systems such as Charge, Breathless,
                Firelights, and more.
              </Text>
              <Box pt={4}>
                <Button as={Link} href="/browse?search=fari rpgs">
                  Explore our projects
                </Button>
              </Box>
            </Stack>
            <Stack align="center" justify="center" textAlign="center">
              <Heading size="xl">Submit your content</Heading>
              <Text>
                If you want to submit your own content to the Fari Community,
                please read our wiki, or join our discord and ask for help.
              </Text>
              <Box pt={4}>
                <Button
                  as={Link}
                  href="/creators/fari-rpgs/projects/fari-community"
                >
                  Read the wiki
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
