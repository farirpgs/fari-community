# Introduction | Getting Started

Welcome to Fari Community, a place where you can find tons of free and open licensed resources for tabletop role-playing games.

Look at the side navigation on the left ← to find the content you are looking for.

# Adding Content | Site Management

If you are looking to **add your own content** to the site, there are two ways you can do so depending if you are familiar with Git and Markdown or not.

## I'm Familiar with Git and Markdown

If you are familiar with Git and Markdown, you can [**fork the Fari Community repository**](https://github.com/farirpgs/fari-community) and read the content of this wiki to learn how to add your own content and how the site is structured.

## I'm Not Familiar with Git and Markdown

In this case, you'll need help from members of the Fari Community to add your content to the site. To add your content, you'll need to provide us the following information:

### Creator Details

If this is your firstime adding content to the site, you'll need to provide us with some information about yourself or your organization.

#### Creator name (Required)

This is the name of the person or organization that created the content.

e.g.

```
Fari RPGs
```

#### Creator description (Required)

This is a short description of the person or organization that created the content. (max. 160 characters)

e.g.

```
Independent game design studio based in Québec, Canada that focuses on action packed, fiction-driven, and accessible gaming experiences.
```

### Advanced Creator Details Information

For more advanced users, you can also provide us with some additional information to customize the way your content is displayed on the site.

#### Creator links (Optional)

This is a dictionary of links to the creator's website's social media accounts.

```ts
{
  twitter: "https://twitter.com/RPDeshaies",
  website: "https://farirpgs.com",
}
```

### Project Details

When adding a new project to the site, you'll need to provide us with some information about the project.

#### Project name (Required)

This is the name of the project that you want to add to the site.

e.g.

```
Breathless
```

#### Project description (Required)

This is a short description of the project that you want to add to the site. (max. 160 characters)

e.g.

```
Design your own survival horror games with the Breathless System.
```

#### Project image (Required)

This is an image that will be used to represent the project on the site. The image should be a `png` or `jpg` file, should be named `image.png` or `image.jpg`, and should have a resolution of `630px500px` (or have a similar aspect ratio).

e.g.

<img src="https://raw.githubusercontent.com/farirpgs/fari-community/main/public/catalog/creators/fari-rpgs/breathless/image.png" width='200px'/>

#### Project content (Required)

This is the content of the project that you want to add to the site. The content should be written in Markdown text file (`.md`) and should be named `index.md`.

e.g.

```md
\# Breathless

Design your own survival horror games with the Breathless System.

\## What is Breathless?

> The city has been walled up from the outside. You are stuck with breathless Crawlers roaming as far as the eye can see. You are surrounded by strangers, and the only thing left to do is survive. You can’t give up now.

**Breathless** is a survival horror role-playing game where you play as Survivors trying to stay alive in a walled city full of Crawlers (zombies). The entire game fits on two sides of a letter-sized sheet of paper, making it the perfect game to print at home and enjoy for a nice and cozy zombie killing one shot.
The game is inspired by things like: Shaun of the Dead, Left 4 Dead, The Last of Us, and other great zombie related media. Basically, if you want to kill some breathless living dead, this is the game you are looking for.

...
...
```

### Advanced Project Details Information

For more advanced users, you can also provide us with some additional information to customize the way your content is displayed on the site.

#### Project links (Optional)

This is a dictionary of links to the project's website's social media accounts.

e.g.

```ts
{
  "Itch.io": "https://fari-rpgs.itch.io/breathless-srd",
  website: "https://breathless.farirpgs.com/",
}
```

#### License (Optional)

This is the license that the project is under.

e.g.

```
CC BY 4.0
```

#### CSS (Optional)

This is the inline CSS that will be applied to the project's content. This is where you can import fonts, change the color of the text, etc.

> **⚠️ Important**
>
> Every CSS customization needs to be prefixed by `article` to avoid affecting the rest of the site.\*\*

e.g.

```css
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

article h2 {
  background: #333;
  color: #fff;
}
```

#### Heading Font (Optional)

This is the font that will be used for the project's headings. This fonts needs to be imported using the `CSS` field.

e.g.

```
Roboto
```

#### Text Font (Optional)

This is the font that will be used for the project's content. This fonts needs to be imported using the `CSS` field.

e.g.

```
Lato
```

### Sending My Content

Once you have all the information ready, you can send it to us by creating a new post on the [Fari Community Content Channel](https://discord.gg/NCjZbrErFK) on our Discord

# Structure | Site Management

The Fari Community's site is all based on the file structure of the [`public/catalog`](https://github.com/farirpgs/fari-community/tree/main/public/catalog) folder.

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

Or, in a more visual way using an example

- Creator space: [link](/creators/fari-rpgs)
- Project space: [link](/creators/fari-rpgs/projects/breathless)

````sh
public/catalog
├── creators
│   ├── fari-rpgs
│   │   ├── index.ts
│   │   ├── breathless
│   │   │   ├── index.md
│   │   │   ├── index.ts
│   │   │   ├── image.png

# Creators | Site Management

This section goes over how to add or update a creator to the site.

## Creating the Creator's Space

To add a new creator, you need to create a new folder in the [`public/catalog/creators`](https://github.com/farirpgs/fari-community/tree/main/public/catalog/creators) folder.

The folder name should be the creator's identifier. This identifier is used to generate the URL of the creator's page, and should be written in `kebab-case` (lowercase with hyphens).

```sh
public/catalog/creators
├── {creator-identifier}
````

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

To add a new project, you need to create a new folder in the [`public/catalog/creators/{creator-identifier}`](https://github.com/farirpgs/fari-community/tree/main/public/catalog/creators) folder.

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
      "itch.io": "https://fari-rpgs.itch.io/charge-rpg",
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
| `license`     | The project's license.                                         | `"Unknown"`                                      |
| `css`         | Inline CSS to inject in the project's page.                    | `undefined`                                      |
| `headingFont` | The font to use for the project's heading.                     | `"Inter"`                                        |
| `textFont`    | The font to use for the project's body.                        | `"Inter"`                                        |
