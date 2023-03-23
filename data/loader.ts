import startCase from "lodash/startCase";
import path from "path";
export const loader = {
  async getCreatorData(creatorSlug: string): Promise<ICreator> {
    const fs = await import("fs/promises");
    const directory = path.join(process.cwd(), "data", "creators");
    const files = await fs.readdir(directory, { withFileTypes: true });
    const folders = files.filter((f) => f.isDirectory());

    const creatorFolderName = folders.find((f) => f.name === creatorSlug);
    if (!creatorFolderName) {
      throw new Error(`Creator '${creatorSlug}' not found`);
    }
    let data: ICreatorData | undefined = undefined;
    try {
      const creatorDataLoader: ILoaderFunction<ICreatorData> = await import(
        `./creators/${creatorFolderName}/index.ts`
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
    const directory = path.join(process.cwd(), "data", "creators");
    const files = await fs.readdir(directory, { withFileTypes: true });
    const folders = files.filter((f) => f.isDirectory());
    const result = await Promise.all(
      folders.map(async (folder) => {
        return this.getCreatorData(folder.name);
      })
    );
    return result;
  },
  async getCreatorProjects(creatorSlug: string): Promise<I> {
    const fs = await import("fs/promises");
    const directory = path.join(process.cwd(), "data", "creators", creatorSlug);
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
    const fs = await import("fs/promises");
    const directory = path.join(
      process.cwd(),
      "data",
      "creators",
      creatorSlug,
      projectSlug
    );
    // load image
    let image: string | undefined = undefined;
    try {
      image = "./creators/" + creatorSlug + "/" + projectSlug + "/image.png";
    } catch (error) {}
    // load dagage
    let data: IProjectData | undefined = undefined;
    try {
      const projectDataLoader: ILoaderFunction<IProjectData> = await import(
        `./creators/${creatorSlug}/${projectSlug}/index.ts`
      );
      data = projectDataLoader?.default();
    } catch (error) {}
    const name: string = data?.name || startCase(projectSlug);
    return {
      projectSlug: projectSlug,
      image: image,
      data: {
        name: name,
        ...data,
      },
    };
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
