"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import TocIcon from "@mui/icons-material/Toc";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import NativeSelect from "@mui/material/NativeSelect";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  IDoc,
  ISearchIndex,
  ISidebarItem,
} from "app/(domains)/documents/DocParser";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { MarkdownContent } from "../MarkdownContent/MarkdownContent";

export function Document(props: {
  doc: IDoc | undefined;
  language: string | undefined;
  slug: string | undefined;

  renderSideBarHeader?(): React.ReactNode;
  renderSideBarFooter?(): React.ReactNode;
  renderFooter?(): React.ReactNode;
}) {
  const theme = useTheme();

  const [autocompleteOpen, setAutocompleteOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileChapterMenuOpen, setMobileChapterMenuOpen] = useState(false);
  const [mobileTocMenuOpen, setMobileTocMenuOpen] = useState(false);
  const [openedCategory, setOpenedCategory] = useState<string>();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  function onLanguageChange(newLanguage: string) {
    return "";
    // history.push(
    //   AppLinksFactory.makeProductLink({
    //     author: authorSlug,
    //     game: gameSlug,
    //     type: product?.type,
    //     language: newLanguage,
    //   })
    // );
  }
  function makeChapterLink(chapterId: string) {
    return "";
    // return AppLinksFactory.makeGameChapterLink({
    //   author: authorSlug,
    //   game: gameSlug,
    //   chapter: chapterId,
    //   type: product?.type,
    //   language: language,
    // });
  }

  // useEffect(() => {
  //   if (!location.hash) {
  //     return;
  //   }
  //   const scrollElement = document.querySelector(
  //     `[id="${location.hash.replace("#", "")}"]`
  //   );

  //   let timeout: number;
  //   if (scrollElement) {
  //     timeout = setTimeout(() => {
  //       scrollElement.scrollIntoView({ behavior: "smooth" });
  //     }, Delays.scrollToHeadingDelay);
  //   }

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [location.hash, props.chapter]);

  useEffect(() => {
    // if (props.doc) {
    //   const categories = Object.keys(props.doc.sidebar.categories);
    //   categories.forEach((categoryName) => {
    //     const sidebarItems = props.doc?.sidebar.categories[categoryName];
    //     const open = sidebarItems?.some(
    //       (i) => i.path === props.doc?.currentPageId.id
    //     );
    //     if (open) {
    //       setOpenedCategory(categoryName);
    //     }
    //   });
    // }
  }, [props.doc]);

  if (!props.doc) {
    return null;
  }

  const doc = props.doc;

  return (
    <Box>
      <Grid container spacing={4}>
        {!isMdDown && (
          <Grid item xs={3}>
            {renderSideBar()}
          </Grid>
        )}
        <Grid item sm={12} md={9} lg={6}>
          {renderContent()}
        </Grid>
        {!isLgDown && (
          <Grid item xs={3}>
            {renderSearchBar()}
            {renderLanguageBar()}
            {renderToc()}
          </Grid>
        )}
      </Grid>
      {renderMobileMenuBar()}
      <Drawer
        anchor="left"
        open={mobileChapterMenuOpen}
        PaperProps={{
          sx: {
            width: "80vw",
          },
        }}
        onClose={() => {
          setMobileChapterMenuOpen(false);
        }}
      >
        <Box>{renderSideBar()}</Box>
      </Drawer>
      <Drawer
        anchor="right"
        open={mobileTocMenuOpen}
        PaperProps={{
          sx: {
            width: "400px",
            maxWidth: "80vw",
          },
        }}
        onClose={() => {
          setMobileTocMenuOpen(false);
        }}
      >
        <Box p="1rem">
          {renderSearchBar()}
          {renderLanguageBar()}
          {renderToc()}
        </Box>
      </Drawer>
    </Box>
  );

  function renderMobileMenuBar() {
    if (isMdUp) {
      return null;
    }
    return (
      <Box
        displayPrint="none"
        p=".5rem"
        sx={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          boxShadow: theme.shadows[24],
          background: theme.palette.background.paper,
        }}
      >
        <Grid
          container
          spacing={1}
          alignItems="center"
          wrap="nowrap"
          justifyContent="space-between"
        >
          <Grid item>
            <Button
              color="inherit"
              startIcon={<MenuIcon color="inherit" />}
              onClick={() => {
                setMobileChapterMenuOpen(true);
              }}
            >
              Chapters
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="inherit"
              endIcon={<TocIcon color="inherit" />}
              onClick={() => {
                setMobileTocMenuOpen(true);
              }}
            >
              Table of Content
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }

  function renderSideBar() {
    const shouldRenderChapters = doc.numberOfChapters > 1;

    return (
      <>
        <Box
          displayPrint="none"
          sx={{
            background: theme.palette.background.paper,
            boxShadow: theme.shadows[1],
            maxHeight: "calc(100vh)",
            position: "sticky",
            top: "0px",
            overflowY: "auto",
          }}
        >
          {props.renderSideBarHeader?.()}
          {shouldRenderChapters && (
            <>
              <Box>
                <MenuList dense>
                  {renderCategoriesSideBarItems()}
                  {renderRootSideBarItems()}
                </MenuList>
              </Box>
              <Box px="1rem">
                <Divider />
              </Box>
            </>
          )}
          {props.renderSideBarFooter?.()}
        </Box>
      </>
    );
  }

  function renderRootSideBarItems() {
    return doc.sidebar.root.map((sidebarItem, index) => {
      return renderSidebarItem({
        key: index,
        item: sidebarItem,
        paddingLeft: "0",
      });
    });
  }

  function renderCategoriesSideBarItems() {
    return Object.keys(doc.sidebar.categories).map((categoryName, index) => {
      const sidebarItems = doc.sidebar.categories[categoryName];
      const open = openedCategory === categoryName;

      return [
        <MenuItem
          key={index}
          sx={{
            width: "100%",
            display: "flex",
            color: "inherit",
            textDecoration: "none",
          }}
          onClick={() => {
            setOpenedCategory((prev) => {
              return prev === categoryName ? undefined : categoryName;
            });
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid
              container
              spacing={1}
              justifyContent="space-between"
              wrap="nowrap"
              alignItems="center"
            >
              <Grid item xs zeroMinWidth>
                <Typography
                  noWrap
                  component="span"
                  sx={{
                    display: "block",
                  }}
                >
                  {categoryName}
                </Typography>
              </Grid>
              <Grid item>
                <ArrowForwardIosIcon
                  htmlColor={theme.palette.text.secondary}
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    transform: open ? "rotate(90deg)" : "rotate(0deg)",
                    transition: theme.transitions.create("transform"),
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </MenuItem>,
        // eslint-disable-next-line react/jsx-key
        <Collapse in={open}>
          {sidebarItems.map((sidebarItem, index) => {
            return renderSidebarItem({
              key: index,
              item: sidebarItem,
              paddingLeft: ".5rem",
            });
          })}
        </Collapse>,
      ];
    });
  }

  function renderSidebarItem(renderProps: {
    key: any;
    item: ISidebarItem;
    paddingLeft: string;
  }) {
    const selected = doc?.currentPageId === renderProps.item.id;
    const title = renderProps.item.title;
    return (
      <MenuItem
        key={renderProps.key}
        component={Link}
        selected={selected}
        href={makeChapterLink(renderProps.item.id)}
        sx={{
          color: theme.palette.text.primary,
          textDecoration: "none",
          backgroundColor: "inherit",
          borderLeft: selected
            ? `4px solid ${theme.palette.secondary.main}`
            : `4px solid transparent`,
        }}
        onClick={() => {
          setMobileChapterMenuOpen(false);
        }}
      >
        <Typography
          noWrap
          sx={{
            // color: theme.palette.text.primary,
            paddingLeft: renderProps.paddingLeft,
            fontWeight: selected
              ? theme.typography.fontWeightBold
              : theme.typography.fontWeightRegular,
          }}
        >
          {title}
        </Typography>
      </MenuItem>
    );
  }

  function renderSearchBar() {
    const sortedOptions = doc?.searchIndexes ?? [];
    // chapter?.searchIndexes.sort((a, b) => {
    //   return -b.group.localeCompare(a.group);
    // }) ?? [];
    return (
      <>
        <Autocomplete
          freeSolo
          autoHighlight
          openOnFocus
          open={autocompleteOpen}
          size="small"
          filterOptions={createFilterOptions({ limit: 20 })}
          options={sortedOptions}
          groupBy={(index) => index.group ?? ""}
          // getOptionLabel={(index) => index.label as any}
          inputValue={search}
          renderOption={(renderProps, index) => (
            <React.Fragment key={index.id}>
              <MenuItem
                {...renderProps}
                onClick={() => {
                  setAutocompleteOpen(false);
                  // history.push(makeChapterLink(index.path));
                  setMobileTocMenuOpen(false);
                }}
              >
                <Box pl=".5rem" width="100%">
                  <Grid container alignItems="center">
                    <Grid item xs={12}>
                      <Typography
                        noWrap
                        variant="body1"
                        color="textPrimary"
                        sx={{
                          fontSize: "1rem",
                        }}
                      >
                        {index.label}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        noWrap
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          fontSize: ".8rem",
                        }}
                      >
                        {index.preview}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </MenuItem>
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              sx={{ width: "100%", margin: "0" }}
              label="Search"
              margin="normal"
              variant="standard"
            />
          )}
          onOpen={() => {
            setAutocompleteOpen(true);
          }}
          onClose={() => {
            setAutocompleteOpen(false);
          }}
          onChange={(event, newValue) => {
            const path = (newValue as ISearchIndex).path;
            if (path) {
              setAutocompleteOpen(false);
              // history.push(makeChapterLink(path));
              setMobileTocMenuOpen(false);
            }
          }}
          onInputChange={(e, value, reason) => {
            if (reason === "input") {
              setSearch(value);
            } else {
              setSearch("");
            }
          }}
        />
      </>
    );
  }

  function renderLanguageBar() {
    if (!doc?.frontMatter?.languages) {
      return null;
    }
    const languages = doc?.frontMatter?.languages
      .split(",")
      .map((l) => l.trim());

    const languageLabels: Record<string, string> = {
      en: "English",
      "pt-br": "Português",
      fr: "Français",
      es: "Español",
      de: "Deutsch",
    };

    return (
      <>
        <Box mt=".5rem" display="flex" justifyContent="flex-end">
          <NativeSelect
            defaultValue={props.language}
            onChange={(event) => {
              const language = event.target.value;
              setMobileTocMenuOpen(false);
              onLanguageChange(language);
            }}
          >
            {languages.map((language, index) => {
              console.log("label", language);

              return (
                <option key={index} value={language}>
                  {languageLabels[language] ?? language}
                </option>
              );
            })}
          </NativeSelect>
        </Box>
      </>
    );
  }

  function renderToc() {
    return (
      <>
        <Box
          sx={{
            maxHeight: "calc(100vh)",
            position: "sticky",
            padding: "4rem 0 ",
            top: "0px",
            overflowY: "auto",
          }}
        >
          <Stack spacing={1}>
            <Box
              component="a"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: theme.typography.fontWeightBold,
                textDecoration: "none",
                cursor: "pointer",
                display: "flex",
                marginLeft: `0`,
              }}
              onClick={(e) => {
                e.preventDefault();
                setMobileTocMenuOpen(false);
                window.scrollTo({
                  top: 0,
                });
              }}
            >
              <Typography
                noWrap
                sx={{
                  fontSize: ".85rem",
                }}
              >
                {doc.currentPageId}
              </Typography>
            </Box>
            {doc?.toc.map((tocItem, index) => {
              const indentationLevel = tocItem.level - 1;
              return (
                <Box key={index}>
                  <Box
                    component="a"
                    href={`#${tocItem.id}`}
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      display: "flex",
                      marginLeft: `${indentationLevel}rem`,
                    }}
                    onClick={() => {
                      setMobileTocMenuOpen(false);
                    }}
                  >
                    <Typography
                      noWrap
                      sx={{
                        fontSize: ".85rem",
                      }}
                    >
                      {tocItem.title}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </>
    );
  }

  function renderTime() {
    const wordsPerMinute = 130;
    const numberOfWordsInChapter = doc?.numberOfWordsInPage ?? 0;
    const time = Math.round(numberOfWordsInChapter / wordsPerMinute);
    return (
      <Box position="absolute" right="0" displayPrint="none">
        <Typography variant="caption" color={theme.palette.text.secondary}>
          {time > 0 ? time : 1} min read
        </Typography>
      </Box>
    );
  }

  function renderContent() {
    return (
      <>
        <Box sx={{ position: "relative" }}>
          {renderSmallPreviousNextNavigation()}
          {renderTime()}
          <Box className="fari-games-document">
            <MarkdownContent
              headingFont={doc?.frontMatter?.headingFont}
              textFont={doc?.frontMatter?.textFont}
              highlightFont={doc?.frontMatter?.highlightFont}
              headingUppercase={doc?.frontMatter?.headingUppercase}
              style={doc?.style}
              html={doc?.html}
            />
          </Box>
          <Box mt="1rem" />
          <Divider />
          <Box mb="1rem" />
          {renderPreviousNextNavigation()}
          <Box mb="1rem" />
          {props.renderFooter?.()}
          {false && renderDevModeInfo()}
        </Box>
      </>
    );
  }

  function renderDevModeInfo() {
    return null;
    // return (
    //   <pre
    //     sx={({
    //       whiteSpace: "pre-wrap",
    //     })}
    //   >
    //     <p>
    //       {"title: "}
    //       {chapter.currentPageId.text}
    //     </p>
    //     <p>
    //       {"description: "}
    //       {chapter.currentPageId.description}
    //     </p>
    //   </pre>
    // );
  }

  function renderSmallPreviousNextNavigation() {
    return (
      <Box displayPrint="none">
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {doc.previousPageId && (
              <Link
                href={makeChapterLink(doc.previousPageId)}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  textAlign: "left",
                }}
                onClick={() => {
                  // track("go_to_previous", {
                  //   game: props.slug,
                  //   index: chapter.previousPageId,
                  // });
                }}
              >
                <Button color="inherit">
                  {"« "}
                  {doc.pages.find((p) => p.id === doc.previousPageId)?.id}
                </Button>
              </Link>
            )}
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {doc.nextPageId && (
              <Link
                href={makeChapterLink(doc.nextPageId)}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  textAlign: "right",
                }}
                onClick={() => {
                  // track("go_to_next", {
                  //   game: props.slug,
                  //   index: chapter.nextChapter?.id,
                  // });
                }}
              >
                <Button color="inherit">
                  {doc.pages.find((p) => p.id === doc.nextPageId)?.id}
                  {" »"}
                </Button>
              </Link>
            )}
          </Grid>
        </Grid>
      </Box>
    );
  }

  function renderPreviousNextNavigation() {
    return (
      <Box displayPrint="none">
        <Grid
          container
          spacing={1}
          alignItems="stretch"
          sx={{
            color: theme.palette.text.disabled,
          }}
        >
          {doc.previousPageId && (
            <Grid item xs={12} md={doc.nextPageId ? 6 : 12}>
              <Link
                href={makeChapterLink(doc.previousPageId)}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  height: "100%",
                }}
                onClick={() => {
                  // track("go_to_previous", {
                  //   game: props.slug,
                  //   index: chapter.previousPageId,
                  // });
                }}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  color="inherit"
                  size="large"
                  startIcon={
                    <ArrowBackIcon
                      sx={{
                        width: "1.5rem",
                        height: "1.5rem",
                      }}
                    />
                  }
                  sx={{
                    height: "100%",
                    padding: "1.5rem 1rem",
                    textAlign: "right",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography color="textSecondary" variant="caption">
                        Previous
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography color="textPrimary" fontWeight="bold">
                        {doc.pages.find((p) => p.id === doc.previousPageId)?.id}
                      </Typography>
                    </Grid>
                  </Grid>
                </Button>
              </Link>
            </Grid>
          )}
          {doc.nextPageId && (
            <Grid item xs={12} md={doc.previousPageId ? 6 : 12}>
              <Link
                href={makeChapterLink(doc.nextPageId)}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  height: "100%",
                }}
                onClick={() => {
                  // track("go_to_next", {
                  //   game: props.slug,
                  //   index: chapter.nextChapter?.id,
                  // });
                }}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  color="inherit"
                  size="large"
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        width: "1.5rem",
                        height: "1.5rem",
                      }}
                    />
                  }
                  sx={{
                    height: "100%",
                    padding: "1.5rem 1rem",
                    textAlign: "left",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography color="textSecondary" variant="caption">
                        Next
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography color="textPrimary" fontWeight="bold">
                        {doc.pages.find((p) => p.id === doc.nextPageId)?.id}
                      </Typography>
                    </Grid>
                  </Grid>
                </Button>
              </Link>
            </Grid>
          )}
        </Grid>
      </Box>
    );
  }
}
