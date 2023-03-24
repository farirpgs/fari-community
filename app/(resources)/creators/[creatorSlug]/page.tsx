import { loader } from "public/catalog/loader";
import { Creator } from "./component";

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
