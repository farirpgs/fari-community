import { loader } from "public/catalog/loader";
import Browse from "./page-component";

export function generateMetadata(props: Parameters<typeof Page>[0]) {
  return { title: `Browse - Fari Community` };
}

export default async function Page(props: {}) {
  const allCreators = await loader.getAllCreators();

  return <Browse creators={allCreators} />;
}
