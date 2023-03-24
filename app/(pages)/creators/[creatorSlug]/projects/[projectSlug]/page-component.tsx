"use client";

import { ArrowBackIcon, ArrowForwardIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Hide,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { IDoc } from "app/(domains)/documents/DocParser";
import { ICreator, IProject } from "public/catalog/loader";
import { useEffect } from "react";

function per(value: number) {
  return `${(value / 12) * 100}%`;
}

export function Project(props: {
  creator: ICreator;
  project: IProject;
  doc: IDoc;
}) {
  useEffect(() => {
    const article = document.querySelector("article");
    const headings = article?.querySelectorAll(
      "h1,h2,h3,h4,h5,h6"
    ) as unknown as Array<HTMLElement>;

    headings?.forEach((heading) => {
      heading.style.position = "relative";

      const anchor = document.createElement("a");
      anchor.setAttribute("href", `#${heading.id}`);
      anchor.style.opacity = "0";
      anchor.style.transition = "opacity 0.1s ease-in-out";
      anchor.innerHTML = "#";
      const spacer = document.createElement("span");
      spacer.innerHTML = "&nbsp;&nbsp;";

      const existingAnchor = heading.querySelector("a");
      if (existingAnchor) {
        existingAnchor.remove();
      }
      const existingSpacer = heading.querySelector("span");
      if (existingSpacer) {
        existingSpacer.remove();
      }

      heading.style.display = "inline-block";
      heading.addEventListener("mouseover", () => {
        anchor.style.opacity = ".5";
      });
      heading.addEventListener("mouseout", () => {
        anchor.style.opacity = "0";
      });

      heading.appendChild(spacer);
      heading.appendChild(anchor);
    });
  }, []);

  return (
    <Container maxWidth="container.xl" pt="32">
      <style
        className="fari-doc-style"
        dangerouslySetInnerHTML={{
          __html: props.project.data?.css ?? "",
        }}
      />

      <Stack
        mb="4"
        direction="row"
        spacing={0}
        alignItems="center"
        justifyContent={[
          "flex-start",
          "flex-start",
          "space-between",
          "space-between",
        ]}
      >
        <Box>
          <Hide below="md">
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
          </Hide>
        </Box>
        <Box>
          <Button
            colorScheme="brand"
            leftIcon={<EditIcon />}
            size="md"
            as="a"
            href={`https://github.com/fariapp/fari-community/edit/main/public/catalog/creators/${props.creator.creatorSlug}/${props.project.projectSlug}/index.md#:~:text=${props.doc.currentPage.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit this page
          </Button>
        </Box>
      </Stack>
      <Divider mb="4" />
      <Box>
        <Flex direction="row" width="100%" maxW="100%">
          <Box
            px={2}
            position="sticky"
            overscrollBehavior="contain"
            top="2rem"
            display={["none", "none", "block", "block"]}
            width={[per(0), per(0), per(3), per(3)]}
            height="calc(100vh - 2rem)"
            overflowY="auto"
            flexShrink={0}
            borderRight="1px solid"
            borderColor="gray.200"
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

          <Box
            pb="32"
            width={[per(12), per(12), per(9), per(7)]}
            px={[0, 0, "1rem", "2rem"]}
          >
            <Stack spacing={4}>
              <Prose>
                <Box
                  sx={{
                    "& *": {
                      fontFamily: props.project.data?.textFont
                        ? `${props.project.data?.textFont} !important`
                        : undefined,
                    },
                    "& h1,h2,h3,h4,h5,h6": {
                      fontFamily: props.project.data?.headingFont
                        ? `${props.project.data?.headingFont} !important`
                        : undefined,

                      textTransform: props.project.data?.headingUppercase
                        ? "uppercase"
                        : "none",
                    },
                  }}
                >
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
                </Box>
              </Prose>

              {/* next and previous buttons */}
              <Stack
                direction="row"
                justifyContent={
                  props.doc.previousPage && props.doc.nextPage
                    ? "space-between"
                    : props.doc.previousPage
                    ? "flex-start"
                    : "flex-end"
                }
              >
                {props.doc.previousPage && (
                  <Link
                    href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${props.doc.previousPage.id}`}
                  >
                    <Button
                      variant="outline"
                      leftIcon={<ArrowBackIcon />}
                      size="md"
                    >
                      {props.doc.previousPage.title}
                    </Button>
                  </Link>
                )}
                {props.doc.nextPage && (
                  <Link
                    href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${props.doc.nextPage.id}`}
                  >
                    <Button
                      variant="outline"
                      rightIcon={<ArrowForwardIcon />}
                      size="md"
                    >
                      {props.doc.nextPage.title}
                    </Button>
                  </Link>
                )}
              </Stack>
            </Stack>
          </Box>
          <Box
            display={["none", "none", "none", "block"]}
            width={[per(0), per(0), per(0), per(2)]}
            position="sticky"
            overscrollBehavior="contain"
            top="2rem"
            px={2}
            height="calc(100vh - 2rem)"
            overflowY="auto"
            flexShrink={0}
            borderColor="gray.200"
          >
            {renderTableOfContents()}
          </Box>
        </Flex>
      </Box>
    </Container>
  );

  function renderSidebar() {
    const hasCategories = Object.keys(props.doc.sidebar.categories).length > 0;
    const hasRootPages = props.doc.sidebar.root.length > 0;
    return (
      <Stack spacing="1rem" pb="32">
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
          <Stack spacing="0">
            {props.doc.sidebar.root.map((item) => {
              const isCurrentPage = item.id === props.doc.currentPage.id;

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
