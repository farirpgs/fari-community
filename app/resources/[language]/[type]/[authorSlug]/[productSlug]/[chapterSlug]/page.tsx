import { Document } from "app/(components)/Document/Document";
import { DocParser } from "app/(domains)/documents/DocParser";
import fs from "fs/promises";
import path from "path";

export default async function Page(props: {
  params: {
    language: string;
    type: string;
    authorSlug: string;
    productSlug: string;
    chapterSlug: string;
  };
}) {
  const directory = path.join(process.cwd(), "data", "documents");
  const filePath =
    props.params.language === "en"
      ? `/${props.params.authorSlug}/${props.params.productSlug}.md`
      : `/${props.params.authorSlug}/${props.params.productSlug}_${props.params.language}.md`;
  const fileContents = await fs.readFile(directory + filePath, "utf8");

  const doc = new DocParser({
    currentChapterId: props.params.chapterSlug,
    markdown: fileContents,
  }).getDoc();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: doc.style as string }} />

      <Document
        doc={doc}
        language={props.params.language}
        slug={props.params.productSlug}
      />
    </>
  );
}
