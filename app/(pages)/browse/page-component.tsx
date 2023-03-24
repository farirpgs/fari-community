"use client";
import {
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { ProjectCard } from "app/(components)/ProjectCard/ProjectCard";
import { ICreator } from "public/catalog/loader";
import { useState } from "react";

export default function Browse(props: { creators: Array<ICreator> }) {
  const [search, setSearch] = useState("");
  const projectsFlatMapWithCreators = props.creators.flatMap((c) => {
    return c.projects.map((p) => {
      return { project: p, creator: c };
    });
  });

  const featuredProjects = [
    "charge",
    "dash",
    "breathless",
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

  return (
    <Container maxWidth="container.xl" pt="32" pb="32">
      <Stack spacing={4}>
        <Heading>Browse</Heading>

        <FormControl>
          <FormLabel>Filter</FormLabel>
          <Input
            placeholder="Search"
            size="lg"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>

        <SimpleGrid columns={[1, 2, 3]} spacing="4">
          {result.map((projectAndCreator) => {
            if (search) {
              const lowerCaseSearch = search.toLowerCase();
              const lowerCaseTitle =
                projectAndCreator.project.data?.name.toLowerCase() ?? "";
              const lowerCaseCreatorName =
                projectAndCreator.creator.data?.name.toLowerCase() ?? "";
              const lowerCaseDescription =
                projectAndCreator.project.data?.description ?? "";
              if (
                !lowerCaseTitle.includes(lowerCaseSearch) &&
                !lowerCaseCreatorName.includes(lowerCaseSearch) &&
                !lowerCaseDescription.includes(lowerCaseSearch)
              ) {
                return null;
              }
            }
            return (
              <ProjectCard
                key={projectAndCreator.project.projectSlug}
                project={projectAndCreator.project}
                creator={projectAndCreator.creator}
              />
            );
          })}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
