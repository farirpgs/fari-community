"use client";
import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { ProjectCard } from "app/(components)/ProjectCard/ProjectCard";
import startCase from "lodash/startCase";
import { ICreator, IProject } from "public/catalog/loader";

export function CreatorPage(props: {
  creator: ICreator;
  projects: Array<IProject>;
}) {
  return (
    <Container maxWidth="container.xl" pt="32" pb="32">
      <Stack
        mb="4"
        direction="row"
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Stack direction="row" spacing={2}>
            {Object.entries(props.creator.data?.links ?? {})?.map(
              (link, index) => {
                const [label, url] = link;
                const lowerCaseLabel = label.toLowerCase();
                const colorScheme = lowerCaseLabel.includes("twitter")
                  ? "twitter"
                  : lowerCaseLabel.includes("facebook")
                  ? "facebook"
                  : lowerCaseLabel.includes("itch")
                  ? "red"
                  : undefined;
                return (
                  <Tag
                    key={label}
                    size="md"
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme={colorScheme}
                    href={url}
                  >
                    <TagLabel>{startCase(label)}</TagLabel>
                    <TagCloseButton>
                      <ExternalLinkIcon fontSize="sm" />
                    </TagCloseButton>
                  </Tag>
                );
              },
            )}
          </Stack>
        </Box>
        <Button
          colorScheme="brand"
          leftIcon={<EditIcon />}
          size="md"
          as="a"
          href={`https://github.com/fariapp/fari-community/edit/main/public/catalog/creators/${props.creator.creatorSlug}/index.ts`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit this creator
        </Button>
      </Stack>
      <Heading size="3xl" mb="4" as="h1">
        {props.creator.data?.name}
      </Heading>
      <Box maxWidth="container.sm">
        <Text>{props.creator.data?.description}</Text>
      </Box>

      <Heading size="2xl" mt="8" mb="4">
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 2, 3]} spacing="8">
        {props.projects.map((project) => {
          return (
            <ProjectCard
              key={project.projectSlug}
              creator={props.creator}
              project={project}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
