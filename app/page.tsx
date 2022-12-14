"use client";

{
  /* <Route exact path="/search" component={SearchPage} />

<Route
  exact
  path="/:language/:type/:author/:game/:chapter?"
  component={ProductPage}
/>
<Route
  exact
  path={"/browse/:authorSlug/"}
  render={() => {
    return <ShopAuthorPage />;
  }}
/>
<Route
  exact
  path={"/browse/:authorSlug/:productSlug"}
  render={() => {
    return <ShopAuthorProductPage />;
  }}
/> */
}

import { Box } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ShopCategory, useGames } from "app/(components)/ShopCategory";
import { shopCategories } from "data/shop/shopCategories";
import { IShopProductWithAuthor } from "data/shop/types/IShopProduct";
import { useRouter } from "next/navigation";
import { default as React, useState } from "react";
import { Settings } from "react-slick";
import { BetterSlider } from "./(components)/BetterSlider";
import { ProductDetails } from "./(components)/ProductDetails";
import { AppLinksFactory } from "./(domains)/links/AppLinksFactory";

export default function Page() {
  const heroSliderSettings: Settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const featuredGames = useGames("new");

  return (
    <Container>
      <Box mb="2rem">
        <BetterSlider height="400px" settings={heroSliderSettings}>
          {featuredGames.map((game, i) => {
            return (
              <React.Fragment key={i}>{renderHeroSlide(game)}</React.Fragment>
            );
          })}
        </BetterSlider>
      </Box>
      <Box mb="2rem">
        <ShopPageSearch />
      </Box>
      {shopCategories.map((category, i) => {
        return (
          <ShopCategory
            key={i}
            name={category.name}
            tags={category.tags}
            count={100}
          />
        );
      })}
    </Container>
  );

  function renderHeroSlide(game: IShopProductWithAuthor) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "400px",
          position: "relative",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",

            background: `linear-gradient(90deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, .5) 100%), url(${game.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&:after": {
              backdropFilter: "blur(8px)",
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              pointerEvents: "none" /* make the overlay click-through */,
            },
          }}
        />
        <ProductDetails
          clickable
          alignItems="center"
          product={game}
          padding={isSmall ? "2rem" : "2rem 6rem"}
          color="#fff"
          justifyContent="space-evenly"
        />
      </Box>
    );
  }
}

function ShopPageSearch() {
  const [search, setSearch] = useState("");

  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(AppLinksFactory.makeSearchPage(search));
      }}
    >
      <TextField
        fullWidth
        placeholder="Search..."
        value={search}
        InputProps={{
          sx: {
            fontSize: "1.5rem",
            borderRadius: "8px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit">
                <SearchIcon
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </form>
  );
}
