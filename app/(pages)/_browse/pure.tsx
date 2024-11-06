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
import { CreatorsProjectSorter } from "app/(domains)/creators/CreatorsProjectsSorter";
import { ICreator } from "public/catalog/loader";
import { useState } from "react";

export default function BrowsePage(props: { allCreators: Array<ICreator> }) {
  const searchDefaultValue = getClientSideValue(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("search") || "";
  }, "");

  const creatorsAndProjects = CreatorsProjectSorter.sort(props.allCreators);
  const [search, setSearch] = useState(searchDefaultValue);

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
          {creatorsAndProjects.map((projectAndCreator) => {
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
