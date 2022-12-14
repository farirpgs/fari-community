"use client";

import { css } from "@emotion/css";
import { Box } from "@mui/material";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { IShopProductWithAuthor } from "data/shop/types/IShopProduct";
import Link from "next/link";
import { useState } from "react";
import { AppLinksFactory } from "../(domains)/links/AppLinksFactory";
import { ProductLicense } from "./ProductLicense";
import { ProductType } from "./ProductType";

export function ProductCard(props: { product: IShopProductWithAuthor }) {
  const theme = useTheme();
  const [hover, setHover] = useState(false);
  return (
    <Box
      sx={{
        marginBottom: "1rem",
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Link
        href={AppLinksFactory.makeProductBrowseLink(props.product)}
        style={{
          cursor: "pointer",
          position: "relative",
          display: "inline-block",
          alignItems: "center",
          width: "100%",
          height: "16rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            background: `linear-gradient(90deg, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, .5) 100%), url(${props.product.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&:after": {
              backdropFilter: "blur(16px)",
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            },
          }}
        />

        <picture>
          <img
            src={props.product.image}
            alt={props.product.name}
            className={css({
              margin: "0 auto",
              display: "block",
              width: "90%",
              height: "90%",
              objectFit: "contain",
              position: "relative",
              top: "50%",
              transform: "translateY(-50%)",
            })}
          />
        </picture>
        <Fade in={hover}>
          <div
            className={css({
              position: "absolute",
              bottom: ".75rem",
              left: ".5rem",
            })}
          >
            <Stack direction="row" spacing={1}>
              <ProductType product={props.product} />
            </Stack>
          </div>
        </Fade>
        <Fade in={hover}>
          <div
            className={css({
              position: "absolute",
              bottom: ".75rem",
              right: ".5rem",
            })}
          >
            <Stack direction="row" spacing={1}>
              <ProductLicense product={props.product} />
            </Stack>
          </div>
        </Fade>
      </Link>
      <div>
        <Link
          href={AppLinksFactory.makeProductBrowseLink(props.product)}
          className={css({
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: theme.palette.text.primary,
            },
          })}
        >
          <Typography variant="h6" color="textPrimary">
            {props.product.name}
          </Typography>
        </Link>
      </div>
      <div>
        <Typography variant="button" color="textSecondary">
          {props.product.author.name}
        </Typography>
      </div>
      <div>
        <Typography variant="caption" color="textSecondary">
          {props.product.description}
        </Typography>
      </div>
    </Box>
  );
}
