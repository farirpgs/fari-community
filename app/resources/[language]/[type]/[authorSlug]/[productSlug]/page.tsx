import fs from "fs/promises";
import path from "path";
import { DocParser } from "../../../../../(domains)/documents/DocParser";

export default async function Page(props: {
  params: {
    language: string;
    type: string;
    authorSlug: string;
    productSlug: string;
  };
}) {
  const directory = path.join(process.cwd(), "data", "documents");
  const filePath =
    props.params.language === "en"
      ? `/${props.params.authorSlug}/${props.params.productSlug}.md`
      : `/${props.params.authorSlug}/${props.params.productSlug}_${props.params.language}.md`;
  const fileContents = await fs.readFile(directory + filePath, "utf8");

  const doc = new DocParser({
    markdown: fileContents,
  }).getDoc();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: doc.style as string }} />
      <div
        className="fari-games-document"
        // sx={{
        //   marginTop: "1rem",
        // }}
        dangerouslySetInnerHTML={{
          __html: doc.html,
        }}
      />
    </>
  );
}
