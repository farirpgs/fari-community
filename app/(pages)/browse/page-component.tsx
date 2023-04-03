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
import { getClientSideValue } from "app/(domains)/browser/getClientSideValue";
import { ICreator, IProject } from "public/catalog/loader";
import { useState } from "react";

export default function Browse(props: {
  creatorsAndProjects: Array<{
    creator: ICreator;
    project: IProject;
  }>;
}) {
  const searchDefaultValue = getClientSideValue(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("search") || "";
  }, "");

  const [search, setSearch] = useState(searchDefaultValue);

  const result = props.creatorsAndProjects;

  return (
    <Container maxWidth="container.xl" pt="32" pb="32">
      <Stack spacing={4}>
        <Heading>Browse</Heading>

        <FormControl>
          <FormLabel>Filter</FormLabel>
          <Input
            autoFocus
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
