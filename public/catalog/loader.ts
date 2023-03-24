import startCase from "lodash/startCase";
import path from "path";

export const loader = {
  async getCreatorData(creatorSlug: string): Promise<ICreator> {
    const fs = await import("fs/promises");
    const directory = path.join(process.cwd(), "public", "catalog", "creators");
    const files = await fs.readdir(directory, { withFileTypes: true });
    const folders = files.filter((f) => f.isDirectory());

    const creatorFolder = folders.find((f) => f.name === creatorSlug);
    if (!creatorFolder) {
      throw new Error(`Creator '${creatorSlug}' not found`);
    }
    let data: ICreatorData | undefined = undefined;
    try {
      const creatorDataLoader: ILoaderFunction<ICreatorData> = await import(
        `./creators/${creatorFolder.name}/index.ts`
      );
      data = creatorDataLoader?.default();
    } catch (error) {}
    const name: string = data?.name || startCase(creatorSlug);
    return {
      creatorSlug: creatorSlug,
      data: {
        name: name,
        ...data,
      },
    };
  },
  async getAllCreators() {
    const fs = await import("fs/promises");
    const directory = path.join(process.cwd(), "public", "catalog", "creators");
    const files = await fs.readdir(directory, { withFileTypes: true });
    const folders = files.filter((f) => f.isDirectory());
    const result = await Promise.all(
      folders.map(async (folder) => {
        return this.getCreatorData(folder.name);
      })
    );
    return result;
  },
  async getCreatorProjects(creatorSlug: string): Promise<Array<IProject>> {
    const fs = await import("fs/promises");
    const directory = path.join(
      process.cwd(),
      "public",
      "catalog",
      "creators",
      creatorSlug
    );
    const files = await fs.readdir(directory, { withFileTypes: true });
    const folders = files.filter((f) => f.isDirectory());
    const result = await Promise.all(
      folders.map(async (folder) => {
        return this.getProjectData(creatorSlug, folder.name);
      })
    );
    return result;
  },
  async getProjectData(creatorSlug: string, projectSlug: string) {
    const [slug, language] = projectSlug.split(".");
    const fs = await import("fs/promises");
    // load image
    let image: string | undefined = undefined;
    try {
      image = `/catalog/creators/${creatorSlug}/${slug}/image.png`;
    } catch (error) {}
    // load project
    let data: IProjectData | undefined = undefined;
    try {
      const projectDataLoader: ILoaderFunction<IProjectData> = await import(
        `./creators/${creatorSlug}/${slug}/index.ts`
      );
      data = projectDataLoader?.default();
    } catch (error) {}
    // load other languages
    const directory = path.join(
      process.cwd(),
      "public",
      "catalog",
      "creators",
      creatorSlug,
      slug
    );
    const files = await fs.readdir(directory, { withFileTypes: true });
    const otherLanguages = files
      .filter((f) => f.name.endsWith(".md") && f.name !== "index.md")
      .map((f) => f.name.replace(".md", ""));

    const name: string = data?.name || startCase(projectSlug);
    return {
      projectSlug: projectSlug,
      image: image,
      data: {
        name: name,
        language: language,
        otherLanguages: otherLanguages,
        ...data,
      },
    };
  },
  async getProjectMarkdown(creatorSlug: string, projectSlug: string) {
    const [slug, language] = projectSlug.split(".");
    const fs = await import("fs/promises");
    const directory = path.join(
      process.cwd(),
      "public",
      "catalog",
      "creators",
      creatorSlug,
      slug,
      language ? `${language}.md` : "index.md"
    );

    const fileBuffer = await fs.readFile(directory);
    const fileContent = fileBuffer.toString();
    return fileContent;
  },
};

export type ICreatorData = {
  name: string;
  description?: string;
  links?: Record<string, string>;
};

export type ICreator = {
  creatorSlug: string;
  data: ICreatorData | undefined;
};

export type IProjectData = {
  name: string;
  description?: string;
};

export type IProject = {
  projectSlug: string;
  image?: string;
  data: ICreatorData | undefined;
};

export type ILoaderFunction<T> = { default: () => T };
