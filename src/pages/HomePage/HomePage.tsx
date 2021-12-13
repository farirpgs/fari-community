import { css } from "@emotion/css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Page } from "../../components/Page/Page";

const Sponsors: Array<{ image: string; name: string; link: string }> = [
  {
    name: "Netlify",
    image: "https://www.netlify.com/img/global/badges/netlify-color-accent.svg",
    link: "https://www.netlify.com",
  },
];

export function HomePage() {
  return (
    <>
      <Page
        title={null}
        description={null}
        container={{
          maxWidth: "lg",
        }}
        box={{
          mt: "2rem",
        }}
      >
        <Box>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            wrap="nowrap"
            alignItems="center"
          >
            <Grid item>
              <img
                src="/images/app.png"
                alt="Fari Community"
                style={{ height: "70px" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h1" component="h1" align="center">
                Fari
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="h2" component="h2" gutterBottom align="center">
            The Open TTRPG Community
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "4rem",
          }}
        >
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              {renderCard({
                name: "Fari App",
                description: "The Free and Open-Source Virtual Tabletop.",
                image: "https://fari.app/assets/images/fari-app-logo.png",
                link: "https://fari.app",
                cta: "Play for Free",
              })}
            </Grid>
            <Grid item md={4} xs={12}>
              {renderCard({
                name: "Fari Games",
                description: "The Ultimate Collection of Open Licensed SRDs.",
                image: "https://fari.app/assets/images/fari-app-logo.png",
                link: "https://fari.games",
                cta: "Read the SRDs",
              })}
            </Grid>
            <Grid item md={4} xs={12}>
              {renderCard({
                name: "Discord Server",
                description:
                  "Come and talk with awesome people on Fari's Discord Server.",
                image: "https://fari.app/assets/images/fari-app-logo.png",
                link: "/discord",
                cta: "Join the Discord",
              })}
            </Grid>
          </Grid>
        </Box>
      </Page>
    </>
  );

  function renderCard(renderProps: {
    name: string;
    description: string;
    image: string;
    cta: string;
    link: string;
  }) {
    return (
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          sx={{
            display: "none",
          }}
          image={renderProps.image}
          alt={renderProps.name}
        />
        <CardContent
          sx={{
            flex: "1 1 auto",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {renderProps.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {renderProps.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component="a"
            href={renderProps.link}
            color="secondary"
          >
            {renderProps.cta}
          </Button>
        </CardActions>
      </Card>
    );
  }

  function renderSponsors() {
    return (
      <Box py="2rem" mb={"2rem"}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Sponsors
          </Typography>
          <Grid container spacing={4} justifyContent="flex-start">
            {Sponsors.map((sponsor, i) => {
              return (
                <Grid item key={i}>
                  <a href={sponsor.link} target="_blank" rel="noreferrer">
                    <img
                      className={css({ width: "auto", height: "50px" })}
                      src={sponsor.image}
                      title={sponsor.name}
                    />
                  </a>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default HomePage;
