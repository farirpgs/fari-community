"use client";

import {
  ArrowBackIcon,
  ArrowForwardIcon,
  CloseIcon,
  DownloadIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Collapse,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Stack,
  Tag,
  TagRightIcon,
  Text,
  useColorModeValue,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { getClientSideValue } from "app/(domains)/browser/getClientSideValue";
import { IDoc } from "app/(domains)/documents/DocParser";
import { useServerInsertedHTML } from "next/navigation";
import { ICreator, IProject } from "public/catalog/loader";
import { useEffect, useState } from "react";
import { FaHashtag } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { per } from "../../../../../(domains)/style/per";

export function Project(props: {
  creator: ICreator;
  project: IProject;
  doc: IDoc;
}) {
  const { isOpen, onToggle } = useDisclosure();
  const scrollTo = getClientSideValue(() => {
    const searchParams = new URLSearchParams(location.search);
    const scrollTo = searchParams.get("scrollTo") || "";
    return scrollTo;
  }, "");

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const cardBackground = useColorModeValue("gray.50", "gray.600");
  const brand = useColorModeValue("brand.500", "brand.200");
  const mobileToolbarBackground = useColorModeValue("white", "gray.800");
  const mobileMenuBackground = useColorModeValue("gray.50", "gray.800");

  const creatorLink = `/creators/${props.creator.creatorSlug}`;
  const projectLink = `/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}`;
  const editPageLink = `https://github.com/fariapp/fari-community/edit/main/public/catalog/creators/${props.creator.creatorSlug}/${props.project.projectSlug}/index.md#:~:text=${props.doc.currentPage.title}`;
  const rawPageLink = `https://raw.githubusercontent.com/fariapp/fari-community/main/public/catalog/creators/${props.creator.creatorSlug}/${props.project.projectSlug}/index.md`;

  useServerInsertedHTML(() => {
    return (
      <style
        key="fari-community-project-css"
        id="fari-community-project-css"
        dangerouslySetInnerHTML={{
          __html: props.project.data?.css ?? "",
        }}
      />
    );
  });

  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [scrollTo]);

  useEffect(() => {
    const article = document.querySelector("article");
    const headings = article?.querySelectorAll(
      "h1,h2,h3,h4,h5,h6"
    ) as unknown as Array<HTMLElement>;

    headings?.forEach((heading) => {
      heading.style.position = "relative";

      const anchor = document.createElement("a");
      anchor.setAttribute("href", `?scrollTo=${heading.id}`);
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
    <Container maxWidth="container.xl" pt={["4", "4", "4", "16"]}>
      {renderMobileMenu()}

      <Box display={["block", "block", "block", "none"]}>
        <Box mb="2">
          <Stack spacing={4}>
            {renderSearch()}
            {renderLanguageSelector()}
          </Stack>
        </Box>
      </Box>

      <Stack
        mb="4"
        direction="row"
        spacing={2}
        align="center"
        justifyContent={[
          "flex-start",
          "flex-start",
          "flex-start",
          "space-between",
          "space-between",
        ]}
      >
        <Stack
          display={["none", "none", "none", "flex"]}
          spacing={1}
          direction="row"
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as="span">
                <Link href={creatorLink}>{props.creator.data?.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>
                <Link href={projectLink}>{props.project.data?.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Stack>
        <ButtonGroup>
          <Button
            colorScheme="brand"
            leftIcon={<EditIcon />}
            size="sm"
            variant="ghost"
            as="a"
            href={editPageLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit this page
          </Button>
          <Button
            colorScheme="brand"
            leftIcon={<DownloadIcon />}
            size="sm"
            variant="ghost"
            as="a"
            href={rawPageLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </ButtonGroup>
      </Stack>
      <Divider mb="4" />

      <Box>
        <Flex direction="row" width="100%" maxW="100%">
          <Box
            pr={2}
            position="sticky"
            overscrollBehavior="contain"
            top="2rem"
            display={["none", "none", "none", "block"]}
            width={[per(0), per(0), per(0), per(3), per(3)]}
            height="calc(100vh - 2rem)"
            overflowY="auto"
            flexShrink={0}
            borderRight="1px solid"
            borderColor="gray.200"
          >
            <Stack spacing={4}>
              <Stack spacing={2}>
                <Box>
                  <Heading size="lg" noOfLines={1}>
                    <Link
                      href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}`}
                    >
                      {props.project.data?.name}
                    </Link>
                  </Heading>
                  <Text noOfLines={1}>
                    By{" "}
                    <Link href={`/creators/${props.creator.creatorSlug}`}>
                      {props.creator.data?.name}
                    </Link>
                  </Text>
                </Box>

                {renderLanguageSelector()}
              </Stack>

              {renderSidebar()}
              <Box pb="32" />
            </Stack>
          </Box>

          <Box
            width={[per(12), per(12), per(12), per(9), per(7)]}
            px={[0, 0, 0, "1rem", "2rem"]}
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
                    "& h2": {
                      borderTop: "1px solid",
                      borderColor: "gray.200",
                      marginTop: "3rem  !important",
                      paddingTop: "1.5rem",
                    },
                    "& h3": {
                      marginTop: "2rem  !important",
                      marginBottom: "0  !important",
                    },
                    "& p,li,td,th": {
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                    },

                    [`& [id='${scrollTo}']`]: {
                      borderBottom: `4px solid`,
                      borderColor: brand,
                      color: brand,
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

              {renderBottomNavigation()}
            </Stack>
          </Box>
          <Box
            display={["none", "none", "none", "block"]}
            width={[per(0), per(0), per(0), per(2)]}
            position="sticky"
            overscrollBehavior="contain"
            top="2rem"
            pl={2}
            height="calc(100vh - 2rem)"
            overflowY="auto"
            flexShrink={0}
            borderColor="gray.200"
          >
            <Stack spacing={4}>
              {renderSearch()}
              {renderTableOfContents()}
              {renderProjectLinks()}
              {renderProjectLicense()}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Container>
  );

  function renderMobileMenu() {
    return (
      <>
        <Box
          sx={{
            display: ["block", "block", "block", "none"],
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: 1,
            boxShadow: "dark-lg",
          }}
        >
          {isOpen && (
            <Box
              sx={{
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                zIndex: "0",
                background: "rgba(0,0,0,0.5)",
              }}
              onClick={onToggle}
            />
          )}
          <Collapse animateOpacity in={isOpen}>
            <Stack
              spacing={2}
              sx={{
                padding: 6,
                position: "relative",
                zIndex: "1",
                maxHeight: "80vh",
                overflowY: "auto",
                background: mobileToolbarBackground,
              }}
            >
              <Heading size="md">Menu</Heading>
              <Divider />
              {renderSidebar()}
            </Stack>
          </Collapse>
          <Stack
            direction="row"
            align="center"
            justify="space-between"
            px="4"
            py="2"
            sx={{
              boxShadow: "dark-lg",
              position: "relative",
              background: mobileToolbarBackground,
              zIndex: "1",
            }}
          >
            <IconButton
              variant="ghost"
              aria-label="Toggle Navigation"
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              onClick={onToggle}
            />
          </Stack>
        </Box>
      </>
    );
  }

  function renderBottomNavigation() {
    const hasPreviousPage = props.doc.previousPage !== null;
    const hasNextPage = props.doc.nextPage !== null;

    if (!hasPreviousPage && !hasNextPage) {
      return null;
    }

    return (
      <Box>
        <Divider mt="16" mb="8" />
        <Wrap
          direction="row"
          width="100%"
          justify={
            props.doc.previousPage && props.doc.nextPage
              ? "space-between"
              : props.doc.previousPage
              ? "flex-start"
              : "flex-end"
          }
        >
          {props.doc.previousPage && (
            <WrapItem width={["100%", "100%", "100%", "auto"]}>
              <Link
                width={["100%", "100%", "100%", "auto"]}
                href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${props.doc.previousPage.id}`}
              >
                <Button
                  width={["100%", "100%", "100%", "auto"]}
                  variant="outline"
                  leftIcon={<ArrowBackIcon />}
                  size="md"
                  noOfLines={1}
                >
                  {props.doc.previousPage.title}
                </Button>
              </Link>
            </WrapItem>
          )}
          {props.doc.nextPage && (
            <WrapItem width={["100%", "100%", "100%", "auto"]}>
              <Link
                width={["100%", "100%", "100%", "auto"]}
                href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${props.doc.nextPage.id}`}
              >
                <Button
                  width={["100%", "100%", "100%", "auto"]}
                  variant="outline"
                  rightIcon={<ArrowForwardIcon />}
                  size="md"
                  noOfLines={1}
                >
                  {props.doc.nextPage.title}
                </Button>
              </Link>
            </WrapItem>
          )}
        </Wrap>
      </Box>
    );
  }

  function renderSidebar() {
    const hasCategories = Object.keys(props.doc.sidebar.categories).length > 0;
    const hasRootPages = props.doc.sidebar.root.length > 0;
    return (
      <Stack spacing="4">
        {Object.entries(props.doc.sidebar.categories).map(
          ([id, categories]) => {
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
                      const sidebarItemLink = `/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${item.id}`;
                      return (
                        <Box
                          key={item.id}
                          as={Link}
                          noOfLines={1}
                          fontWeight={isCurrentPage ? "bold" : "normal"}
                          color={isCurrentPage ? brand : "inherit"}
                          href={sidebarItemLink}
                        >
                          {item.title}
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
              const sidebarItemLink = `/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${item.id}`;

              return (
                <Box
                  key={item.id}
                  as={Link}
                  noOfLines={1}
                  fontWeight={isCurrentPage ? "bold" : "normal"}
                  color={isCurrentPage ? "brand.400" : "inherit"}
                  href={sidebarItemLink}
                >
                  {item.title}
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Stack>
    );
  }

  function renderSearch() {
    const seachResult = props.doc.indexes.filter((index) => {
      if (!search) {
        return false;
      }
      // check title and section title
      return (
        index.pageTitle.toLowerCase().includes(search.toLowerCase()) ||
        index.sectionTitle?.toLowerCase().includes(search.toLowerCase())
      );
    });
    return (
      <Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search"
            onClick={() => {
              setSearchOpen(true);
            }}
          />
        </InputGroup>
        <Modal
          size="xl"
          isOpen={searchOpen}
          scrollBehavior="inside"
          onClose={() => {
            setSearchOpen(false);
            setSearch("");
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody py="4" px="4">
              <Box>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      focusBorderColor="transparent"
                      variant="filled"
                      value={search}
                      placeholder="Search the docs"
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </InputGroup>
                  {seachResult.length > 0 && (
                    <Stack justify="center" display="flex">
                      {seachResult.map((item) => {
                        const isDocument = !item.sectionHash;
                        const searchItemLink = isDocument
                          ? `/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${item.pageId}`
                          : `/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${item.pageId}?scrollTo=${item.sectionHash}`;
                        return (
                          <Flex
                            align="center"
                            key={item.pageId + item.sectionHash}
                            as={Link}
                            background={cardBackground}
                            borderRadius="md"
                            padding="4"
                            href={searchItemLink}
                            minHeight="4rem"
                            _hover={{
                              background: "brand.500",
                              color: "white",
                            }}
                            onClick={() => {
                              setSearchOpen(false);
                            }}
                          >
                            <Stack
                              direction="row"
                              align="center"
                              spacing={4}
                              height="100%"
                            >
                              <Icon
                                as={isDocument ? IoMdDocument : FaHashtag}
                                color="gray.400"
                              />
                              <Stack spacing={0}>
                                {isDocument ? (
                                  <>
                                    <Text fontWeight="bold">
                                      {item.pageTitle}
                                    </Text>
                                  </>
                                ) : (
                                  <>
                                    <Text fontSize="xs">{item.pageTitle}</Text>
                                    <Text fontWeight="bold">
                                      {item.sectionTitle}
                                    </Text>
                                  </>
                                )}
                              </Stack>
                            </Stack>
                          </Flex>
                        );
                      })}
                    </Stack>
                  )}
                </Stack>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  }

  function renderTableOfContents() {
    if (props.doc.currentPage.toc.length === 0) {
      return null;
    }
    return (
      <Box>
        <Heading size="xs" textTransform="uppercase" mb={2}>
          On This Page
        </Heading>
        <Stack spacing="1">
          {props.doc.currentPage.toc.map((item) => {
            const tableOfContentsItemLink = `/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}/${props.doc.currentPage.id}?scrollTo=${item.id}`;
            return (
              <Box
                key={item.id}
                textAlign="left"
                width="100%"
                fontSize="xs"
                cursor="pointer"
                paddingLeft={(item.level - 2) * 8 + "px"}
                noOfLines={1}
                as={Link}
                href={tableOfContentsItemLink}
              >
                {item.title}
              </Box>
            );
          })}
        </Stack>
      </Box>
    );
  }
  function renderProjectLinks() {
    const projectLinks = Object.entries(props.project.data.links ?? {});
    if (projectLinks.length === 0) {
      return null;
    }
    return (
      <Box>
        <Heading size="xs" textTransform="uppercase" mb={2}>
          Links
        </Heading>
        <Stack spacing="2" align="flex-start" justify="center">
          {projectLinks.map(([label, link]) => {
            return (
              <Box key={label}>
                <Tag
                  key={label}
                  textAlign="left"
                  cursor="pointer"
                  as={Link}
                  display="inline-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                >
                  {label}
                  <TagRightIcon>
                    <ExternalLinkIcon />
                  </TagRightIcon>
                </Tag>
              </Box>
            );
          })}
        </Stack>
      </Box>
    );
  }
  function renderProjectLicense() {
    if (!props.project.data.license) {
      return null;
    }
    return (
      <Box>
        <Heading size="xs" textTransform="uppercase" mb={2}>
          License
        </Heading>
        <Box>
          <Tag size="sm">{props.project.data.license}</Tag>
        </Box>
      </Box>
    );
  }
  function renderLanguageSelector() {
    const [projectSlugWithoutLanguage, language] =
      props.project.projectSlug.split(".");
    const languagesIsoToName: Record<string, string> = {
      en: "English",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      it: "Italiano",
      pt: "Português",
      ru: "Русский",
      zh: "中文",
      "pt-br": "Português (Brasil)",
    };

    if (props.project.languages.length === 0) {
      return null;
    }

    return (
      <Box>
        <Select
          // variant="outlined"
          defaultValue={props.project.language}
          onChange={(e) => {
            if (e.target.value) {
              location.href = `/creators/${props.creator.creatorSlug}/projects/${projectSlugWithoutLanguage}.${e.target.value}`;
            } else {
              location.href = `/creators/${props.creator.creatorSlug}/projects/${projectSlugWithoutLanguage}`;
            }
          }}
        >
          <option key="" value="">
            English
          </option>
          {props.project.languages.map((language) => {
            return (
              <option key={language} value={language}>
                {languagesIsoToName[language]}
              </option>
            );
          })}
        </Select>
      </Box>
    );
  }
}

// function SearchThing() {
//   // const searchParams = useSearchParams();
//   const searchParams = new URLSearchParams(location.search);

//   const scrollTo = searchParams.get("scrollTo") || "";

//   useEffect(() => {
//     if (scrollTo) {
//       const element = document.getElementById(scrollTo);
//       if (element) {
//         element.scrollIntoView();
//       }
//     }
//   }, [scrollTo]);

//   useEffect(() => {
//     const article = document.querySelector("article");
//     const headings = article?.querySelectorAll(
//       "h1,h2,h3,h4,h5,h6"
//     ) as unknown as Array<HTMLElement>;

//     headings?.forEach((heading) => {
//       heading.style.position = "relative";

//       const anchor = document.createElement("a");
//       anchor.setAttribute("href", `?scrollTo=${heading.id}`);
//       anchor.style.opacity = "0";
//       anchor.style.transition = "opacity 0.1s ease-in-out";
//       anchor.innerHTML = "#";
//       const spacer = document.createElement("span");
//       spacer.innerHTML = "&nbsp;&nbsp;";

//       const existingAnchor = heading.querySelector("a");
//       if (existingAnchor) {
//         existingAnchor.remove();
//       }
//       const existingSpacer = heading.querySelector("span");
//       if (existingSpacer) {
//         existingSpacer.remove();
//       }

//       heading.addEventListener("mouseover", () => {
//         anchor.style.opacity = ".5";
//       });
//       heading.addEventListener("mouseout", () => {
//         anchor.style.opacity = "0";
//       });

//       heading.appendChild(spacer);
//       heading.appendChild(anchor);
//     });
//   }, []);

//   return null;
// }
