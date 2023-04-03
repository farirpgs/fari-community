import { ResolvingMetadata } from "next/dist/lib/metadata/types/metadata-interface";
import { loader } from "public/catalog/loader";
import Browse from "./page-component";

export async function generateMetadata(
  props: Parameters<typeof Page>[0],
  parent: ResolvingMetadata
) {
  return {
    title: `Browse - Fari Community`,
    description: "Browse all the creators and projects on Fari Community",
    openGraph: {
      title: `Browse - Fari Community`,
      description: "Browse all the creators and projects on Fari Community",
      url: `/browse`,
      siteName: "Fari Community",
      locale: "en-US",
      type: "website",
    },
  };
}

export default async function Page(props: {}) {
  const allCreators = await loader.getAllCreators();

  return <Browse creators={allCreators} />;
}
