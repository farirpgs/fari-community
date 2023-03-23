import {
  IResourceWithAuthor,
  ResourceTypeEnum,
} from "../../../data/catalog/ICommunityResources";

export const AppLinksFactory = {
  makeHomeLink() {
    return "/";
  },
  makeBrowseLink() {
    return "/browse";
  },
  makeAuthorLink(product: IResourceWithAuthor | undefined) {
    if (!product) {
      return "";
    }
    return `/browse/${product.author.slug}`;
  },
  makeProductBrowseLink(product: IResourceWithAuthor | undefined) {
    if (!product) {
      return "";
    }
    return `/browse/${product.author.slug}/${product.slug}`;
  },
  makeProductLink(props: {
    author: string;
    type: ResourceTypeEnum | undefined;
    game: string;
    language?: string;
  }) {
    if (!props.type) {
      return "";
    }
    const category = `${props.type.toLowerCase()}s`;
    if (!props.language || props.language === "en") {
      return `/resources/en/${category}/${props.author}/${props.game}`;
    }
    return `/resources/${props.language}/${category}/${props.author}/${props.game}`;
  },
  makeSearchPage(query: string) {
    return `/search?query=${query}`;
  },
  makeGameChapterLink(props: {
    author: string;
    game: string;
    chapter: string;
    type?: string;
    language?: string;
  }) {
    if (!props.type) {
      return "";
    }
    const category = `${props.type.toLowerCase()}s`;
    if (!props.language || props.language === "en") {
      return `/en/${category}/${props.author}/${props.game}/${props.chapter}`;
    }
    return `/${props.language}/${category}/${props.author}/${props.game}/${props.chapter}`;
  },
};
