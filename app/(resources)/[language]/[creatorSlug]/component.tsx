"use client";
import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { ICreator, IProject } from "data/loader";
import Image from "next/image";

export function Creator(props: {
  creator: ICreator;
  projects: Array<IProject>;
}) {
  return (
    <Container maxWidth="container.xl" mt="8">
      <Stack
        direction="row"
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mb="2">
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
                    <TagLabel>{label}</TagLabel>
                    <TagCloseButton>
                      <ExternalLinkIcon fontSize="sm" />
                    </TagCloseButton>
                  </Tag>
                );
              }
            )}
          </Stack>
        </Box>
        <Button
          colorScheme="brand"
          leftIcon={<EditIcon />}
          size="md"
          as="a"
          href={`https://github.com/fariapp/fari-community/data/creators/${props.creator.creatorSlug}/index.ts`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit this creator
        </Button>
      </Stack>
      <Heading size="3xl" mb="4">
        {props.creator.data?.name}
      </Heading>
      <Box maxWidth="container.sm">
        <Text>{props.creator.data?.description}</Text>
      </Box>

      <Heading size="2xl" mt="8" mb="4">
        Projects
      </Heading>
      <Stack spacing={4}>
        {props.projects.map((project) => {
          return (
            <Box
              key={project.projectSlug}
              p="4"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <>
                <Heading size="lg" mb="2">
                  {project.data?.name}
                </Heading>
                {console.log("project.image", project.image)}
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.data?.name || ""}
                    width={400}
                    height={200}
                  />
                )}
                <Text>{project.data?.description}</Text>
              </>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}
