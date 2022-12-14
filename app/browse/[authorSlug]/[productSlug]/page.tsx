"use client";

import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ProductDetails } from "app/(components)/ProductDetails";
import { shopProducts } from "data/shop/shopProducts";
import { MoreByAuthor } from "../../../../app/(components)/MoreByAuthor";
import { ShopCategory } from "../../../../app/(components)/ShopCategory";
import { AppLinksFactory } from "../../../../app/(domains)/links/AppLinksFactory";

export default function Page(props: {
  params: { authorSlug: string; productSlug: string };
}) {
  const selectedGame = shopProducts.find((g) => {
    return (
      props.params.authorSlug === g.author.slug &&
      props.params.productSlug === g.slug
    );
  });

  const selectedGameTags = selectedGame?.tags ?? [];

  const theme = useTheme();

  {
    /* <Page
    box={{ mt: "2rem" }}
    title={`${selectedGame?.name} by ${selectedGame?.author.name}`}
    image={selectedGame?.image}
    description={`${selectedGame?.description}`}
  > */
  }
  return (
    <>
      <Container
        sx={{
          marginTop: "2rem",
        }}
      >
        <Box mb="2rem">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              color="inherit"
              href={AppLinksFactory.makeHomeLink()}
              component={Link}
            >
              Browse
            </Link>
            <Link
              color="inherit"
              href={AppLinksFactory.makeAuthorLink(selectedGame)}
              component={Link}
            >
              {selectedGame?.author.name}
            </Link>
            <Typography color="textPrimary">{selectedGame?.name}</Typography>
          </Breadcrumbs>
        </Box>
        <ProductDetails
          alignItems="flex-start"
          justifyContent="space-between"
          padding="2rem 0"
          product={selectedGame}
          color={theme.palette.text.primary}
        />
        <ShopCategory
          excludeProduct={selectedGame}
          name={`You Might Also Like... `}
          tags={selectedGameTags.join(", ")}
          count={4}
        />
        <MoreByAuthor
          variant="h3"
          authorSlug={selectedGame?.author.slug}
          count={4}
          excludeProduct={selectedGame}
        />
      </Container>
    </>
  );
}
