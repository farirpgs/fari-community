import { loader } from "public/catalog/loader";
import { Home } from "./page-component";

export async function generateMetadata(props: Parameters<typeof Page>[0]) {
  return {
    title: `Fari Community | Free TTRPG Resources`,
    description: "Free and Open RPG Resources Maintained by the Fari Community",
    icons: {
      icon: [
        {
          url: "https://fari.community/images/favicon-light.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "https://fari.community/images/favicon-dark.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
    openGraph: {
      title: "Fari Community",
      description: `Free and Open RPG Resources maintained by the Fari Community`,
      url: "https://fari.communityhttps://fari.community",
      siteName: "Fari Community",
      images: [
        {
          url: "https://fari.community/images/og.png",
          width: 800,
          height: 600,
        },
      ],
      locale: "en-US",
      type: "website",
    },
  };
}

export default async function Page(props: {}) {
  const allCreators = await loader.getAllCreators();
  return <Home allCreators={allCreators} />;
}
