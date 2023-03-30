import { loader } from "public/catalog/loader";
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
  };
}

export default async function Page(props: {}) {
  const allCreators = await loader.getAllCreators();
  return <Home creators={allCreators} />;
}
