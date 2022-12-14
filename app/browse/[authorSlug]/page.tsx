"use client";

import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MoreByAuthor } from "app/(components)/MoreByAuthor";
import { ShopCategory } from "app/(components)/ShopCategory";
import { AppLinksFactory } from "app/(domains)/links/AppLinksFactory";
import { shopProducts } from "data/shop/shopProducts";
import Link from "next/link";

export default function Page(props: { params: { authorSlug: string } }) {
  const creatorsGames = shopProducts.filter((g) => {
    const authorSlug = g.author.slug;

    return props.params.authorSlug === authorSlug;
  });
  const productsAsString = creatorsGames.map((g) => g.name).join(", ");
  const [firstGame] = creatorsGames;

  {
    /* <Page
    box={{ mt: "2rem" }}
    title={`Content by ${firstGame?.author.name}`}
    description={`${productsAsString}, and more...`}
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
              style={{
                color: "inherit",
              }}
            >
              Browse
            </Link>

            <Typography color="textPrimary">{firstGame.author.name}</Typography>
          </Breadcrumbs>
        </Box>
        <Box mb="1rem">
          <MoreByAuthor variant="h2" authorSlug={firstGame.author.slug} />
        </Box>
        <Box>
          <ShopCategory
            excludeProduct={firstGame}
            name={`You Might Also Like... `}
            tags="srd"
            count={4}
          />
        </Box>
      </Container>
    </>
  );
}
