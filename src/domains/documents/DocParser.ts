import kebabCase from "lodash/kebabCase";
import { MarkdownParser } from "../markdown/MarkdownParser";

export type IDoc = ReturnType<InstanceType<typeof DocParser>["getDoc"]>;

export class DocParser {
  #html: string;
  #content: string;
  #pages: Array<IPageElement>;
  #indexes: Array<ISearchIndex>;
  #currentPage: IPageElement;
  #nextPage: IPageElement | undefined;
  #previousPage: IPageElement | undefined;
  #toc: Array<ITocElement>;
  #sidebar: ISidebar;

  constructor(
    private options: {
      currentChapterId?: string;
      markdown: string;
    }
  ) {
    const { pages, toc, sidebar, indexes } = this.#extractPages();
    this.#pages = pages;
    this.#indexes = indexes;
    this.#toc = toc;
    this.#sidebar = sidebar;

    const currentPageId = this.options.currentChapterId ?? this.#pages[0].id;
    const currentPageIndex = this.#pages.findIndex(
      (page) => page.id === currentPageId
    );
    this.#currentPage = this.#pages[currentPageIndex];
    this.#previousPage = this.#pages[currentPageIndex - 1];
    this.#nextPage = this.#pages[currentPageIndex + 1];

    this.#content = this.#currentPage.content;
    this.#html = MarkdownParser.toHtml(this.#currentPage.content);

    // add `id` to all headings
    this.#html = this.#html.replace(
      /<h([1-6])>(.*?)<\/h[1-6]>/g,
      (_match, level, title) => {
        const id = DocParser.makeSectionId(title);
        return `<h${level} id="${id}">${title}</h${level}>`;
      }
    );
  }

  getDoc() {
    return {
      html: this.#html,
      pages: this.#pages,
      indexes: this.#indexes,
      toc: this.#toc,
      sidebar: this.#sidebar,
      numberOfChapters: this.#pages.length,
      numberOfWordsInPage: this.#content.split(" ").length,
      previousPage: this.#previousPage,
      nextPage: this.#nextPage,
      currentPage: this.#currentPage,
    };
  }

  #extractPages() {
    const pages: Array<IPageElement> = [];
    const toc: Array<ITocElement> = [];
    const sidebar: ISidebar = {
      root: [],
      categories: {},
    };
    const lines = this.options.markdown.split("\n");
    let currentPage: IPageElement | null = null;
    const idsRecordCounter: Record<string, number> = {};

    for (const line of lines) {
      // handle page
      if (line.startsWith("# ")) {
        if (currentPage) {
          pages.push(currentPage);
        }

        // handle id generation
        const newIdPrefix = DocParser.makeSectionId(line);
        const pageIdCount = idsRecordCounter[newIdPrefix] ?? 0;
        idsRecordCounter[newIdPrefix] = pageIdCount + 1;
        const currentPageId =
          pageIdCount === 0 ? newIdPrefix : `${newIdPrefix}-${pageIdCount}`;

        // trim title and category
        const [title, category] = line.split("|");
        const trimmedTitle = title.split("#").join("").trim();
        const trimmedCategory = category?.trim();

        // handle sidebar
        if (!trimmedCategory) {
          sidebar.root.push({
            id: currentPageId,
            title: trimmedTitle,
          });
        } else {
          const prev = sidebar.categories[trimmedCategory] ?? [];
          sidebar.categories[trimmedCategory] = [
            ...prev,
            {
              id: currentPageId,
              title: trimmedTitle,
            },
          ];
        }

        currentPage = {
          id: currentPageId,
          title: trimmedTitle,
          content: "",
          toc: [],
          indexes: [],
        };
      } else {
        if (currentPage) {
          const lineToAdd = line.split("\\#").join("#");
          currentPage.content += lineToAdd + "\n";
        }
      }

      // handle toc
      if (line.startsWith("## ") || line.startsWith("### ")) {
        const level = line.startsWith("## ") ? 2 : 3;
        const title = line.split("#").join("").trim();
        currentPage?.toc.push({
          id: DocParser.makeSectionId(line),
          title: title,
          level: level,
        });
      }
    }
    // adds last page
    if (currentPage) {
      pages.push(currentPage);
    }
    if (currentPage && currentPage.id === this.options.currentChapterId) {
      this.#currentPage = currentPage;
    }

    // add indexes to all pages
    for (const page of pages) {
      // const _pageMarkdownPreviewWithoutAnyMarkdown = page.content
      //   .split("\n")
      //   .map((line) => line.split("#").join("").trim());
      page.indexes.push({
        pageId: page.id,
        pageTitle: page.title,
        sectionHash: undefined,
        sectionTitle: undefined,
      });
      for (const tocElement of page.toc) {
        page.indexes.push({
          pageId: page.id,
          pageTitle: page.title,
          sectionHash: tocElement.id,
          sectionTitle: tocElement.title,
        });
      }
    }

    const indexes = pages.flatMap((page) => page.indexes);

    return { pages, toc, sidebar, currentPage, indexes };
  }

  private static makeSectionId(line: string): string {
    const lineWithoutHash = line.replace("# ", "");
    const lineWithoutDividerSuffix = lineWithoutHash.split("|")[0].trim();
    const lineKebabCase = kebabCase(lineWithoutDividerSuffix);
    return lineKebabCase;
  }
}

export type ISidebar = {
  root: Array<ISidebarItem>;
  categories: Record<
    string, // category label
    Array<ISidebarItem> // category items
  >;
};

type ISearchIndex = {
  pageId: string;
  pageTitle: string;
  sectionHash: string | undefined;
  sectionTitle: string | undefined;
};

export type IPageElement = {
  id: string;
  title: string;
  content: string;
  toc: Array<ITocElement>;
  indexes: Array<ISearchIndex>;
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
