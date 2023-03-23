export type ICommunityResources = {
  authors: Array<IAuthor>;
};

export type IAuthor = {
  name: string;
  slug: string;
  links: {
    twitter?: string;
    website?: string;
  };
  products: Array<IResource>;
};

export enum ResourceTypeEnum {
  SRD = "SRD",
  Blog = "Blog",
  Resource = "Resource",
  Game = "Game",
}

export type IResource = {
  name: string;
  slug: string;
  type: ResourceTypeEnum;
  description: string;
  image: string;
  tags: Array<string>;
  affiliate?: boolean;
  license?: License;
  footer?: string;
  links: {
    driveThru?: string;
    itchIo?: string;
    gumroad?: string;
  };
};

export type IResourceWithAuthor = IResource & {
  author: {
    name: string;
    slug: string;
    links: {
      twitter?: string;
      website?: string;
    };
  };
};

export enum License {
  Reserved = "All Rights Reserved",
  CC_BY_3 = "CC BY 3.0",
  CC_BY_4 = "CC BY 4.0",
}
