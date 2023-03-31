import { ResolvingMetadata } from "next/dist/lib/metadata/types/metadata-interface";
import { loader } from "public/catalog/loader";
import { Creator } from "./page-component";

export async function generateMetadata(
  props: Parameters<typeof Page>[0],
  parent: ResolvingMetadata
) {
  const creator = await loader.getCreatorData(props.params.creatorSlug);

  const title = `${creator.data?.name} - Fari Community`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: title,
    description: creator.data?.description,
    openGraph: {
      title: title,
      description: creator.data?.description,
      url: `https://fari.community/creators/${props.params.creatorSlug}`,
      siteName: "Fari Community",
      images: [...previousImages],
      locale: "en-US",
      type: "website",
    },
  };
}

export default async function Page(props: {
  params: {
    creatorSlug: string;
  };
}) {
  const creator = await loader.getCreatorData(props.params.creatorSlug);
  const projects = await loader.getCreatorProjects(props.params.creatorSlug);

  if (!creator) {
    return <div>404</div>;
  }

  return (
    <>
      <Creator creator={creator} projects={projects} />
    </>
  );
}

export async function generateStaticParams() {
  const creators = await loader.getAllCreators();
  return creators.map((c) => {
    return {
      creatorSlug: c.creatorSlug,
    };
  });
}
