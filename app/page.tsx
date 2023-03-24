import { Home } from "./page-component";

export async function generateMetadata(props: Parameters<typeof Page>[0]) {
  return {
    title: `Fari Community | Free TTRPG Resources`,

    icons: {
      icon: [
        {
          url: "/images/favicon-light.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/images/favicon-dark.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
    // other: {},
  };
}

export default function Page(props: {}) {
  return <Home />;
}
