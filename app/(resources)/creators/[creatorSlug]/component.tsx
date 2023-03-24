"use client";
import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { ICreator, IProject } from "public/catalog/loader";

export function Creator(props: {
  creator: ICreator;
  projects: Array<IProject>;
}) {
  return (
    <Container maxWidth="container.xl" mt="8">
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
      <SimpleGrid columns={3} spacing={4}>
        {props.projects.map((project) => {
          return (
            <Link
              key={project.projectSlug}
              href={`/creators/${props.creator.creatorSlug}/projects/${project.projectSlug}`}
            >
              <>
                <Card maxW="sm" borderRadius="lg" height="100%">
                  <CardBody p="0" borderRadius="lg">
                    <Box
                      position="relative"
                      borderTopLeftRadius="lg"
                      borderTopRightRadius="lg"
                      overflow="hidden"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          background: `linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%) center center / cover no-repeat, url(${project.image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                          "&:after": {
                            backdropFilter: "blur(16px)",
                            content: '""',
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                          },
                        }}
                      />

                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.data?.name || ""}
                          width="100%"
                          height="325px"
                          objectFit="cover"
                          borderBottom="1px"
                          borderColor="gray.200"
                          position="relative"
                          margin="0px auto"
                          display="block"
                        />
                      )}
                    </Box>

                    <Stack my="6" spacing="3" px="4">
                      <Heading size="md"> {project.data?.name}</Heading>
                      <Text>{project.data?.description}</Text>
                    </Stack>
                  </CardBody>
                </Card>
              </>
            </Link>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
