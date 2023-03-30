"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ICreator } from "public/catalog/loader";
import { ProjectCard } from "./(components)/ProjectCard/ProjectCard";

export function Home(props: { creators: Array<ICreator> }) {
  const textGradient = useColorModeValue(
    "linear(to-l, brand.400,brand.600)",
    "linear(to-l, brand.200,brand.300)"
  );

  const projectsFlatMapWithCreators = props.creators.flatMap((c) => {
    return c.projects.map((p) => {
      return { project: p, creator: c };
    });
  });

  const featuredProjects = [
    "breathless",
    "firelights",
    "charge rpg",
    "blades",
    "lumen",
    "24xx",
    "push",
    "trophy",
    "bad time",
    "resistance",
    "motif",
    "tricube",
    "guided by the sun",
    "fate",
  ]
    .map((p) => p.toLowerCase())
    .reverse();

  const result = projectsFlatMapWithCreators.sort(function (a, b) {
    const aProjectName = (a.project.data?.name ?? "").toLowerCase();
    const bProjectName = (b.project.data?.name ?? "").toLowerCase();

    return (
      featuredProjects.findIndex((p) => {
        return bProjectName.includes(p);
      }) -
      featuredProjects.findIndex((p) => {
        return aProjectName.includes(p);
      })
    );
  });
  const top8 = result.slice(0, 8);

  return (
    <Box pb={32}>
      <Box>
        <Container maxWidth="container.xl" py="32">
          <Flex
            justifyContent="center"
            textAlign="center"
            mb="3rem"
            position="relative"
          >
            <Stack spacing={4} position="relative">
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
                    p="8"
                    fontSize="1.25rem"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Browse Now
                  </Button>
                  <Button
                    as={Link}
                    href="/creators/fari-rpgs/projects/fari-community"
                    colorScheme="brand"
                    size="lg"
                    p="8"
                    fontSize="1.25rem"
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
        <Container maxWidth="none">
          <Stack spacing={32}>
            <Stack
              align="center"
              justify="center"
              textAlign="center"
              spacing={4}
            >
              <Heading size="2xl">Explore 40+ Open Licensed SRDs</Heading>
              <Text maxWidth="container.sm" pb="4">
                From creators like Fari RPGs, John Harper, Cezar Capacle, Jesse
                Ross, Evil Hat Productions, Rowan Rook & Decard, Jason Tocci,
                Gila RPGs, and more
              </Text>
              <Box pt={4} width="100%" maxWidth="container.xl">
                <SimpleGrid columns={[1, 2, 4]} spacing="4">
                  {top8.map((projectAndCreator) => {
                    return (
                      <ProjectCard
                        key={projectAndCreator.project.projectSlug}
                        project={projectAndCreator.project}
                        creator={projectAndCreator.creator}
                      />
                    );
                  })}
                </SimpleGrid>
              </Box>
              <Box>
                <Button
                  as={Link}
                  href="/browse"
                  colorScheme="brand"
                  mt={16}
                  size="lg"
                  p="8"
                  fontSize="1.25rem"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Browse All Projects
                </Button>
              </Box>
            </Stack>
            <Stack
              align="center"
              justify="center"
              textAlign="center"
              spacing={4}
            >
              <Heading size="2xl">What is the Fari Community?</Heading>
              <Text maxWidth="container.sm" pb="4">
                The Fari Community is a group of people who are passionate about
                RPGs and want to make them more accessible to everyone.
              </Text>
              <Box>
                <Button
                  as={Link}
                  href="https://farirpgs.com/discord"
                  target="_blank"
                  size="lg"
                  p="8"
                  fontSize="1.25rem"
                  rel="noopener noreferrer"
                >
                  Join our Discord
                </Button>
              </Box>
            </Stack>
            <Stack
              align="center"
              justify="center"
              textAlign="center"
              spacing={4}
            >
              <Heading size="2xl">Fari Community Projects</Heading>
              <Text maxWidth="container.sm" pb="4">
                On top of hosting tons of free RPG resources, the Fari Community
                also maintains its own RPG systems such as Charge, Breathless,
                Firelights, and more.
              </Text>
              <Box>
                <Button
                  as={Link}
                  href="/browse?search=fari rpgs"
                  size="lg"
                  p="8"
                  fontSize="1.25rem"
                >
                  Explore our projects
                </Button>
              </Box>
            </Stack>
            <Stack
              align="center"
              justify="center"
              textAlign="center"
              spacing={4}
            >
              <Heading size="2xl">Submit your content</Heading>
              <Text maxWidth="container.sm" pb="4">
                If you want to submit your own content to the Fari Community,
                please read our wiki, or join our discord and ask for help.
              </Text>
              <Box>
                <Button
                  as={Link}
                  href="/creators/fari-rpgs/projects/fari-community"
                  size="lg"
                  p="8"
                  fontSize="1.25rem"
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
