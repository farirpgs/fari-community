"use client";

import { Container, SimpleGrid } from "@chakra-ui/react";
import { ProjectCard } from "app/(components)/ProjectCard/ProjectCard";
import { ICreator } from "public/catalog/loader";

export default function Browse(props: { creators: Array<ICreator> }) {
  const allProjects = props.creators.flatMap((c) => [c.projects, c] as const);
  return (
    <Container maxWidth="container.xl" pt="32" pb="32">
      <SimpleGrid columns={[1, 2, 3]} spacing="8">
        {props.creators.flatMap((c) => {
          return c.projects.map((p) => {
            return <ProjectCard key={p.projectSlug} project={p} creator={c} />;
          });
        })}
      </SimpleGrid>
    </Container>
  );
}
