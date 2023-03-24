"use client";

import { EditIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { IDoc } from "app/(domains)/documents/DocParser";
import { ICreator, IProject } from "public/catalog/loader";

export function Project(props: {
  creator: ICreator;
  project: IProject;
  doc: IDoc;
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
          <Breadcrumb mb="4">
            <BreadcrumbItem>
              <BreadcrumbLink as="span">
                <Link href={`/creators/${props.creator.creatorSlug}`}>
                  {props.creator.data?.name}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                _hover={{
                  textDecoration: "none",
                  cursor: "default",
                }}
              >
                {props.project.data?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box>
          <Button
            colorScheme="brand"
            leftIcon={<EditIcon />}
            size="md"
            as="a"
            href={`https://github.com/fariapp/fari-community/data/creators/${props.creator.creatorSlug}/${props.project.projectSlug}/index.md`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit this page
          </Button>
        </Box>
      </Stack>
      <Divider mb="4" />
      <Box>
        <Stack direction="row" spacing={0} justifyContent="" display="flex">
          <Box
            px={2}
            position="sticky"
            overscrollBehavior="contain"
            top="2rem"
            width="280px"
            height="calc(100vh - 2rem)"
            overflowY="auto"
            flexShrink={0}
            borderRight="1px solid"
            borderColor="gray.200"
            paddingRight="2rem"
          >
            <Heading size="lg" noOfLines={1}>
              {props.project.data?.name}
            </Heading>
            <Text mb="4" noOfLines={1}>
              By{" "}
              <Link href={`/creators/${props.creator.creatorSlug}`}>
                {props.creator.data?.name}
              </Link>
            </Text>
            {renderSidebar()}
          </Box>

          <Box paddingLeft="8rem" pb="10rem">
            <HStack spacing={2} align="flex-start">
              <Box width="80%">
                <Prose>
                  <h1>
                    {
                      props.doc.pages.find(
                        (p) => p.id === props.doc.currentPage.id
                      )?.title
                    }
                  </h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.doc.html,
                    }}
                  />
                </Prose>
              </Box>
              <Box
                width="20%"
                paddingLeft="1rem"
                position="sticky"
                overscrollBehavior="contain"
                top="2rem"
                bottom="0"
                // height="calc(100vh - 20rem)"
                overflowY="auto"
                flexShrink={0}
              >
                {renderTableOfContents()}
              </Box>
            </HStack>
          </Box>
        </Stack>
      </Box>

      <style dangerouslySetInnerHTML={{ __html: props.doc.style as string }} />
    </Container>
  );

  function renderSidebar() {
    const hasCategories = Object.keys(props.doc.sidebar.categories).length > 0;
    const hasRootPages = props.doc.sidebar.root.length > 0;
    return (
      <Stack spacing="1rem">
        {Object.entries(props.doc.sidebar.categories).map(
          ([id, categories]) => {
            const isCurrentCategory = categories.find(
              (item) => item.id === props.doc.currentPage.id
            );
            return (
              <Box key={id}>
                <Box
                  width="100%"
                  textAlign="left"
                  fontWeight="bold"
                  borderRadius="md"
                >
                  {id}
                </Box>
                {true && (
                  <Stack spacing="0">
                    {categories.map((item) => {
                      const isCurrentPage =
                        item.id === props.doc.currentPage.id;
                      return (
                        <Box
                          key={item.id}
                          as={Link}
                          fontWeight={isCurrentPage ? "bold" : "normal"}
                          color={isCurrentPage ? "brand.400" : "inherit"}
                          href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${item.id}`}
                        >
                          {item.title.split("#").join("")}
                        </Box>
                      );
                    })}
                  </Stack>
                )}
              </Box>
            );
          }
        )}
        <Box>
          {hasCategories && hasRootPages && (
            <Box
              width="100%"
              textAlign="left"
              fontWeight="bold"
              borderRadius="md"
            >
              More
            </Box>
          )}
          {props.doc.sidebar.root.map((item) => {
            return (
              <Box
                key={item.id}
                as={Link}
                href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${item.id}`}
              >
                {item.title.split("#").join("")}
              </Box>
            );
          })}
        </Box>
      </Stack>
    );
  }
  function renderTableOfContents() {
    return (
      <Box>
        <Heading size="xs" textTransform="uppercase" mb={2}>
          On This Page
        </Heading>
        <VStack spacing="1">
          {props.doc.currentPage.toc.map((item) => {
            return (
              <Box
                key={item.id}
                textAlign="left"
                width="100%"
                fontSize="xs"
                cursor="pointer"
                paddingLeft={(item.level - 2) * 8 + "px"}
                onClick={() => {
                  location.hash = item.id;
                }}
              >
                {item.title.split("#").join("")}
              </Box>
            );
          })}
        </VStack>
      </Box>
    );
  }
}
