# Fari Community | Getting Started

Welcome to Fari Community, a place where you can find tons of free and open licensed resources for tabletop role-playing games.

Every single page on this site is publically available on GitHub and can be edited by anyone.

# Structure | Getting Started

The Fari Community's site is all based on the file structure of the `public/catalog` folder.

The folder names and files found within this folder are used to generate the site's navigation.

```sh
public/catalog
├── creators
│   ├── {creator-identifier} # Creator space
│   │   ├── index.ts # Creator config (optional)
│   │   ├── /{project-identifier} # Project space
│   │   │   ├── index.md # Project content in markdown which gets converted to HTML
│   │   │   ├── index.ts # Project config (optional)
│   │   │   ├── image.png|jpg # Project image (optional)

```

## Fari Community Markdown Parser

The Fari Community's site uses a custom Markdown parser that adds some extra features to the standard Markdown syntax.

# Creators | Site Management

This section goes over how to add or update a creator to the site.

## Creating the Creator's Space

To add a new creator, you need to create a new folder in the `public/catalog/creators` folder.

The folder name should be the creator's identifier. This identifier is used to generate the URL of the creator's page, and should be written in `kebab-case` (lowercase with hyphens).

```sh
public/catalog/creators
├── {creator-identifier}
```

## Creator Config (Optional)

You can add a `index.ts` file to the creator's folder to add some metadata about the creator.

This file is written in TypeScript and should export a default function that returns an object with the creator's data.

Use the syntax below as a template.

```ts
import { ICreatorData } from "public/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Fari RPGs",
    links: {
      twitter: "https://twitter.com/RPDeshaies",
    },
  };
}
```

### Creator Config Properties

The following properties are available for you to use:

| Field   |                                                                         | Default value                                    |
| ------- | ----------------------------------------------------------------------- | ------------------------------------------------ |
| `name`  | The creator's name.                                                     | The creator's identifier converted to title case |
| `links` | A dictionary of links to the creator's website's social media accounts. | `{}`                                             |

# Projects | Site Management

This section goes over how to add or update a project to the site.

## Creating the Project's Space

To add a new project, you need to create a new folder in the `public/catalog/creators/{creator-identifier}` folder.

The folder name should be the project's identifier. This identifier is used to generate the URL of the project's page, and should be written in `kebab-case` (lowercase with hyphens).

```sh
public/catalog/creators/{creator-identifier}
├── {project-identifier}
```

## Project Image

You can add an image to the project's folder to use as the project's image.

The image should be a `png` or `jpg` file, should be named `image.png` or `image.jpg`, and should have a resolution of `630px500px` (or have a similar aspect ratio).

```sh
public/catalog/creators/{creator-identifier}/{project-identifier}
├── image.png|jpg
```

## Project Content

You can add a `index.md` file to the project's folder to add the content of the project. This file is written in **Markdown** and will be converted to HTML by the site's Markdown parser.

The Fari Community's site uses Markdown to generate the content of the site. If you are not familiar with Markdown, it is a simple markup language that allows you to add formatting to your text using simple symbols.

You can learn more about the basic syntax [here](https://www.markdownguide.org/basic-syntax/).

The way that the Fari Community's site parses your markdown content is by splitting each main heading (`#`) into a new page. So adding a `#` to your markdown will create a new page, and all the subheadings (`##`) and content below it will be added to that page.

```md
\# Page 1

Some text

\## Section 1

Some more text

\# Page 2

Some text
```

### Categories

On top of normal heading, the Fari Community's site allows you to group your pages into categories.

To add a category to one of your project's page, you need to add a `| My Category` suffix to your page headings.

```md
\# Page 1 | My Category

Some text

\## Section 1

Some more text

\# Page 2 | My Category

Some text

\# Page 3 | Another Category

Some text
```

This allows you to group pages in the sidebar navigation, which is quite useful if you have a lot of pages.

> For a preview of that this looks like, look on the left side of this page inside the sidebar. You will see a "Getting Started" category with a "Site Management" category.

### Custom Markdown Syntax

The Fari Community's site uses a custom Markdown parser that adds some extra features to the standard Markdown syntax.

#### Categories

You can add a category to one of your project's page

## Project Config (Optional)

You can add a `index.ts` file to the project's folder to add some metadata about the project.

This file is written in TypeScript and should export a default function that returns an object with the project's data.

Use the syntax below as a template.

```ts
import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Charge",
    description:
      "A generic and fiction first RPG system to power your action packed adventures.",
    links: {
      itchIo: "https://fari-rpgs.itch.io/charge-rpg",
    },
  };
}
```

### Project Config Properties

The following properties are available for you to use:

| Field         |                                                                | Default value                                    |
| ------------- | -------------------------------------------------------------- | ------------------------------------------------ |
| `name`        | The project's name.                                            | The project's identifier converted to title case |
| `description` | A short description of the project.                            | `""`                                             |
| `links`       | A dictionary of links to the project's website's social media. | `{}`                                             |
