import { DocParser } from "app/(domains)/documents/DocParser";
import { MarkdownParser } from "app/(domains)/markdown/MarkdownParser";
import { loader } from "public/catalog/loader";
import { Project } from "../page-component";

export async function generateMetadata(props: Parameters<typeof Page>[0]) {
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
    currentChapterId: props.params.pageSlug,
    markdown: fileContents,
  }).getDoc();

  const title = `${doc.currentPage.title} - ${project.data.name} - ${creator.data?.name} - Fari Community`;

  const currentPageTextContent = MarkdownParser.toPlainText(
    doc.currentPage.content
  );
  const description = currentPageTextContent.substring(0, 160) + "...";

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://fari.community/creators/${props.params.creatorSlug}/projects/${props.params.projectSlug}/${props.params.pageSlug}`,
      siteName: "Fari Community",
      images: [
        {
          url: project.image ?? "",
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
    pageSlug: string;
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
    currentChapterId: props.params.pageSlug,
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

  const params: {
    creatorSlug: string;
    projectSlug: string;
    pageSlug: string;
  }[] = [];

  for (const c of creators) {
    const projects = await loader.getCreatorProjects(c.creatorSlug);
    for (const p of projects) {
      const fileContents = await loader.getProjectMarkdown(
        c.creatorSlug,
        p.projectSlug
      );

      const doc = new DocParser({
        currentChapterId: undefined,
        markdown: fileContents,
      }).getDoc();
      doc.pages.forEach((page) => {
        params.push({
          creatorSlug: c.creatorSlug,
          projectSlug: p.projectSlug,
          pageSlug: page.id,
        });
      });
    }
  }

  return params;
}
