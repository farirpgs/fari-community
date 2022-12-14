import kebabCase from "lodash/kebabCase";
import { Remarkable } from "remarkable";

export type IDoc = ReturnType<InstanceType<typeof DocParser>["getDoc"]>;

export class DocParser {
  #frontMatter: IDocFrontMatter;
  #style: string;
  #html: string;
  #content: string;
  #pages: Array<IPageElement>;
  #toc: Array<ITocElement>;
  #sidebar: ISidebar;
  #searchIndexes: Array<ISearchIndex>;
  #currentPageId: string;
  #previousPageId: string | undefined;
  #nextPageId: string | undefined;
  constructor(
    private options: {
      currentChapterId?: string;
      markdown: string;
    }
  ) {
    this.#frontMatter = this.extractFrontmatter();
    this.#style = this.#extractStyle();

    const { pages, toc, sidebar, searchIndexes } =
      this.#extractPagesTocAndSearchIndexes();
    this.#pages = pages;
    this.#toc = toc;
    this.#sidebar = sidebar;
    this.#searchIndexes = searchIndexes;

    this.#currentPageId = this.options.currentChapterId ?? this.#pages[0].id;
    const currentPageIndex = this.#pages.findIndex(
      (page) => page.id === this.#currentPageId
    );
    const currentPage = this.#pages[currentPageIndex];
    this.#previousPageId = this.#pages[currentPageIndex - 1]?.id;
    this.#nextPageId = this.#pages[currentPageIndex + 1]?.id;

    this.#content = currentPage.content;
    this.#html = this.#convertMarkdownToHtml(currentPage.content);
  }

  getDoc() {
    return {
      frontMatter: this.#frontMatter,
      style: this.#style,
      html: this.#html,
      pages: this.#pages,
      toc: this.#toc,
      sidebar: this.#sidebar,
      numberOfChapters: this.#pages.length,
      numberOfWordsInPage: this.#content.split(" ").length,
      currentPageId: this.#currentPageId,
      previousPageId: this.#previousPageId,
      nextPageId: this.#nextPageId,
      searchIndexes: this.#searchIndexes,
    };
  }

  #extractPagesTocAndSearchIndexes() {
    const pages: Array<IPageElement> = [];
    const toc: Array<ITocElement> = [];
    const sidebar: ISidebar = {
      root: [],
      categories: {},
    };
    const markdownWithoutFrontMatter = this.#getMarkdownWithoutFrontmatter();
    const lines = markdownWithoutFrontMatter.split("\n");
    let currentPage: {
      id: string;
      content: string;
    } | null = null;

    for (const line of lines) {
      // handle page
      if (line.startsWith("# ")) {
        if (currentPage) {
          pages.push(currentPage);
        }
        currentPage = {
          id: DocParser.makeSectionId(line),
          content: "",
        };
      } else {
        if (currentPage) {
          currentPage.content += line + "\n";
        }
      }

      // handle toc
      if (line.startsWith("## ") || line.startsWith("### ")) {
        const level = line.startsWith("## ") ? 2 : 3;
        const title = line.replace("## ", "").replace("### ", "");
        toc.push({
          id: DocParser.makeSectionId(line),
          title,
          level,
        });
      }

      // handle sidebar
      if (line.startsWith("# ")) {
        const pageTitle = line.split("|")[0]?.trim();
        const pageCategory = line.split("|")[1]?.trim();
        if (!pageCategory) {
          sidebar.root.push({
            id: DocParser.makeSectionId(line),
            title: pageTitle,
          });
        } else {
          const prev = sidebar.categories[pageCategory] ?? [];

          sidebar.categories[pageCategory] = [
            ...prev,
            {
              id: DocParser.makeSectionId(line),
              title: pageTitle,
            },
          ];
        }
      }
    }
    if (currentPage) {
      pages.push(currentPage);
    }
    return { pages, toc, sidebar, searchIndexes: [] };
  }

  private static makeSectionId(line: string): string {
    const lineWithoutHash = line.replace("# ", "");
    const lineWithoutDividerSuffix = lineWithoutHash.split("|")[0].trim();
    const lineKebabCase = kebabCase(lineWithoutDividerSuffix);
    return lineKebabCase;
  }

  #convertMarkdownToHtml(markdown: string | undefined) {
    const md = new Remarkable({
      html: true,
    });
    const pagesContent = markdown || "";
    const html = md.render(pagesContent);

    return html;
  }

  #extractStyle() {
    const style = this.options.markdown.match(/<style>([\s\S]*?)<\/style>/);
    if (style) {
      return style[1].trim();
    }
    return "";
  }

  #getMarkdownWithoutFrontmatter() {
    const frontmatter = this.options.markdown.match(/---\n([\s\S]*?)\n---/);
    if (frontmatter) {
      return this.options.markdown.replace(frontmatter[0], "");
    }
    return this.options.markdown;
  }

  extractFrontmatter(): Record<string, string> {
    const frontMatter = this.options.markdown.split("---");
    if (frontMatter.length === 1) {
      return {};
    }
    const [, content] = frontMatter;
    const firstLines = content.split("\n");
    const frontMatterObject: Record<string, string> = {};
    for (const line of firstLines) {
      const [key, value] = line.split(": ");
      if (key && value) {
        frontMatterObject[key] = value;
      }
    }

    return frontMatterObject;
  }
}

export type ISidebar = {
  root: Array<ISidebarItem>;

  categories: Record<
    string, // category label
    Array<ISidebarItem> // category items
  >;
};

export type IPageElement = {
  id: string;
  content: string;
};
export type ITocElement = {
  id: string;
  title: string;
  level: number;
};

export type ISidebarItem = {
  id: string;
  title: string;
};
type IDocFrontMatter = {
  fonts?: string;
  headingFont?: string;
  textFont?: string;
  highlightFont?: string;
  headingUppercase?: string;
  languages?: string;
};

export type ISearchIndex = {
  id: string;
  label: string;
  group: string;
  preview: string;
  path: string;
};
