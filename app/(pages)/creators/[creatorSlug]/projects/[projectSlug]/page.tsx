import { DocParser } from "app/(domains)/documents/DocParser";
import { loader } from "public/catalog/loader";
import { Project } from "./page-component";

export async function generateMetadata(props: Parameters<typeof Page>[0]) {
  const creator = await loader.getCreatorData(props.params.creatorSlug);
  const project = await loader.getProjectData(
    props.params.creatorSlug,
    props.params.projectSlug
  );

  const title = `${project.data.name} - ${creator.data?.name} - Fari Community`;
  return {
    title: title,
    description: project.data.description,
    openGraph: {
      title: title,
      description: project.data.description,
      url: `https://fari.community/creators/${props.params.creatorSlug}/projects/${props.params.projectSlug}`,
      siteName: "Fari Community",
      images: [
        {
          url: `https://fari.community${project.image}` ?? "",
          width: 630,
          height: 500,
        },
      ],
      locale: "en-US",
      type: "article",
    },
  };
}

export default async function Page(props: {
  params: {
    creatorSlug: string;
    projectSlug: string;
  };
}) {
  const creator = await loader.getCreatorData(props.params.creatorSlug);
  const project = await loader.getProjectData(
    props.params.creatorSlug,
    props.params.projectSlug
  );

  const fileContents = await loader.getProjectMarkdown(
    props.params.creatorSlug,
    props.params.projectSlug
  );

  const doc = new DocParser({
    currentChapterId: undefined,
    markdown: fileContents,
  }).getDoc();

  if (!creator) {
    return <div>404</div>;
  }

  return (
    <>
      <Project creator={creator} project={project} doc={doc} />
    </>
  );
}

export async function generateStaticParams() {
  const creators = await loader.getAllCreators();

  const params: { creatorSlug: string; projectSlug: string }[] = [];

  for (const creator of creators) {
    const projects = await loader.getCreatorProjects(creator.creatorSlug);
    for (const project of projects) {
      params.push({
        creatorSlug: creator.creatorSlug,
        projectSlug: project.projectSlug,
      });

      for (const language of project.languages) {
        params.push({
          creatorSlug: creator.creatorSlug,
          projectSlug: `${project.projectSlug}.${language}`,
        });
      }
    }
  }

  return params;
}
